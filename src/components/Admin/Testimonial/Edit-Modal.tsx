import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Chip,
  Image,
  Textarea,
  Spinner,
} from "@nextui-org/react";
import { deleteImage, uploadImage } from "@/backend/Services/storage";
import { updateData } from "@/backend/Services/firestore";

interface EditModalProps {
  title: string;
  data: any;
  isOpen: boolean;
  id: any;
  newCols: any[];
  generateRandomId: () => any;
  onOpenChange: () => any;
}

export default function EditModal({
  title,
  data,
  newCols,
  generateRandomId,
  id,
  isOpen,
  onOpenChange,
}: EditModalProps) {
  const [uploadImageUrl, setUploadImageUrl] = useState<string>("/01.png");
  const [currdata, setCurrData] = useState<any>({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [tabs, setTabs] = useState<any[]>([]);
  const [service, setService] = useState<string>("");
  const [uploadImageUrlArr, setUploadImageUrlArr] = useState<string[]>(Array(5).fill("/01.png"));
  const [files, setFiles] = useState<(File | null)[]>(Array(5).fill(null));
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      setLoading(true);
      setCurrData(data);
      setUploadImageUrl(data.image || "/01.png");
      if (data.images) {
        setFiles(data.images.map((image: any) => null)); // Initialize files state with null values
        setUploadImageUrlArr(data.images);
      }
      if (data.projectDetails) {
        setTabs(data.projectDetails);
      }
      setLoading(false);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      alert("No file uploaded");
      return;
    }
    const file = e.target.files[0];
    setFiles([file]); // Update files state with the new file
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleMultipleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      alert("No file uploaded");
      return;
    }

    const files: FileList = e.target.files;
    const newFiles: File[] = Array.from(files).slice(0, 5);
    setFiles(newFiles);

    Promise.all(newFiles.map(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      return new Promise<string>((resolve, reject) => {
        reader.onloadend = () => {
          const url = reader.result as string;
          resolve(url);
        };
        reader.onerror = reject;
      });
    })).then((urls) => {
      setUploadImageUrlArr(urls);
    }).catch(error => {
      console.error('Error reading files:', error);
    });
  };

  const handleChangeCurrentData = (field: any, value: any) => {
    setCurrData((prev: any) => ({ ...prev, [field]: value }));
  };

  const pushTabs = (tab: string) => {
    setTabs((prevTabs: any[]) => [...prevTabs, tab]);
  };

  const removeTab = (index: number): void => {
    const updatedTabs = [...tabs];
    updatedTabs.splice(index, 1);
    setTabs(updatedTabs);
  };

  const handleSubmit = async (e: React.FormEvent, close: () => void) => {
    e.preventDefault();
    setSubmitting(true);
    console.log(currdata);
    // Validate form fields


    try {
      // Upload new images if files have been changed
      const updatedImages = await Promise.all(files.map(async (file, index) => {
        if (file !== null) {
          // Delete old image
          if (data.images && data.images[index]) {
            await deleteImage(data.images[index]);
          }
          // Upload new image
          const name = currdata.name ?? currdata.heading ?? currdata.title;
          const imageUploadResp = await uploadImage(file, `${title}/${name}-${new Date().getTime()}`);
          return imageUploadResp.data;
        } else {
          return data.images ? data.images[index] : null;
        }
      }));

      // Update data with new image URLs
      const updatedData = {
        ...currdata,
        images: updatedImages,
        projectDetails: tabs,
      };

      // Call Firestore update function
      const resp = await updateData(updatedData, title, currdata.id);

      if (!resp.status) {
        alert("Data upload failed");
      } else {
        alert("Data uploaded successfully");
        generateRandomId();
        close();
      }
    } catch (error) {
      console.error("Error updating data:", error);
      alert("An error occurred while updating data.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      className="overflow-y-scroll"
      onOpenChange={onOpenChange}
      placement="top-center"
      onClose={() => {
        setTabs(data.projectDetails || []);
        setUploadImageUrlArr(data.images || Array(5).fill("/01.png"));
        setUploadImageUrl(data.image || "/01.png");
        setSubmitting(false);
      }}
    >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={(e) => handleSubmit(e, onClose)}>
            <ModalHeader className="flex flex-col gap-1">{`Edit ${title}`}</ModalHeader>
            <ModalBody>
              {newCols.filter((col: any) => col.name.toLowerCase() !== "actions").map((column: any, index: number) => {
                switch (column.type) {
                  case "text":
                    return (
                      <Input
                        key={index}
                        label={column.name}
                        placeholder={column.name}
                        value={currdata[column.name.toLowerCase()] || ""}
                        onChange={(e) => handleChangeCurrentData(column.name.toLowerCase(), e.target.value)}
                        required
                      />
                    );
                  case "images":
                    return (
                      <div>
                        <h1>{column.name}</h1>
                        <label>
                          <div className="flex flex-row overflow-x-scroll">
                            {uploadImageUrlArr.map((uploadImg: string, imgIndex: number) => (
                              <div key={imgIndex}>
                                <Image
                                  className="cursor-pointer"
                                  src={uploadImg}
                                  alt="upload"
                                  width={200}
                                  height={200}
                                />
                              </div>
                            ))}
                            <input
                              id={`${title}-multiple-images`}
                              name={column.name.toLowerCase()}
                              placeholder="Images"
                              type="file"
                              max={5}
                              multiple={true}
                              accept="image/png, image/jpeg"
                              onChange={(e) => handleMultipleChange(e)}
                            />
                          </div>
                        </label>
                      </div>
                    );
                  case "tabselect":
                    return (
                      <div className="flex flex-col gap-4 justify-around">
                        <div className="flex flex-row gap-2">
                          {tabs.map((tab: any, tabIndex: number) => (
                            tab !== "" && <Chip variant="flat" color="warning" onClose={() => removeTab(tabIndex)} key={tabIndex}>{tab}</Chip>
                          ))}
                        </div>
                        <div className="flex flex-row justify-around">
                          <Input
                            required
                            className="w-1/2"
                            value={service}
                            placeholder={column.name}
                            type="text"
                            onChange={(e) => setService(e.target.value)}
                          />
                          <Button color="primary" onClick={() => {
                            pushTabs(service);
                            setService("");
                          }}>Add</Button>
                        </div>
                      </div>
                    );
                  case "textbox":
                    return (
                      <Textarea
                        key={index}
                        label={column.name}
                        placeholder={column.name}
                        value={currdata[column.name.toLowerCase()] || ""}
                        onChange={(e) => handleChangeCurrentData(column.name.toLowerCase(), e.target.value)}
                        required
                      />
                    );
                  case "image":
                    return (
                      <div key={index}>
                        <label htmlFor={`${title}-image-${index}`}>
                          <Image
                            className="cursor-pointer"
                            src={uploadImageUrl}
                            alt="upload"
                            width={400}
                            height={400}
                          />
                        </label>
                        <input
                          className="hidden"
                          id={`${title}-image-${index}`}
                          name={column.name.toLowerCase()}
                          placeholder="Image"
                          type="file"
                          accept="image/*"
                          onChange={handleChange}
                        />
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="flat"
                onPress={() => onClose()}
              >
                Close
              </Button>
              <Button isLoading={submitting} color="secondary" type="submit">
                Submit
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
