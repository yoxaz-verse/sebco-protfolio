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
  isOpen: any;
  id: any;
  newCols: any;
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
  const [uploadImageUrl, setUploadImageUrl] = useState("/01.png");
  const [currdata, setCurrData] = useState<any>({});
  const [submitting, setSubmitting] = useState(false);
  const [tabs, setTabs] = useState<any>([]);
  const [service, setService] = useState<string>("");
  const [uploadImageUrlArr, setUploadImageUrlArr] = useState(Array(5).fill("/01.png"));
  const [files, setFiles] = useState<(File | null)[]>(Array(5).fill("/01.png"));
  const [file, setFile] = useState<(File | null)>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const pushTabs = (tab: string, index: number) => {
    const tabsArr = [...tabs];
    tabsArr[index] = tab;
    setTabs(tabsArr);
  };

  const removeTab = (index: number): void => {
    const tabsArr = [...tabs];
    const updatedServiceArr = [...tabs];
    updatedServiceArr.splice(index, 1);
    setTabs(tabsArr);
    setTabs(updatedServiceArr);
  };

  useEffect(() => {
    if (data) {
      setLoading(true);
      setCurrData(data);
      setUploadImageUrl(data.image || "/01.png");
      if (data.images) {
        const arr: any = [...files];
        data.images.forEach((e: any, index: any) => {
          arr[index] = e.data;
        });
        setFiles(data.images);
        setUploadImageUrlArr(arr);
      }
      if (data.projectDetails) {
        const t = [...tabs];
        data.projectDetails.map((d: any, index: any) => {
          t[index] = d;
        });
        setTabs(t);
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
    setFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleMultipleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    console.log(index);
    if (!e.target.files) {
      alert("No file uploaded");
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const newUploadImageUrlArr = [...uploadImageUrlArr];
      newUploadImageUrlArr[index] = reader.result as string;
      setUploadImageUrlArr(newUploadImageUrlArr);
    };
    reader.readAsDataURL(file);

    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  };


  const handleChangeCurrentData = (field: any, value: any) => {
    setCurrData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent, close: () => void) => {
    e.preventDefault();
    setSubmitting(true);
    console.log(newCols);
    const filteredCols = newCols.filter((col: any) => col.name.toLowerCase() !== "actions");
    const allFieldsFilled = filteredCols.every((col: any) => {
      if (data.hasOwnProperty('image')) {
        return currdata["image"];
      }
      return currdata[col.name.toLowerCase()];
    });

    if (!allFieldsFilled) {
      alert("Please fill in all fields and select an image.");
      setSubmitting(false);
      return;
    }

    let updated_data: any = { ...currdata };
    const current_time = new Date().getTime();

    if (data.images) {
      for (let i = 0; i < data.images.length; i++) {
        const image = data.images[i];
        const file = files[i];

        if (image !== file) {
          const image_delete = await deleteImage(image);
          if (!image_delete.status) {
            alert("Image delete failed");
            setSubmitting(false);
            return;
          }

          const name = currdata.name ?? currdata.heading ?? currdata.title;
          const image_upload_resp = await uploadImage(file!, `${title}/${name}-${current_time}`);
          if (!image_upload_resp.status) {
            alert("Image upload failed");
            setSubmitting(false);
            return;
          }

          updated_data.images[i] = image_upload_resp.data;
        }
      }
    }

    const resp = await updateData(updated_data, title, currdata.id);
    if (!resp.status) {
      alert("Data upload failed");
      setSubmitting(false);
      return;
    } else {
      alert("Data uploaded successfully");
      generateRandomId();
      setSubmitting(false);
      close();
    }
  };

  return (
    <>
      {loading ? <>
        <div className="flex flex-col h-[40vh] items-center justify-center">
          <Spinner />
          <h1>Loading data..</h1>
        </div>
      </> :
        <Modal
          isOpen={isOpen}
          className="overflow-y-scroll"
          onOpenChange={onOpenChange}
          placement="top-center"
          onClose={() => {
            setTabs(data.projectDetails);
            setUploadImageUrlArr(data.images ?? Array(5).fill("/01.png"));
            setUploadImageUrl(data.image ?? "/01.png");
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
                          <div className="flex flex-row gap-2 overflow-x-scroll">
                            {uploadImageUrlArr.map((imageUrl: string, index: number) => (
                              <div key={index}>
                                <label htmlFor={`${title}-image-${index}`}>
                                  <Image
                                    className="cursor-pointer"
                                    src={imageUrl}
                                    alt="upload"
                                    width={200}
                                    height={200}
                                  />
                                </label>
                                <input
                                  className="hidden"
                                  id={`${title}-image-${index}`}
                                  name={column.name.toLowerCase()}
                                  placeholder="Image"
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => handleMultipleChange(e, index)}
                                />
                              </div>
                            ))}
                          </div>
                        );
                      case "tabselect":
                        return (
                          <div className="flex flex-col gap-4 justify-around">
                            <div className="flex flex-row gap-2">
                              {tabs.map((tab: any, tabIndex: any) => (
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
                                if (service.length > 0) {
                                  const emptyIndex = tabs.findIndex((tab: any) => tab === "");
                                  if (emptyIndex !== -1) {
                                    pushTabs(service, emptyIndex);
                                    setTabs([...tabs, service]);
                                    setService("");
                                  } else {
                                    alert("No more space for new tabs");
                                  }
                                }
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
                                width={200}
                                height={200}
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
      }
    </>
  );
}
