"use client";
import {
  Button,
  Dropdown,
  Image,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const routePage = (url: string) => {
    router.push(url);
    setIsOpen(false);
  };

  const pathname = usePathname();
  const path = pathname.split("/").pop();
  const isActive = (page: string) => {
    return path === page
      ? "underline cursor-pointer decoration-[#FFBD12] text-white underline-offset-4 decoration-4"
      : "text-white  cursor-pointer";
  };

  return (
    <div className="bg-[#2C2B2B] flex justify-between items-center px-3 py-3  w-full">
      <div className="flex gap-4 ">
        <Link href="/">
          <Image
            src="./logo.png"
            className="w-[200px]  bg-white p-2"
            alt="Sebco"
          />
        </Link>
        <div className=" flex g justify-center flex-col gap-3">
          <Link
            href={
              "https://www.instagram.com/sebco_infrastructures/profilecard/?igsh=MTl2cWloM3VqdXRoMw=="
            }
          >
            <RiInstagramFill className="text-white cursor-pointer  text-xl" />
          </Link>
          <Link
            href={
              "https://www.facebook.com/profile.php?id=100084482203126&mibextid=LQQJ4d"
            }
          >
            <BsFacebook className="text-white  cursor-pointer text-xl" />
          </Link>
          <Link href={"tel:+91-70124-67647"}>
            <FaPhoneAlt className="text-white  cursor-pointer text-xl" />
          </Link>{" "}
        </div>{" "}
      </div>
      <div className="w-4/5 flex justify-end items-center lg:hidden">
        <Dropdown className="bg-[#494949]">
          <DropdownTrigger>
            <Button variant="light">
              <IoMenu className="text-2xl text-white" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Navigation Menu">
            <DropdownItem
              onClick={() => routePage("/home")}
              className={isActive("home")}
            >
              Home
            </DropdownItem>
            <DropdownItem
              onClick={() => routePage("/approach")}
              className={isActive("approach")}
            >
              Our Approach
            </DropdownItem>
            <DropdownItem
              onClick={() => routePage("/services")}
              className={isActive("services")}
            >
              Services
            </DropdownItem>
            <DropdownItem
              onClick={() => routePage("/ourprojects")}
              className={isActive("ourprojects")}
            >
              Projects
            </DropdownItem>
            <DropdownItem
              onClick={() => routePage("/contact")}
              className={isActive("contact")}
            >
              Contact Us
            </DropdownItem>
            <DropdownItem>
              <button
                className="bg-[#FFBD12] py-2 px-3 rounded text-black"
                onClick={() => routePage("/contact")}
              >
                Get a Free Quote
              </button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      {/* Full Navbar for Large Screens */}
      <div className="w-4/5 justify-evenly items-center hidden lg:flex cursor-default select-none">
        <div
          className={`cursor-pointer ${isActive("home")}`}
          onClick={() => routePage("/home")}
        >
          Home
        </div>
        <div
          className={`cursor-pointer ${isActive("approach")}`}
          onClick={() => routePage("/approach")}
        >
          Approach
        </div>
        <div
          className={`cursor-pointer ${isActive("services")}`}
          onClick={() => routePage("/services")}
        >
          Services
        </div>
        <div
          className={`cursor-pointer ${isActive("ourprojects")}`}
          onClick={() => routePage("/ourprojects")}
        >
          Projects
        </div>
        <div
          className={`cursor-pointer ${isActive("contact")}`}
          onClick={() => routePage("/contact")}
        >
          Contact Us
        </div>
        <button
          className="bg-[#FFBD12] py-2 px-3 rounded text-black"
          onClick={() => routePage("/requirements")}
        >
          Get a Free Quote
        </button>
      </div>
    </div>
  );
};

export default Navbar;
