import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/Logo.svg";
import { Button } from "./button";
import * as motion from "framer-motion/client";

const Footer = () => {
  return (
    <>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.4 }}
        className="h-screen w-full  py-16 bg-blue-950 px-10 grid lg:grid-cols-3 gap-5 items-start justify-between mt-96 md:mt-0 space-y-6 "
      >
        <div className="lg:w-1/2 h-full flex flex-col justify-between">
          <div className="flex items-center gap-x-2 cursor-pointer">
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              height={80}
              className="animate-spin duration-100"
            />
            <p className="text-7xl font-bold">ENDFT</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-5xl font-semibold uppercase leading-none -mb-4">
            Socials
          </h1>
          <motion.div className="flex flex-col mt-12 gap-5 font-medium text-2xl">
            {[
              "Facebook",
              "Twitter",
              "Instagram",
              "LinkedIn",
              "Github",
              "Youtube",
            ].map((item, idx) => (
              <motion.p key={idx} whileHover={{ y: "-50%" }}>
                <Link href={"#"}>{item}</Link>
              </motion.p>
            ))}
          </motion.div>
        </div>
        <div className="w-full flex items-center bg-white rounded-full px-2 ">
          <input
            type="text"
            className="w-full rounded-full p-4 outline-none text-black"
            placeholder="johndoe@gmail.com"
          />
          <Button text="Singin" varient="primary" />
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
