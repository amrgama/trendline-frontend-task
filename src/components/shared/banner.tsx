import React from "react";
import { Section } from "@/components/layout/section/section";
import { Container } from "@/components/layout/section/container";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Banner = ({
  title = "Product Details",
  className,
  ...props
}: BannerProps) => {
  return (
    <Section
      spacing="none"
      className={cn(
        "relative flex h-[240px] w-full items-center justify-center bg-[#F5F5F5] overflow-hidden",
        className,
      )}
      // style={{ backgroundImage: "url('/images/banner-bg.jpg')" }}
      {...props}
    >
      <Image
        className="absolute left-0 w-full object-cover -rotate-[90deg] mix-blend-overlay"
        src="/images/banner-bg.jpg"
        alt="banner"
        width={1920}
        height={354}
      />
      {/* Overlay if needed for text readability, though image looks light */}
      <Container className="relative">
        <div className="relative flex items-center justify-center">
          <span className="block absolute text-[80px] text-transparent font-bold stroke-1 [-webkit-text-stroke:1px_#0000000D]">
            {title}
          </span>
          <h1 className="text-center text-3xl font-semibold text-[#020202] md:text-4xl">
            {title}
          </h1>
        </div>
      </Container>
    </Section>
  );
};
