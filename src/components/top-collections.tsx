import { collectionData } from "@/util/data";
import Image from "next/image";
import * as motion from "framer-motion/client";

export function TopCollection() {
  return (
    <motion.div
      className="my-16 mx-20"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeIn", duration: 1 }}
    >
      <h2 className="bg-gradient-to-r from-[#6be9cc] via-[#EACCF8] to-[#a38cf4] bg-clip-text  text-transparent text-5xl font-semibold text-center ">
        Top Collections
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-6">
        {collectionData.map((item, idx) => (
          <div
            key={idx}
            className="border border-slate-400/60 p-4 rounded-xl backdrop-blur-2xl bg-white/5 space-y-2"
          >
            <div>
              <Image
                src={item.img}
                alt="collection image"
                className="rounded-lg hover:scale-105 transition-all"
              />
            </div>

            <div className="grid gap-3">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm font-light text-slate-400">
                {item.collection}
              </p>
            </div>

            <div className="flex justify-between items-center ">
              <p className="text-lg font-semibold">
                {item.floor_price_eth} ETH
              </p>
              <p className="text-lg font-semibold">{item.floor_price_usd}</p>
            </div>

            <div className="flex justify-between items-center ">
              <p className="text-sm font-medium">Floor Price</p>
              <p
                className={`text-sm font-medium ${
                  idx % 2 === 1 ||
                  idx === collectionData.length - 1 ||
                  idx === collectionData.length - 2
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.price_change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
