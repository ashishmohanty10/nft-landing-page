import { Button } from "./button";
import * as motion from "framer-motion/client";
import AnimatedCounter from "./increaseNumber";
import Image from "next/image";
import HeroImg from "../../public/image 17.png";

export function Hero() {
  return (
    <div className="mx-20 py-16 grid grid-cols-2">
      <motion.div
        className="space-y-4"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
      >
        <h1 className="text-7xl font-bold">
          Discover,
          <br /> collect, and sell <br />
          <span className="bg-gradient-to-r from-[#6be9cc] to-[#a38cf4] bg-clip-text  text-transparent">
            Extraordinary
          </span>
          <span></span>
          <br /> NFTs
        </h1>

        <p className="text-base font-extralight ">
          The leading NFT Marketplace on Ethereum. <br />
          Home to the next generation of digital creators. <br /> Discover the
          best NFT collections.
        </p>

        <div className="flex items-center gap-x-3 ">
          <Button text="Explore" varient="primary" />
          <Button text="Create" varient="secondary" />
        </div>

        <div className="grid grid-cols-3 w-[400px]">
          <div>
            <div className="text-3xl font-bold">
              <AnimatedCounter from={0} to={432} />
              k+
            </div>
            <p className="font-medium">Collections</p>
          </div>
          <div>
            <div className="text-3xl font-bold">
              <AnimatedCounter from={0} to={200} />
              k+
            </div>
            <p className="font-medium">Artists</p>
          </div>
          <div>
            <div className="text-3xl font-bold">
              <AnimatedCounter from={0} to={10} />
              k+
            </div>
            <p className="font-medium">Community</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative flex justify-center"
        initial={{ x: "-200%" }}
        animate={{ x: 0 }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
      >
        <Image
          src={HeroImg}
          alt="Hero Image"
          className="z-50 -skew-x-2 w-fit h-[450px]"
        />
        <div className="absolute -top-2 left-36 shadow-2xl shadow-violet-600 w-[350px] h-[300px] border border-slate-400 backdrop-blur-sm  rounded-3xl -skew-x-12 -z-40"></div>
        <div className="absolute top-14 left-40 shadow-2xl shadow-violet-600 -skew-x-12 -z-50  w-[400px] h-[450px] border rounded-3xl border-slate-400 bg-transparent backdrop-blur-md"></div>
      </motion.div>
    </div>
  );
}
