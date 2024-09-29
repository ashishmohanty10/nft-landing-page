import { articlesData } from "@/util/data";
import * as motion from "framer-motion/client";
import Image from "next/image";
import { Button } from "./button";

export function Articles() {
  return (
    <motion.div
      className=" mx-20 py-16 space-y-10 h-screen flex items-center flex-col"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeIn", duration: 1 }}
    >
      <h2 className="bg-gradient-to-r from-[#6be9cc] via-[#EACCF8] to-[#a38cf4] bg-clip-text  text-transparent text-3xl font-bold md:text-5xl  text-center ">
        Create And Sell Your NFTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articlesData.map((item, idx) => (
          <div
            key={idx}
            className=" cursor-pointer bg-white/5 backdrop-blur-lg w-fit h-fit lg:h-[450px] pb-5 rounded-2xl"
          >
            <Image src={item.image} alt="Article Image" />

            <div className="pl-4 py-4 space-y-2">
              <h3 className="text-base font-semibold ">{item.title}</h3>
              <p className="text-sm font-light mb-2">{item.description}</p>

              <p className="text-sm font-medium text-slate-300/80">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center w-full">
        <Button varient="secondary" text="See More" />
      </div>
    </motion.div>
  );
}
