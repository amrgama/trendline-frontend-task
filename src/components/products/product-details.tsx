"use client";

import ProductImageGallery from "./product-image-gallery";
import ProductReviews from "./product-reviews";
import ProductInfo from "./product-info";
import SimilarItems from "./similar-items";

import img1 from "@/assets/images/product-1.png";
import img2 from "@/assets/images/product-2.png";
import img3 from "@/assets/images/product-3.png";
import Image from "next/image";

const IMAGES = [img1, img2, img3];

export default function ProductDetails({ id }: { id: string }) {
  // Mock data matching the design
  const product = {
    title: "Yidarton Women's Comfy Boho V Neck",
    price: 300,
    originalPrice: 450,
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
  };

  return (
    <div className="space-y-16">
      <div className="grid gap-8 content-center items-center justify-center grid-cols-1 xl:grid-cols-2 lg:gap-1">
        <ProductImageGallery images={IMAGES} />
        <ProductInfo
          title={product.title}
          price={product.price}
          originalPrice={product.originalPrice}
          description={product.description}
        />
        <Image
          className="hidden md:block"
          src={"/images/Layer_1.png"}
          width={98}
          height={57}
          alt="cloud"
        />
      </div>
      <ProductReviews productId={id} />
      <SimilarItems />
    </div>
  );
}
