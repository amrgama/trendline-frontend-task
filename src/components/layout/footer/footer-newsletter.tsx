"use client";

import { IconSend } from "@/components/icons";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconTwitter,
  IconWhatsApp,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Send,
//   Twitter,
//   MessageCircle,
// } from "lucide-react";
import Link from "next/link";

export function FooterNewsletter() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[24px] font-semibold text-[#FFFFFF]">Send Email</h3>

      <div className="flex w-full max-w-[369px] h-[62px] items-center space-x-2 bg-white rounded-lg p-2">
        <Input
          type="email"
          placeholder="Email address"
          className="border-0 bg-transparent! text-sm text-primary focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#8A8A8A]"
        />
        <Button className="bg-primary hover:bg-[#a0806b] text-white px-7 font-semibold rounded-md">
          Send
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-semibold text-[#FFFFFF]">Follow Us</h4>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-[#FFFFFFB2] font-medium transition-colors hover:text-white"
          >
            <IconFacebook fill="#FFFFFF" />
          </Link>
          <Link
            href="#"
            className="text-[#FFFFFFB2] font-medium transition-colors hover:text-white"
          >
            <IconTwitter fill="#FFFFFF" />
          </Link>
          <Link
            href="#"
            className="text-[#FFFFFFB2] font-medium transition-colors hover:text-white"
          >
            <IconInstagram fill="#FFFFFF" />
          </Link>
          <Link
            href="#"
            className="text-[#FFFFFFB2] font-medium transition-colors hover:text-white"
          >
            <IconLinkedIn fill="#FFFFFF" />
          </Link>
          <Link
            href="#"
            className="text-[#FFFFFFB2] font-medium transition-colors hover:text-white"
          >
            <IconWhatsApp fill="#FFFFFF" />
          </Link>
          <Link
            href="#"
            className="text-[#FFFFFFB2] font-medium transition-colors hover:text-white"
          >
            <IconSend fill="#FFFFFF" />
          </Link>
        </div>
      </div>
    </div>
  );
}
