import { CustomImage } from "@/components/ui/image";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
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
      <section className="z-0 h-[100vh] flex justify-center items-center relative">
        <div ref={ref1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="w-[50vw] h-[55vh] top-[10vh] left-[10vw] absolute overflow-hidden"
          >
            <CustomImage src="noci/noci.webp" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="w-[40vw] h-[40vh] bottom-[10vh] right-[10vw] absolute overflow-hidden"
          >
            <CustomImage src="noci/gnostre.webp" />
          </motion.div>
        </div>
        <motion.h2
          style={{ y: y1 }}
          className="text-8xl text-center absolute left-[40%]"
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

      <section className="z-0 h-[100vh] flex justify-center items-center relative">
        <div ref={ref2}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="w-[50vw] h-[55vh] bottom-[10vh] right-[10vw] absolute overflow-hidden"
          >
            <CustomImage src="restaurant/tagliatelle_ragu.jpg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="w-[30vw] h-[65vh] top-[10vh] left-[15vw] absolute overflow-hidden"
          >
            <CustomImage src="restaurant/porchetta.jpg" />
          </motion.div>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          style={{ y: y2 }}
          className="text-8xl text-center absolute left-[30%]"
        >
          Noi ci differenziamo
          <br />
          per l&apos;accoglienza,
          <br />
          l&apos;amicizia e l&apos;ottima
          <br />
          cucina meridionale
        </motion.h2>
      </section>
    </>
  );
}
