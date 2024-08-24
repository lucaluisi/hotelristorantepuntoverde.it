import Image from "next/image";
import Logo from "../../../../../public/logo/logo.svg";
import Instagram from "../../../../../public/icons/instagram.svg";
import Facebook from "../../../../../public/icons/facebook.svg";
import Telephone from "../../../../../public/icons/telephone.svg";
import Email from "../../../../../public/icons/email.svg";
import Link from "next/link";
import { playfair } from "../../fonts";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { H4, P } from "@/components/ui/text";

export default function Footer() {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          stiffness: 20,
          damping: 15,
          mass: 2,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="absolute left-1/2 -translate-x-1/2"
      >
        <Separator orientation="horizontal" className="bg-border h-[1px]" />
      </motion.div>
      <footer className="flex flex-row items-center py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            stiffness: 20,
            damping: 15,
            mass: 2,
            delay: 0.2,
          }}
        >
          <Image src={Logo} alt="logo" className="h-[25vh]" />
        </motion.div>
        <div className="flex flex-row w-full relative">
          <div className="w-1/2 text-center flex flex-col gap-5 items-center justify-center">
            <H4>Contatti</H4>
            <Link
              key="tel1"
              href="tel:+390804971597"
              className="flex justify-center gap-3"
            >
              <Image src={Telephone} alt="telephone" className="w-5" />{" "}
              <P>+39 080 897 1597</P>
            </Link>
            <Link
              key="tel2"
              href="tel:+393334945847"
              className="flex justify-center gap-3"
            >
              <Image src={Telephone} alt="telephone" className="w-5" />{" "}
              <P>+39 333 494 5847</P>
            </Link>
            <Link
              key="email"
              href="mailto:info@hotelristorantepuntoverde.it"
              className="flex justify-center gap-3"
            >
              <Image src={Email} alt="email" className="w-5" />{" "}
              <P>info@hotelristorantepuntoverde.it</P>
            </Link>
          </div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              stiffness: 20,
              damping: 15,
              mass: 2,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="w-px absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          >
            <Separator orientation="vertical" />
          </motion.div>
          <div className="w-1/2 text-center flex flex-col gap-5">
            <H4>Seguici su</H4>
            <Link
              key="instagram"
              href="https://www.instagram.com/punto_verde_noci?igsh=bmxwbmF1OW03cDNl"
              target="_blank"
              className="flex justify-center gap-3"
            >
              <Image src={Instagram} alt="instagram" className="w-5" />
              <P>Instagram</P>
            </Link>
            <Link
              key="facebook"
              href="https://www.facebook.com/puntoverde.hotelnoci"
              target="_blank"
              className="flex justify-center gap-3"
            >
              <Image src={Facebook} alt="facebook" className="w-5" />
              <P>Facebook</P>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
