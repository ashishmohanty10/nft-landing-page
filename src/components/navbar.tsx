"use client";

import Image from "next/image";
import Logo from "../../public/Logo.svg";
import { Button } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utlis";
import { useEffect, useState } from "react";
import hamburgerOpen from "@/../public/icon-hamburger.svg";
import hamburgerclose from "@/../public/icon-close.svg";
import * as motion from "framer-motion/client";

const navLink = [
  {
    name: "Marketplace",
    href: "/",
  },
  {
    name: "Collection",
    href: "/",
  },
  {
    name: "Community",
    href: "/",
  },
  {
    name: "Create",
    href: "/",
  },
];

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

export function Navbar() {
  const [isNavOpen, setIsnavOpen] = useState<boolean>(false);
  const handleNav = () => {
    setIsnavOpen(!isNavOpen);
  };

  const pathname = usePathname();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const fadeStart = 0;
      const fadeEnd = windowHeight * 0.3;

      if (scrollPosition <= fadeStart) {
        setOpacity(1);
      } else if (scrollPosition >= fadeEnd) {
        setOpacity(0);
      } else {
        setOpacity(1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className=" mx-5 md:mx-20 py-8 flex items-center justify-between top-0 relative"
      style={{ opacity }}
    >
      <div className="flex items-center gap-x-2 cursor-pointer">
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          height={50}
          className="animate-spin duration-100"
        />
        <p className="text-3xl font-bold">ENDFT</p>
      </div>

      {/* desktop navbar */}
      <div className=" items-center gap-x-5 hidden lg:flex">
        {navLink.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className={cn(
              `font-semibold text-sm ${
                pathname === item.href
                  ? "text-slate-500 hover:text-slate-50 transition-all"
                  : ""
              }`
            )}
          >
            {item.name}
          </Link>
        ))}
        <Button varient="primary" text="Connect Wallet" />
      </div>

      {/* mobile navbar */}

      <div className="block lg:hidden">
        <div
          onClick={handleNav}
          className={`cursor-pointer absolute top-10 right-0 z-50  ${
            isNavOpen && "transition-all duration-100"
          }`}
        >
          {isNavOpen ? (
            <Image src={hamburgerclose} alt="hamburger icon" />
          ) : (
            <Image src={hamburgerOpen} alt="Close icon" />
          )}
        </div>

        <motion.nav
          initial={{ opacity: 1 }}
          variants={variants}
          animate={isNavOpen ? "open" : "closed"}
          className="absolute right-0 top-24"
        >
          {isNavOpen && (
            <div className="bg-transparent border border-slate-50/20 rounded-lg backdrop-blur-lg h-fit w-[300px]">
              <div className="px-10 py-16 flex flex-col gap-10 ">
                {navLink.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className={cn(
                      `font-bold text-xl ${
                        pathname === item.href
                          ? "text-slate-300 transition-all "
                          : ""
                      }`
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button varient="primary" text="Connect Wallet" />
              </div>
            </div>
          )}
        </motion.nav>
      </div>
    </nav>
  );
}
