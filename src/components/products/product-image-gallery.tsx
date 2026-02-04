"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { IconChevronRight } from "../icons";

interface ProductImageGalleryProps {
  images: (string | StaticImageData)[];
}

export default function ProductImageGallery({
  images,
}: ProductImageGalleryProps) {
  const [selected, setSelected] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="m-auto relative w-full max-w-[524px] flex flex-col gap-4 overflow-hidden">
      <div className="relative w-full h-[565px] overflow-hidden bg-[#F5F5F5] rounded-[24px]">
        <Image
          src={images[selected]}
          alt="Product image"
          fill
          className="object-contain object-center p-4"
          priority
        />
        <div className="flex flex-col justify-center w-full h-full absolute top-0 left-0 rounded-t-[24]">
          <div className="w-full flex gap-1 h-[73px] pt-4 px-4 bg-linear-to-b from-[#000000]/30 to-[#F4F4F4]/20">
            <div className="w-[120px] h-[4px] rounded-full bg-[#D4D4D4]" />
            <div className="w-[120px] h-[4px] rounded-full bg-white" />
            <div className="w-[120px] h-[4px] rounded-full bg-[#D4D4D4]" />
            <div className="w-[120px] h-[4px] rounded-full bg-[#D4D4D4]" />
          </div>
          {/* navigation buttons */}
          <div className="w-full flex justify-between px-5 m-auto">
            {/* prev button */}
            <Button className="w-[48px] h-[48px] rounded-full bg-[#C4C4C4]">
              <IconChevronRight className="rotate-180" />
            </Button>
            {/* nex button */}
            <Button className="w-[48px] h-[48px] rounded-full bg-primary">
              <IconChevronRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-1 sm:gap-2 pb-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            className={cn(
              "relative flex-1 max-w-[114px] h-[123px] sm:h-[183px] sm:max-w-[169px] shrink-0 overflow-hidden rounded-[24px] bg-[#F5F5F5]",
              // ,
              // selected === idx
              //   ? "ring-2 ring-[#111111]"
              //   : "border border-transparent",
            )}
            onClick={() => setSelected(idx)}
          >
            <Image
              src={img}
              alt={`Product thumbnail ${idx + 1}`}
              fill
              className="object-contain object-center p-2"
            />

            {images.length == idx + 1 && (
              <div className="flex items-center justify-center bg-[#020202B2] absolute inset-0">
                <span className="text-white text-[32px] font-semibold">+2</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
