"use client";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Image } from "@nextui-org/react";
import { uploadImage } from "@/backend/Services/storage";
import { postData } from "@/backend/Services/firestore";
import { set } from "firebase/database";
interface AddModalProps {
    title: string;
}
export default function AddModal({ title }: AddModalProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [uploadImageUrl, setUploadImageUrl] = React.useState("/01.png");
    const [submitting, setSubmitting] = React.useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        console.log(file);

        if (!file) {
            alert("No file selected");
            console.error("No file selected");
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setUploadImageUrl(reader.result as string);
        };
    };


    const handleSubmit = async (e: any, close: () => void) => {
        e.preventDefault()
        setSubmitting(true)
        const formElement = e.target as HTMLFormElement;
        const inputs = formElement.querySelectorAll('input');
        const name = inputs[0].value
        const youtubeLink = inputs[1].value
        if (!inputs[2].files) {
            alert('Please select an image')
            return
        }
        const image = inputs[2].files[0]

        const current_time = new Date().getTime();

        const image_upload_resp = await uploadImage(image, `${title}/${name}-${current_time}`);

        if (!image_upload_resp.status) {
            alert('Image upload failed')
            return
        }
        const data = {
            name,
            youtubeLink,
            image: image_upload_resp.data
        }

        const resp = postData(title, data)
        if (!resp.status) {
            alert('Data upload failed')
            return
        }
        else {
            alert('Data uploaded successfully')
        }


        // close the modal
        setSubmitting(false)
        close()
    }

    return (
        <>
            <Button onPress={onOpen} color="secondary">{`Add ${title}`}</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                onClose={() => {
                    setUploadImageUrl("/01.png")
                    setSubmitting(false)
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form onSubmit={(e) => {
                                //how to sent the onClose function to the handleSubmit function
                                handleSubmit(e, onClose)
                            }} >

                                <ModalHeader className="flex flex-col gap-1">{`Add ${title}`}</ModalHeader>
                                <ModalBody>
                                    <Input
                                        label="Name"
                                        placeholder="Name"
                                        required
                                    />
                                    <Input
                                        label="Youtube Link"
                                        placeholder="Youtube Link"
                                        required
                                    />
                                    {/* label for image input */}
                                    <label htmlFor={`${title}-image`}>
                                        <Image
                                            className="cursor-pointer"
                                            src={uploadImageUrl}
                                            alt="upload"
                                            width={200}
                                            height={200}
                                        />
                                    </label>
                                    <Input
                                        className="hidden"
                                        id={`${title}-image`}
                                        label="Image"
                                        placeholder="Image"
                                        required
                                        type="file"
                                        multiple={false}
                                        accept="image/*"
                                        onChange={handleChange}
                                    />


                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={
                                        () => {
                                            onClose()
                                        }
                                    }>
                                        Close
                                    </Button>
                                    <Button isLoading={submitting} color="secondary" type="submit">
                                        Submit
                                    </Button>
                                </ModalFooter>
                            </form >

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
