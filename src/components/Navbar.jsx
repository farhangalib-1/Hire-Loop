"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@heroui/react";
import { Bars } from "@gravity-ui/icons";
import Image from "next/image";
import logo from "@/images/logo.png";

const navItems = [
  { name: "Browse Jobs", href: "/jobs" },
  { name: "Company", href: "/company" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 fixed z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-[#1F1F1F] px-6 py-3 shadow-lg">
        <Link href="/" className="text-3xl font-bold">
          <Image src={logo} alt="HireLoop Logo" width={100} height={50} ></Image>
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <div className="h-5 w-px bg-gray-600" />

          <Link
            href="/signin"
            className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
          >
            Sign In
          </Link>
          <Link href="/signup">
          <Button
            
            href="/signup"
            className="rounded-xl bg-violet-600 px-6 text-white hover:bg-violet-500"
          >
            Get Started
          </Button>
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          <Bars width={24} height={24} />
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl bg-[#1F1F1F] p-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <hr className="border-gray-700" />

            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className="text-indigo-400"
            >
              Sign In
            </Link>

            <Button
              as={Link}
              href="/signup"
              className="bg-violet-600 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}