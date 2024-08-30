import { MotionValue, useTransform, motion } from "framer-motion";
import { ReactNode } from "react";
import { H3 } from "./text";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import { Card, CardContent } from "./card";
import { CustomImage } from "./image";

export default function CustomCard({
  images,
  i,
  progress,
  range,
  targetScale,
  children
}: {
  images: string[];
  i: number;
  progress: MotionValue;
  range: number[];
  targetScale: number;
  children: string;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale: scale,
          top: `calc(-5% + ${i * 5}rem)`,
        }}
        className="h-[75vh] w-[90vw] lg:h-[80vh] lg:w-[80vw] relative -top-[5%] border-2 bg-background"
      >
        <div className="flex flex-col lg:flex-row justify-evenly items-center lg:justify-center h-full w-full">
          <H3 className="text-center px-5 xl:px-20 max-w-1/2">
            {children}
          </H3>
          <Carousel opts={{ loop: true }} className="flex items-center">
            <CarouselPrevious className="size-16 left-8 md:size-24 md:left-12 xl:size-32 xl:left-16 z-10" />
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="w-9 md:w-11 2xl:w-20">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                        <CustomImage src={image} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="size-16 right-8 md:size-24 md:right-12 xl:size-32 xl:right-16" />
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
}
