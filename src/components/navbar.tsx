"use client";

import Image from "next/image";
import Logo from "../../public/Logo.svg";
import { Button } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utlis";
import { useEffect, useState } from "react";

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

export function Navbar() {
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
      className=" mx-5 md:mx-20 py-8 flex items-center justify-between sticky top-0"
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
    </nav>
  );
}
