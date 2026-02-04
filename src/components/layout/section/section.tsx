"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      none: "py-0",
      xs: "py-4 sm:py-6",
      sm: "py-6 sm:py-8",
      md: "py-8 sm:py-12",
      lg: "py-12 sm:py-16",
      xl: "py-16 sm:py-20",
      "2xl": "py-20 sm:py-24",
    },
    background: {
      none: "",
      muted: "bg-muted/50",
      card: "bg-card",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      accent: "bg-accent text-accent-foreground",
      destructive: "bg-destructive text-destructive-foreground",
    },
    width: {
      full: "w-full",
      screen: "w-screen",
      container: "max-w-7xl mx-auto",
    },
  },
  defaultVariants: {
    spacing: "md",
    background: "none",
    width: "full",
  },
});

export interface SectionProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      spacing,
      background,
      width,
      as: Component = "section",
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        className={cn(
          sectionVariants({ spacing, background, width }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Section.displayName = "Section";

export { Section, sectionVariants };
// export default Section;
