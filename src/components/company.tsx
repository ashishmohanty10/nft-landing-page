import Image from "next/image";
import Metamask from "../../public/Metamask.png";
import Trust from "../../public/horizontal_blue.png";
import WalletConnect from "../../public/wall.png";
import Exodus from "../../public/Exodus.png";
import SafePal from "../../public/SafePal.png";
import * as motion from "framer-motion/client";

export function Company() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeIn", duration: 1 }}
      className="grid gap-10 my-12 px-5"
    >
      <div className="grid grid-cols-3  gap-5 md:gap-10">
        <div className="flex justify-center ">
          <Image src={Metamask} alt="Metamask logo " className="w-[250px] " />
        </div>
        <div className="flex justify-center">
          <Image src={Trust} alt="Trust logo" className="w-[250px] " />
        </div>
        <div className="flex justify-center">
          <Image
            src={WalletConnect}
            alt="WalletConnect logo"
            className="w-[250px] "
          />
        </div>
      </div>

      <div className="flex  items-center justify-center gap-5 md:gap-20">
        <div className="flex justify-center">
          <Image
            src={Exodus}
            alt="Exodus logo"
            className="w-[100px] md:w-[200px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={SafePal}
            alt="SafePal logo"
            className="w-[100px] md:w-[200px]"
          />
        </div>
      </div>
    </motion.div>
  );
}
