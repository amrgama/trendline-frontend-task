import Link from "next/link";
import {
  IconHome,
  IconGrid,
  IconMouse,
  IconClipboard,
  IconInfo,
  IconBag,
  IconBell,
  IconHeart,
  IconUser,
  IconChevronDown,
  IconMenu,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "../section/container";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/", icon: IconHome },
  { label: "Our Category", href: "/category", icon: IconGrid },
  { label: "About Us", href: "/about", icon: IconMouse },
  { label: "Contact Us", href: "/contact", icon: IconClipboard },
  { label: "FAQs", href: "/faqs", icon: IconInfo },
];

export function Header() {
  return (
    <header className="w-full h-[91px] flex items-center shadow-[0_0_52px_-24px_rgba(0,0,0,0.25)] backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center px-4 md:px-6">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={65.95}
            height={51}
          />
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center gap-6 me-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 text-sm text-[#8A8A8A] transition-colors hover:text-primary"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-2 md:gap-4 ms-auto lg:ms-0">
          <Button
            variant="ghost"
            size="icon"
            className="w-fit h-fit hover:bg-transparent! hover:text-primary"
          >
            <IconBag className="w-6 h-6" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-fit h-fit hover:bg-transparent! hover:text-primary"
          >
            <IconBell className="w-6 h-6" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-fit h-fit hover:bg-transparent! hover:text-primary"
          >
            <IconHeart className="w-6 h-6" />
            <span className="sr-only">Wishlist</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex items-center gap-1 px-2 w-fit h-fit hover:bg-transparent! hover:text-primary text-sm font-medium"
          >
            EN
            <IconChevronDown className="w-6 h-6" />
          </Button>

          <Button
            variant={"ghost"}
            size="icon"
            className="w-fit h-fit hover:bg-transparent! hover:text-primary gap-0! p-0!"
          >
            <IconUser className="w-6! h-6! shrink-0!" />
            <IconChevronDown className="w-6 h-6" />
            <span className="sr-only">Profile</span>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="flex sm:hidden w-fit h-fit text-black hover:bg-transparent! hover:text-primary ms-auto"
        >
          <IconMenu className="size-6!" />
        </Button>
      </Container>
    </header>
  );
}
