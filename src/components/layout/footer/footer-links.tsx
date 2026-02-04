"use client";

import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

export function FooterLinks({ title, links, className }: FooterLinksProps) {
  return (
    <div className={`flex flex-col gap-6 ${className && className}`}>
      <h3 className="text-[24px] font-semibold text-[#FFFFFF]">{title}</h3>
      <ul className="flex flex-col gap-[9px]">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[#FFFFFFB2] font-medium transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
