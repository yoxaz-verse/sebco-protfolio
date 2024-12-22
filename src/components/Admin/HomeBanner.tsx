import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Spacer,
} from "@nextui-org/react";
import {
  postData,
  updateData,
  deleteData,
  getData,
} from "@/backend/Services/firestore";
import { uploadImage } from "@/backend/Services/storage";

export interface Banner {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
}

const HomeBanner: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [currentBanner, setCurrentBanner] = useState<Banner>({
    title: "",
    description: "",
    imageUrl: "/placeholder.png",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    const response = await getData("home_banners");
    if (response.status) {
      const formattedBanners: Banner[] = response.data.map((item: any) => ({
        id: item.id,
        title: item.title ?? "", // Fallback for missing fields
        description: item.description ?? "",
        imageUrl: item.imageUrl ?? "/placeholder.png", // Correct field name
      }));
      setBanners(formattedBanners);
    } else {
      alert("Failed to fetch banners.");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setCurrentBanner((prev) => ({
          ...prev,
          imageUrl: reader.result as string, // Preview selected image
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentBanner((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let imageUrl = currentBanner.imageUrl;

    // Upload the selected image if a new file is chosen
    if (file) {
      const uploadResponse = await uploadImage(
        file,
        `home_banners/${Date.now()}`
      );
      if (!uploadResponse.status || !uploadResponse.data) {
        alert("Failed to upload image.");
        setIsSubmitting(false);
        return;
      }
      imageUrl = uploadResponse.data;
    }

    const bannerData = { ...currentBanner, imageUrl };

    if (currentBanner.id) {
      // Update existing banner
      const updateResponse = await updateData(
        bannerData,
        "home_banners",
        currentBanner.id
      );
      if (!updateResponse.status) {
        alert("Failed to update banner.");
        setIsSubmitting(false);
        return;
      }
    } else {
      // Create a new banner
      const createResponse = await postData("home_banners", bannerData);
      if (!createResponse.status) {
        alert("Failed to add banner.");
        setIsSubmitting(false);
        return;
      }
    }

    await fetchBanners();
    resetForm();
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setCurrentBanner({
      title: "",
      description: "",
      imageUrl: "/placeholder.png",
    });
    setFile(null);
  };

  const handleEdit = (banner: Banner) => {
    setCurrentBanner(banner);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this banner?")) {
      const response = await deleteData("home_banners", id);
      if (response.status) {
        fetchBanners();
      } else {
        alert("Failed to delete banner.");
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Home Banner Management</h2>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col gap-4">
          <Input
            name="title"
            label="Banner Title"
            placeholder="Enter title"
            value={currentBanner.title}
            onChange={handleInputChange}
            required
          />
          <Input
            name="description"
            label="Banner Description"
            placeholder="Enter description"
            value={currentBanner.description}
            onChange={handleInputChange}
            required
          />
          <div>
            <label className="block mb-2">Banner Image</label>
            <label>
              <Image
                src={currentBanner.imageUrl}
                alt="Banner Image"
                width={200}
                height={200}
                className="cursor-pointer mb-2"
              />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <Button type="submit" isLoading={isSubmitting}>
            {currentBanner.id ? "Update Banner" : "Add Banner"}
          </Button>
          {currentBanner.id && (
            <Button color="danger" variant="flat" onPress={resetForm}>
              Cancel
            </Button>
          )}
        </div>
      </form>

      {/* Display Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {banners.map((banner) => (
          <Card key={banner.id} className="w-full" isHoverable>
            <CardHeader>
              <Image
                src={banner.imageUrl}
                alt={banner.title}
                width={1000}
                height={1000}
                className="w-full"
              />
            </CardHeader>
            <CardBody>
              <h3 className="font-bold">{banner.title}</h3>
              <p>{banner.description}</p>
            </CardBody>
            <CardFooter>
              <Button onPress={() => handleEdit(banner)}>Edit</Button>
              <Spacer x={2} />
              <Button color="danger" onPress={() => handleDelete(banner.id!)}>
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
