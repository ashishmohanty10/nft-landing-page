import { createSellData } from "@/util/data";
import Image from "next/image";
import * as motion from "framer-motion/client";

export function CreateSellArticles() {
  return (
    <motion.div
      className="my-16 mx-20 py-16 px-10 bg-white/5 backdrop-blur-lg rounded-2xl space-y-10"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeIn", duration: 1 }}
    >
      <h2 className="bg-gradient-to-r from-[#6be9cc] via-[#EACCF8] to-[#a38cf4] bg-clip-text  text-transparent text-5xl font-semibold text-center ">
        Create And Sell Your NFTS
      </h2>

      <div className="grid grid-cols-3 justify-center items-center ">
        {createSellData.map((item, idx) => (
          <div key={idx} className="space-y-5">
            <div className="flex justify-center">
              <Image src={item.img} alt="img" className="w-[30px] " />
            </div>

            <div className="space-y-3">
              <h3 className="text-lg text-center font-semibold">
                {item.title}
              </h3>
              <p className="text-sm font-light text-slate-300 text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
