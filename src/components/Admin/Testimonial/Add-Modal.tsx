import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  Chip,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Image,
  Textarea,
} from "@nextui-org/react";
import { uploadImage, multipleUpload } from "@/backend/Services/storage";
import { postData } from "@/backend/Services/firestore";

interface AddModalProps {
  title: string;
  generateRandomId: () => any;
  columns: any;
}

export default function AddModal({ title, generateRandomId, columns }: AddModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [uploadImageUrl, setUploadImageUrl] = useState("/01.png");
  const [uploadImageUrlArr, setUploadImageUrlArr] = useState<string[]>(Array(5).fill("/01.png"));
  const [submitting, setSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<(File | null)[]>(Array(5).fill(null));
  const [tabs, setTabs] = useState<string[]>(Array(5).fill(""));
  const [service, setService] = useState<string>("");
  const [serviceArr, setServiceArr] = useState<string[]>([]);

  const pushTabs = (tab: string, index: number) => {
    const tabsArr = [...tabs];
    tabsArr[index] = tab;
    setTabs(tabsArr);
  };

  const removeTab = (index: number): void => {
    const tabsArr = [...tabs];
    const updatedServiceArr = [...serviceArr];
    updatedServiceArr.splice(index, 1);
    setTabs(tabsArr);
    setServiceArr(updatedServiceArr);
  };

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

  const handleSubmit = async (e: any, close: () => void) => {
    e.preventDefault();
    setSubmitting(true);
    const formElement = e.target as HTMLFormElement;
    const inputs = formElement.querySelectorAll("input, textarea");
    const data: any = {};

    inputs.forEach((input: any) => {
      const name = input.name;
      const value = input.value;
      console.log(inputs, value);
      if (name !== "" && name !== "main image") {
        data[name] = value;
      }
    });

    const hasImageColumn = columns.some((column: any) => column.type === "image");
    const hasImagesColumn = columns.some((column: any) => column.type === "images");

    if (hasImageColumn && !file) {
      alert("Please select an image");
      setSubmitting(false);
      return;
    }
    if (hasImagesColumn && files.every((file) => file === null)) {
      alert("Please select at least one image");
      setSubmitting(false);
      return;
    }

    const current_time = new Date().getTime();

    if (hasImageColumn && file) {
      const image_upload_resp = await uploadImage(file, `${title}/${data.name ?? data.heading ?? data.title ?? data.position}-${current_time}`);
      if (!image_upload_resp.status) {
        alert("Image upload failed");
        setSubmitting(false);
        return;
      }
      data.image = image_upload_resp.data;
    }

    if (hasImagesColumn) {
      const filesToUpload = files.filter((file) => file !== null) as File[];
      if (filesToUpload.length > 0) {
        const images_upload_resp = await multipleUpload(filesToUpload, `${title}/${data.name ?? data.heading ?? data.title}-${current_time}`);
        if (!images_upload_resp.status) {
          alert("Multiple image upload failed");
          setSubmitting(false);
          return;
        }
        data.images = images_upload_resp.data;
      }
    }

    if (serviceArr.length > 0) {
      data.projectDetails = serviceArr;
    }
    console.log(data);
    const resp = await postData(title, data);
    if (!resp.status) {
      alert("Data upload failed");
      setServiceArr(Array(5).fill(""));
      setUploadImageUrlArr(Array(5).fill(""));
    } else {
      alert("Data uploaded successfully");
      generateRandomId();
      setServiceArr(Array(5).fill(""));
      setUploadImageUrlArr(Array(5).fill(""));
      setSubmitting(false);
      close();
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="warning">{`Add ${title}`}</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        onClose={() => {
          setUploadImageUrl("/01.png");
          setSubmitting(false);
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form
                onSubmit={(e) => {
                  handleSubmit(e, onClose);
                }}
              >
                <ModalHeader className="flex flex-col gap-1">{`Add ${title}`}</ModalHeader>
                <ModalBody>
                  {columns.map((column: any, columnIndex: number) => {
                    switch (column.type) {
                      case "text":
                        return (
                          <Input key={columnIndex} label={column.name} name={column.name.toLowerCase()} placeholder={column.name} required />
                        );
                      case "image":
                        return (
                          <div key={columnIndex}>
                            <label htmlFor={`${title}-image-${columnIndex}`}>
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
                              id={`${title}-image-${columnIndex}`}
                              name={column.name.toLowerCase()}
                              placeholder="Image"
                              required
                              type="file"
                              multiple={false}
                              accept="image/*"
                              onChange={handleChange}
                            />
                          </div>
                        );
                      case "textbox":
                        return (
                          <Textarea key={columnIndex} label={column.name} name={column.name.toLowerCase()} placeholder={column.name} required />
                        );
                      case "action":
                        return null;
                      case "images":
                        return (
                          <div key={columnIndex}>
                            <h1>{column.name}</h1>
                            <label>
                              <div className="flex flex-row overflow-x-scroll">
                                {uploadImageUrlArr.map((uploadImg: any, imgIndex: any) => (
                                  <div key={imgIndex}>
                                    <label htmlFor={`${title}-multiple-image-${imgIndex}`}>
                                      <Image
                                        className="cursor-pointer"
                                        src={uploadImg}
                                        alt="upload"
                                        key={imgIndex}
                                        width={200}
                                        height={200}
                                      />
                                    </label>
                                    <input
                                      className="hidden"
                                      id={`${title}-multiple-image-${imgIndex}`}
                                      name={column.name.toLowerCase()}
                                      placeholder="Images"
                                      type="file"
                                      multiple={false}
                                      accept="image/*"
                                      onChange={(e) => handleMultipleChange(e, imgIndex)}
                                    />
                                  </div>
                                ))}
                              </div>
                            </label>
                          </div>
                        );
                      case "tabselect":
                        return (
                          <div className="flex flex-col gap-4 justify-around" key={columnIndex}>
                            <div className="flex flex-row gap-2">
                              {tabs.map((tab, tabIndex) => (
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
                                  const emptyIndex = tabs.findIndex(tab => tab === "");
                                  if (emptyIndex !== -1) {
                                    pushTabs(service, emptyIndex);
                                    setServiceArr([...serviceArr, service]);
                                    setService("");
                                  } else {
                                    alert("No more space for new tabs");
                                  }
                                }
                              }}>Add</Button>
                            </div>
                          </div>
                        );
                      default:
                        return null;
                    }
                  })}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={() => onClose()}>
                    Close
                  </Button>
                  <Button isLoading={submitting} color="secondary" type="submit">
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
