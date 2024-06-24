"use client";
import React, { useState } from "react";
import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import Animate from "../ReUseComponents/Animate";
import { postData } from "@/backend/Services/firestore";
import { Titles } from "@/data/admintitle";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

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
    <div className="flex p-2 md:p-4 gap-4 justify-center items-center flex-col pt-10 " style={{ overflowX: "hidden" }}>
      <div className={`flex flex-col h-[20vh] md:h-[30vh] gap-4 w-full p-8 flex-col justify-center bg-gradient-to-tr from-black via-[#373737] to-white/40 ${inter.className}  text-white rounded-xl`}>
        <h1 className="text-xl md:text-3xl font-semibold w-[60%]">
          Your Trusted Construction Partner</h1>
        <h1 className="text-[10px] md:text-[16px] w-[80%] md:w-[50%]">
          As a registered member,gain access to wealth of resources including detailed project documentation educational matireals,and industry insights</h1>
      </div>
      <div className="w-full flex justify-end items-end">
        <Animate className="w-full md:w-[70%]">
          <form
            className="flex flex-col w-[90%] xl:w-[45%] mx-auto  bg-white rounded-xl p-4 z-10 gap-2 md:gap-4 sm:relative"
            onSubmit={handleSubmit}
            style={{ top: isMobile ? "0px" : "-250px" }}
          >
            <Input
              type="text"
              placeholder="Name"
              className="p-4 rounded"
              variant="bordered"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              placeholder="Email"
              className="p-4 rounded"
              variant="bordered"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Phone"
              className="p-4 rounded"
              variant="bordered"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Textarea
              placeholder="Message"
              className="p-4 rounded"
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
