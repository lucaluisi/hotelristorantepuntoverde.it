"use client";

import Image from "next/image";

export const CustomImage = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <div className="h-full w-full relative">
      <Image
        fill
        alt="image"
        src={src}
        className={`
          object-cover h-full w-full
          transition-opacity duration-500 ease-in-out
          ${className}
        `}
        priority
      />
    </div>
  );
};
