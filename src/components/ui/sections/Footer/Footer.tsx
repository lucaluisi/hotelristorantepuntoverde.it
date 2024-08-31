import Image from "next/image";
import Logo from "../../../../../public/logo/logo.svg";
import Instagram from "../../../../../public/icons/instagram.svg";
import Facebook from "../../../../../public/icons/facebook.svg";
import Telephone from "../../../../../public/icons/telephone.svg";
import Email from "../../../../../public/icons/email.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

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

      <footer className="flex flex-col gap-12 md:gap-20 lg:gap-0 lg:flex-row items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
        >
          <Image src={Logo} alt="logo" className="w-[70vw] lg:h-[20vh]" />
        </motion.div>
        <div className="flex flex-row justify-center items-center p-10 gap-8 sm:gap-14 lg:gap-20 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            className="mix-blend-difference z-20 h-20 flex items-center"
          >
            <Link
              key="tel1"
              href="tel:+390804971597"
              className="block"
              data-sticky
            >
              <Image src={Telephone} alt="telephone" className="w-9 sm:w-10" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "fit-content" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.7,
            }}
            className="overflow-hidden rotate-12"
          >
            <Separator orientation="vertical" className="bg-border w-px h-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="mix-blend-difference z-20 h-20 flex items-center"
          >
            <Link
              key="email"
              href="mailto:info@hotelristorantepuntoverde.it"
              className="block"
              data-sticky
            >
              <Image src={Email} alt="email" className="w-9 sm:w-10" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "fit-content" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.9,
            }}
            className="overflow-hidden rotate-12"
          >
            <Separator orientation="vertical" className="bg-border w-px h-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            className="mix-blend-difference z-20 h-20 flex items-center"
          >
            <Link
              key="instagram"
              href="https://www.instagram.com/punto_verde_noci?igsh=bmxwbmF1OW03cDNl"
              target="_blank"
              data-sticky
              className="block"
            >
              <Image src={Instagram} alt="instagram" className="w-9 sm:w-10" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "fit-content" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 1.1,
            }}
            className="overflow-hidden rotate-12"
          >
            <Separator orientation="vertical" className="bg-border w-px h-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 1.2,
            }}
            className="mix-blend-difference z-20 h-20 flex items-center"
          >
            <Link
              key="facebook"
              href="https://www.facebook.com/puntoverde.hotelnoci"
              target="_blank"
              className="block"
              data-sticky
            >
              <Image src={Facebook} alt="facebook" className="w-9 sm:w-10" />
            </Link>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
