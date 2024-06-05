"use client";
import React, { useState } from "react";
import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import Animate from "../ReUseComponents/Animate";
import { postData } from "@/backend/Services/firestore";
import { Titles } from "@/data/admintitle";

const Contact = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    }
    const response = await postData(Titles.Contact, data);
    if (!response.status) {
      alert(`Form submitted, ${response.status}`);
    }
  };
  const [click, setClick] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center flex-col pt-10 " style={{ overflowX: "hidden" }}>
      <Image
        src="/contact.png"
        alt="contact"
        className="opacity-100 sm:opacity-0 md:opacity-100"
        width={1000}
        height={540}
        style={{ width: "150vw", height: "max-content" }}
      />
      <div className="w-full flex justify-end items-end">
        <Animate className="w-full md:w-[70%]">
          <form
            className="flex flex-col w-[70%] md:w-[45%] mx-auto py-10 bg-white rounded-xl p-4 z-10 gap-4 sm:relative"
            onSubmit={handleSubmit}
            style={{ top: isMobile ? "0px" : "-250px" }}
          >
            <Input
              type="text"
              placeholder="Name"
              className="py-2 px-4 my-2 rounded"
              variant="bordered"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              placeholder="Email"
              className="py-2 px-4 my-2 rounded"
              variant="bordered"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Phone"
              className="py-2 px-4 my-2 rounded"
              variant="bordered"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Textarea
              placeholder="Message"
              className="py-2 px-4 my-2 rounded"
              variant="bordered"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="flex flex-row gap-1">
              <Checkbox checked={click} onChange={() => setClick(!click)} color="warning">
                Click here
              </Checkbox>
              <span className="text-[#FFBD12]">terms & conditions</span>
            </div>
            <Button disabled={click} color="warning">
              Send
            </Button>
          </form>
        </Animate>
      </div>
    </div>
  );
};

export default Contact;
