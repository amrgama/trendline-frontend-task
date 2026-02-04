"use client";

import { Section } from "@/components/layout/section/section";
import { Container } from "@/components/layout/section/container";
import { FooterInfo } from "./footer-info";
import { FooterLinks } from "./footer-links";
import { FooterNewsletter } from "./footer-newsletter";

const helpLinks = [
  { label: "My Account", href: "/account" },
  { label: "FAQs", href: "/faqs" },
  { label: "Categories", href: "/categories" },
  { label: "All Products", href: "/products" },
];

const policyLinks = [
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "About Us", href: "/about" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <Section
      className="relative bg-[url('/images/footer-bg.jpg')] bg-cover bg-center bg-no-repeat"
      spacing="xl"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#4A3B32]/90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/40" />{" "}
      {/* Additional darkness layer */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <FooterInfo />
          <div className="flex sm:hidden col-span-2 justify-between flex-wrap gap-12">
            <FooterLinks title="Let Us Help" links={helpLinks} />
            <FooterLinks title="Policies" links={policyLinks} />
          </div>
          <FooterLinks
            className="hidden sm:flex"
            title="Let Us Help"
            links={helpLinks}
          />
          <FooterLinks
            className="hidden sm:flex"
            title="Policies"
            links={policyLinks}
          />
          <FooterNewsletter />
        </div>
      </Container>
    </Section>
  );
}
