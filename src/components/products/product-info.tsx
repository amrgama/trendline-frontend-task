"use client";

import { useState } from "react";
import {
  IconHeart,
  IconShoppingBag,
  IconShoppingBagAdd,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface ProductInfoProps {
  title: string;
  price: number;
  originalPrice?: number;
  description: string;
}

const COLORS = [
  { name: "Red", value: "#D90000" },
  { name: "Blue", value: "#BBD2E8" },
  { name: "Olive", value: "#989260" },
  { name: "Sky", value: "#6C95C8" },
  { name: "Gray", value: "#585858" },
];

export default function ProductInfo({
  title,
  price,
  originalPrice,
  description,
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(COLORS[1].name); // Default Blue

  return (
    <div className="flex flex-col gap-6 bg-white">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <span className="w-[82px] h-[37px] flex items-center jusitfy-center rounded-full border border-[#B68D85] px-4 py-1 text-xs font-medium text-[#B68D85]">
              T-Shirt
            </span>
            <h1 className="text-2xl font-semibold text-[#020202] text-[16px]">
              {title}
            </h1>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-[8px] border text-primary border-[#4040401A] bg-[#FFFFFF4D]!"
            >
              <IconShoppingBagAdd className="h-[32px] w-[32px]" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-[8px] text-primary border border-[#4040401A] bg-[#FFFFFF4D]!"
            >
              <IconHeart className="h-[32px] w-[32px]" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[20px] font-semiobold text-foreground">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-[16px] text-[#8A8A8A] line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          This price is exclusive of taxes.
        </p>

        <p className="text-sm text-black">{description}</p>
      </div>

      <div className="h-px w-full bg-[rgba(230, 230, 230, 1)]" />

      {/* Selectors */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-center justify-center w-[45px] h-[34px] text-xs ms-2 -mb-2 bg-white relative">
            Type
          </label>
          <Select defaultValue="cotton">
            <SelectTrigger className="w-[299px] h-[45px] bg-transparent!">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cotton">Cotton</SelectItem>
              <SelectItem value="polyester">Polyester</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="">
          <label className="flex items-center justify-center w-[45px] h-[34px] text-xs ms-2 -mb-2 bg-white relative">
            Size
          </label>
          <Select defaultValue="2xl">
            <SelectTrigger className="w-[299px] h-[45px] bg-transparent!">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="xl">XL</SelectItem>
              <SelectItem value="2xl">2XL</SelectItem>
              <SelectItem value="3xl">3XL</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-3">
        <label className="text-sm font-bold">Colors</label>
        <div className="flex gap-3">
          {COLORS.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={cn(
                "group relative flex h-[60] w-[60] items-center justify-center bg-[#F4F7F9] rounded-full transition-all",
                selectedColor === color.name && "border-[1.5px] border-black",
              )}
            >
              <span
                className="h-[32px] w-[32px] rounded-full border border-gray-200"
                style={{ backgroundColor: color.value }}
              />
              {/* Blue label for selected blue color as shown in design */}
              {color.name === "Blue" && selectedColor === "Blue" && (
                <span className="absolute -bottom-6 text-xs font-medium text-foreground">
                  Blue
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-8 pt-4">
        <div className="flex items-center gap-4">
          <span className="font-medium text-foreground">Quantity</span>

          <span className="text-sm text-muted-foreground">
            (${(price * quantity).toFixed(2)} for Piece)
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-4">
          {/* Price Total - not explicitly in design but good for UX, or just space */}
          {/* Design shows quantity selector and price total in one line? No, design shows "Quantity ($300.00 for Piece)" then below that "- 01 + $300.00 Add To Cart" */}
        </div>
      </div>

      {/* Bottom Row: Quantity Selector + Price + Add to Cart */}
      <div className="flex flex-wrap items-center gap-5">
        <div className="w-[184px] h-[56px] flex justify-between items-center rounded-[12px] bg-[#F5F5F5] overflow-hidden p-1">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-[40px] h-[40px] rounded-[12px] px-3 py-2 text-lg text-muted-foreground hover:text-foreground bg-white"
          >
            -
          </button>
          <span className="min-w-[20px] text-center text-[24px] font-medium">
            {quantity.toString().padStart(2, "0")}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-[40px] h-[40px] rounded-[12px] px-3 py-2 text-lg text-muted-foreground hover:text-foreground bg-white"
          >
            +
          </button>
        </div>

        <span className="text-[24px] font-medium">
          ${(price * quantity).toFixed(2)}
        </span>

        <Button className="w-full md:w-fit h-[56px] px-[32px]! text-[16px] ml-auto bg-[#BE968E] hover:bg-primary rounded-[12]!">
          Add To Cart
          <IconShoppingBag className="h-6! w-6! text-white" />
        </Button>
      </div>
    </div>
  );
}
