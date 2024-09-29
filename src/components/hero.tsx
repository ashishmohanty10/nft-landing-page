import { Button } from "./button";
import * as motion from "framer-motion/client";
import AnimatedCounter from "./increaseNumber";
import Image from "next/image";
import HeroImg from "../../public/image 17.png";

export function Hero() {
  return (
    <div className="mx-5 md:mx-20 py-16 grid grid-cols-1 lg:grid-cols-2 ">
      <motion.div
        className="space-y-4 mb-20"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.3 }}
      >
        <h1 className="text-left text-4xl lg:text-7xl font-bold">
          Discover,
          <br /> collect, and sell <br />
          <span className="bg-gradient-to-r from-[#6be9cc] to-[#a38cf4] bg-clip-text  text-transparent">
            Extraordinary
          </span>
          <span></span>
          <br /> NFTs
        </h1>

        <p className="text-sm  md:text-base font-extralight ">
          The leading NFT Marketplace on Ethereum. <br />
          Home to the next generation of digital creators. <br /> Discover the
          best NFT collections.
        </p>

        <div className="flex items-center gap-x-3 ">
          <Button text="Explore" varient="primary" />
          <Button text="Create" varient="secondary" />
        </div>

        <div className="grid grid-cols-3 lg:w-[400px]">
          <div>
            <div className="text-base md:text-3xl font-bold">
              <AnimatedCounter from={0} to={432} />
              k+
            </div>
            <p className="font-medium">Collections</p>
          </div>
          <div>
            <div className="text-base md:text-3xl font-bold">
              <AnimatedCounter from={0} to={200} />
              k+
            </div>
            <p className="font-medium">Artists</p>
          </div>
          <div>
            <div className="text-base md:text-3xl font-bold">
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
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.3 }}
      >
        <Image
          src={HeroImg}
          alt="Hero Image"
          className="-z-10 -skew-x-2 w-fit lg:h-[450px]"
        />

        {/* large div */}
        <div className="absolute -top-1  lg:-top-2 lg:left-36 shadow-2xl shadow-violet-600 w-[320px] h-[320px] md:w-[520px] md:h-[600px] lg:w-[350px] lg:h-[300px] border border-slate-400 backdrop-blur-sm  rounded-3xl -skew-x-12 -z-40"></div>

        {/* small div */}
        <div className="absolute -top-5 left-5 md:left-10 lg:top-14 lg:left-40 shadow-2xl shadow-violet-600 -skew-x-12 -z-40 w-[280px] h-[230px] md:w-[400px] md:h-[300px]  lg:w-[400px] lg:h-[450px] border rounded-3xl border-slate-400 bg-transparent backdrop-blur-md"></div>
      </motion.div>
    </div>
  );
}
