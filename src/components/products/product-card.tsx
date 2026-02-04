"use client";

import { Product } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IconHeart, IconShoppingBagAdd } from "../icons";

export default function ProductCard({ product }: { product: Product }) {
  // Mock image if none provided
  const displayImage =
    product.images?.[0] ||
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="group flex flex-col gap-3">
      {/* Image Container */}
      <div className="relative flex h-[268px] w-full overflow-hidden rounded-[20px] border-1 border-[#0000000D]">
        <Image
          src={displayImage}
          alt={product.name}
          width={198}
          height={198}
          className="h-[198px] w-[198px] mt-auto mx-auto object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />

        {/* Offer Badge */}
        {product.discount && (
          <div
            className="absolute left-4 top-4 w-[74px] h-[30px] z-10 flex items-center justify-center rounded-[8px] bg-white/70 
            backdrop-blur-[3px] shadow-2xs px-2 py-1 border-1 border-[#4040401A]"
          >
            <span className="text-[10px] font-semibold text-primary">
              {product.discount}% OFF
            </span>
          </div>
        )}

        {/* Floating Action Buttons */}
        <div className="absolute right-4 top-4 flex gap-1">
          <button className="flex h-[36px] w-[36px] items-center justify-center rounded-[8px] bg-white/70 backdrop-blur-[3px] shadow-2xs text-primary transition-colors hover:bg-primary! hover:text-white border border-[#4040401A]">
            <IconShoppingBagAdd className="size-6!" strokeWidth={1} />
          </button>
          <button className="flex h-[36px] w-[36px] items-center justify-center rounded-[8px] bg-white/70 backdrop-blur-[3px] shadow-2xs text-primary transition-colors hover:bg-primary! hover:text-white border border-[#4040401A]">
            <IconHeart className="size-6!" strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-3">
        {/* Category and Rating */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-[#545454]">
            {product.category || "Dresses"}
          </span>
          <div className="flex items-center gap-1">
            <Star className="fill-primary text-primary" size={16} />
            <span className="text-xs font-medium text-[#020202]">
              {product.rating || 4.5}
            </span>
            <span className="text-[10px] text-[#545454]">
              ({product.reviewCount || 2910})
            </span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="text-sm font-medium leading-tight text-[#020202] line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Price and Colors */}
        <div className="flex items-center justify-between mt-1">
          <span className="font-medium text-[#020202]">
            AED {product.price}
          </span>

          <div className="flex items-center gap-1">
            {/* Color Swatches */}
            {(product.colors || ["#C19A83", "#2C2C2C", "#E5E5E5"])
              .slice(0, 3)
              .map((color, index) => (
                <div
                  key={index}
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            <span className="text-sm font-medium text-[#020202]">+2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
