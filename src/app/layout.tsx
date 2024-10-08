import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "ENDFT",
  description: "nft-website landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.className} antialiased bg-[#141943] text-slate-50`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
