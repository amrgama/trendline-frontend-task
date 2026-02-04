import Link from "next/link";
import { IconChevronRight } from "@/components/icons";
import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      className={cn(
        "w-full h-[56px] flex items-center text-base font-normal bg-[#ECECEC66] rounded-[16px] px-[32px]",
        className,
      )}
    >
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <IconChevronRight className="h-6 w-6 text-[#020202]" />}
          <Link
            href={item.href}
            className={cn(
              "font-medium hover:text-primary transition-colors",
              index === items.length - 1
                ? "text-[#8A8A8A] pointer-events-none"
                : "text-[#020202]",
            )}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
