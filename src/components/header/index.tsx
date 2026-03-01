"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/asset/images/nordiaLogo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Media", href: "/events-and-outreaches" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full bg-white">
      <nav className="mx-auto flex h-[84px] max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Replace with your real logo path */}
          <Image
            src={logo}
            alt="Nordia Foundation"
            width={150}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Center links (desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#111827] hover:text-[#1A4598] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA (desktop) */}
        <div className="hidden md:flex">
          <Link
            href="/about"
            className="rounded-md bg-[#F2B665] px-7 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Learn About us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#111827] hover:bg-gray-100"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-2xl leading-none">{open ? "×" : "≡"}</span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-50 md:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-[#111827] hover:text-[#1A4598]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-md bg-[#F2B665] px-7 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Learn About us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
