"use client";

import ProductCard from "./product-card";
import { Product } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images directly to use with Next.js Image component
import img1 from "@/assets/images/product-1.png";
import img2 from "@/assets/images/product-2.png";
import img3 from "@/assets/images/product-3.png";
import imgPreview from "@/assets/images/product-preview.png";
import Image from "next/image";

const MOCK_SIMILAR_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    price: 900,
    description: "Comfy boho style v-neck shirt",
    images: [img1.src],
    category: "Dresses",
    rating: 4.5,
    reviewCount: 2910,
    colors: ["#BE968E", "#333333", "#E8E8E8"],
  },
  {
    id: "2",
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    price: 450,
    description: "Classic V-neck t-shirt",
    images: [img2.src],
    category: "T-Shirts",
    rating: 4.8,
    reviewCount: 150,
    colors: ["#BE968E", "#333333", "#E8E8E8"],
    discount: 25,
  },
  {
    id: "3",
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    price: 250,
    description: "100% Cotton casual top",
    images: [img3.src],
    category: "Tops",
    rating: 4.2,
    reviewCount: 85,
    colors: ["#BE968E", "#333333", "#E8E8E8"],
  },
  {
    id: "4",
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    price: 320,
    description: "Lightweight summer shirt",
    images: [imgPreview.src],
    category: "Shirts",
    rating: 4.6,
    reviewCount: 420,
    colors: ["#BE968E", "#333333", "#E8E8E8"],
    discount: 25,
  },
  {
    id: "5",
    name: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello ..",
    price: 900,
    description: "Comfy boho style v-neck shirt",
    images: [img1.src],
    category: "Dresses",
    rating: 4.5,
    reviewCount: 2910,
    colors: ["#BE968E", "#333333", "#E8E8E8"],
    discount: 25,
  },
];

export default function SimilarItems() {
  return (
    <div className="space-y-8">
      <div className="relative flex items-center gap-2 mb-8">
        <Image
          className="md:hidden absolute -top-4"
          src={"/images/Layer_1.png"}
          width={59}
          height={37}
          alt="cloud"
        />
        <h2 className="text-[16px] md:text-[24px] font-semibold relative inline-block">
          Similar Items
        </h2>
        <span className="absolute left-0 -bottom-2 w-[40px] h-[4px] bg-primary rounded-full"></span>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full overflow-visible!"
      >
        <CarouselContent className="-ml-4 overflow-x-visible!">
          {MOCK_SIMILAR_PRODUCTS.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-4 sm:basis-1/2 lg:basis-1/4 min-w-[288px]! overflow-hidden"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-3 mt-8">
          <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full border-none bg-[#E8EDF2]! hover:bg-primary! text-[#020202] hover:text-white">
            <ChevronLeft className="h-6! w-6!" />
          </CarouselPrevious>
          <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full border-none bg-[#E8EDF2]! hover:bg-primary! text-[#020202] hover:text-white">
            <ChevronRight className="h-6! w-6!" />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}
