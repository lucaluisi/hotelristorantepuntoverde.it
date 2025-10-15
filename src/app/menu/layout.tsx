import "../globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/menu/Navbar";
import StickyCursor from "@/components/StickyCursor";
import { isMobileDevice } from "@/lib/mobileDetect";

export const metadata = {
  title: "Menù",
  description: "Clarinet Competition Menù",
};

export default async function MenuLayout({ children }: { children: ReactNode }) {
  const mobile = await isMobileDevice();

  return (
    <body className={`pt-60 dark`}>
      <Navbar />
      <StickyCursor isMobile={mobile} />
      <div className="px-5 sm:px-10 md:px-20 lg:px-30">
        {children}
      </div>
    </body>
  );
}
