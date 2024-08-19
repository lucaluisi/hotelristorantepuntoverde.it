import Image from "next/image";
import Logo from "../../../../../public/logo/logo.svg";
import Instagram from "../../../../../public/icons/instagram.svg";
import Facebook from "../../../../../public/icons/facebook.svg";
import Telephone from "../../../../../public/icons/telephone.svg";
import Email from "../../../../../public/icons/email.svg";
import Link from "next/link";
import { playfair } from "../../fonts";
import { Separator } from "@radix-ui/react-separator";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center py-24 border-t">
      <Image src={Logo} alt="logo" className="h-[25vh]" />
      {/* <div className="flex gap-10 h-[10px] w-full">
        <Link href="#">
          <Image src={Instagram} alt="instagram" />
        </Link>
        <Link href="#">
          <Image src={Facebook} alt="instagram" />
        </Link>
      </div> */}
      <div className="flex w-full">
        <div className="w-1/2 text-center flex flex-col gap-5 items-center justify-center">
          <h3 className={`${playfair.className} text-4xl`}>Contatti</h3>
          <Link href="tel:+390808971597" className="flex justify-center gap-3">
            <Image src={Telephone} alt="telephone" className="w-5" /> +39 080 897 1597
          </Link>
          <Link href="tel:+393334945847" className="flex justify-center gap-3">
            <Image src={Telephone} alt="telephone" className="w-5" /> +39 333 494 5847
          </Link>
          <Link href="mailto:info@hotelristorantepuntoverde.it" className="flex justify-center gap-3">
            <Image src={Email} alt="email" className="w-5" /> info@hotelristorantepuntoverde.it
          </Link>
        </div>
        <Separator
          orientation="vertical"
          className="shrink-0 bg-border w-[1px]"
        />
        <div className="w-1/2 text-center flex flex-col gap-5">
        <h3 className={`${playfair.className} text-4xl`}>Seguici su</h3>
          <Link href="tel:+390808971597" className="flex justify-center gap-3">
            <Image src={Instagram} alt="instagram" className="w-5" /> Instagram
          </Link>
          <Link href="mailto:info@hotelristorantepuntoverde.it" className="flex justify-center gap-3">
            <Image src={Facebook} alt="facebook" className="w-5" /> Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
}
