"use client";

import Image from "next/image";
import Link from "next/link";

export function FooterInfo() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo-2.png"
          alt="TinyTales Logo"
          width={66}
          height={51}
          className="object-contain"
        />
      </Link>
      <p className="text-sm text-medium leading-relaxed text-[#FFFFFFB2]">
        Ipsum in eas qui consectetur ab cum maxime. Soluta dolor quae ipsum in
        eas qui consequatur ab. Soluta dolor quae ipsum in eas quconsequatur ab
        cum maxime. Soluta dolor quae
      </p>
    </div>
  );
}
