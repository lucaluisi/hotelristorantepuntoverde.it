"use client";

import Image from "next/image";
import { useState } from "react";

export const CustomImage = ({src}: {src: string}) => {
  const loader = ({
    width,
    quality,
    src,
  }: {
    width: number;
    quality?: number;
    src: string;
  }) => {
    const props = [`w=${width}`];
    if (quality) props.push(`q=${quality}`);
    const queryStr = props.join("&");
    return `/api/image?src=${src}&${queryStr}`;
  };

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-full w-full relative">
      <Image
        sizes="10px"
        fill
        priority
        alt="Thumbnail"
        src={src}
        className="object-cover h-full w-full"
        loader={({ src }) =>
          `/api/image?src=${src}&thumbnail=true`
        }
      />
      <Image
        fill
        alt="doesntmatter"
        src={src}
        className={`
            object-cover h-full w-full
            transition-opacity duration-500 ease-in-out
            ${isLoading ? "opacity-0" : "opacity-100"}
        `}
        loader={loader}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};