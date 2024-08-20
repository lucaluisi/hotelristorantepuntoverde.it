import { playfair } from "@/app/ui/fonts";
import {
  motion,
  useScroll,
  useTransform,
  circIn,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Bho() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({ target: ref1 });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: ref2 });
  const y1 = useParallax(scrollYProgress1, 800);
  const y2 = useParallax(scrollYProgress2, 800);

  return (
    <>
      <section className="h-[100vh] flex justify-center items-center relative">
        <div ref={ref1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              stiffness: 20,
              damping: 15,
              mass: 2,
              type: "spring",
            }}
            className="w-[50vw] h-[55vh] top-[10vh] left-[10vw] absolute overflow-hidden"
          >
            <Image
              src="/noci/noci.png"
              className="h-full object-cover"
              fill
              alt="image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              stiffness: 20,
              damping: 15,
              mass: 2,
              type: "spring",
            }}
            className="w-[40vw] h-[40vh] bottom-[10vh] right-[10vw] absolute overflow-hidden"
          >
            <Image
              src="/noci/gnostre.jpg"
              className="h-full object-cover"
              fill
              alt="image"
            />
          </motion.div>
        </div>
        <motion.h2
          style={{ y: y1 }}
          className={`${playfair.className} text-8xl text-center absolute left-[40%]`}
        >
          Immerso nella
          <br />
          natura e nella
          <br />
          tranquillità della
          <br />
          periferia di Noci
        </motion.h2>
      </section>

      <section className="h-[100vh] flex justify-center items-center relative">
        <div ref={ref2}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              stiffness: 20,
              damping: 15,
              mass: 2,
              type: "spring",
            }}
            className="w-[30vw] h-[65vh] top-[10vh] left-[15vw] z-20 absolute overflow-hidden"
          >
            <Image
              src="/restaurant/porchetta.jpg"
              className="h-full object-cover"
              fill
              alt="image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              stiffness: 20,
              damping: 15,
              mass: 2,
              type: "spring",
            }}
            className="w-[50vw] h-[55vh] bottom-[10vh] right-[10vw] z-10 absolute overflow-hidden"
          >
            <Image
              src="/restaurant/tagliatelle_ragu.jpg"
              className="h-full object-cover"
              fill
              alt="image"
            />
          </motion.div>
        </div>
        <motion.h2
          style={{ y: y2 }}
          className={`${playfair.className} z-30 text-8xl text-center absolute left-[30%]`}
        >
          Noi ci differenziamo
          <br />
          per l'accoglienza,
          <br />
          l'amicizia e l'ottima
          <br />
          cucina meridionale
        </motion.h2>
      </section>
    </>
  );
}
