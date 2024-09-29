import { nftListing } from "@/util/data";
import * as motion from "framer-motion/client";
import Image from "next/image";
import { Button } from "./button";

export function TrendingNFT() {
  return (
    <div className="my-16 mx-20 space-y-10">
      <h2 className="bg-gradient-to-r from-[#6be9cc] via-[#EACCF8] to-[#a38cf4] bg-clip-text leading-loose  text-transparent text-3xl md:text-5xl md:leading-relaxed font-bold text-center  ">
        Trending NFTs
      </h2>

      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 my-6  w-full"
      >
        {nftListing.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 p-5 border border-slate-50/30 rounded-xl space-y-4 w-full flex flex-col"
          >
            <div className="flex items-center justify-center py-3">
              <Image
                src={item.image}
                alt="trending nft"
                width={200}
                height={200}
                className="w-[200px] h-[200px] rounded-xl"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="text-base font-semibold">{item.name}</p>
              <p className="text-xs font-normal text-slate-400">
                {item.collection}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 text-xs gap-2 text-center md:text-left">
              <div className="flex flex-col justify-start">
                <p className="font-semibold text-sm">{item.latestBid}</p>
                <p className="text-slate-400 ">latest bid</p>
              </div>

              <div className="flex flex-col justify-start">
                <p className="font-semibold text-sm">{item.from}</p>
                <p className="text-slate-400 ">from</p>
              </div>
              <div className="flex flex-col justify-start">
                <p className="font-semibold text-sm">{item.priceUSD}</p>
                <p
                  className={`${
                    idx % 2 === 1 ||
                    idx === nftListing.length - 1 ||
                    idx === nftListing.length - 2
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item.change}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-2">
              {idx === nftListing.length - 1 ||
              idx === nftListing.length - 3 ? (
                <Button varient="primary" text="Collect Now" />
              ) : (
                <Button varient="secondary" text="Not Available" />
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
