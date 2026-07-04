"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";

import {
  LogoLinkedin
} from "@gravity-ui/icons";
import {LogoFacebook} from '@gravity-ui/icons';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Left Section */}
          <div className="space-y-6">

            {/* Logo */}
            <Link href="/">
              <Image
                src={logo}
                alt="Hireloop"
                width={150}
                height={40}
                priority
              />
            </Link>

            <p className="text-sm leading-7 max-w-xs text-gray-500">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">

              <Link
                href="#"
                className="w-10 h-10 rounded-md bg-zinc-900 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <LogoFacebook className="w-5 h-5 text-white" />
              </Link>


              <Link
                href="#"
                className="w-10 h-10 rounded-md bg-zinc-900 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <LogoLinkedin className="w-5 h-5 text-white" />
              </Link>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-indigo-400 font-semibold mb-5">
              Product
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link href="#" className="hover:text-white transition">
                  Job discovery
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Worker AI
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Companies
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Salary data
                </Link>
              </li>

            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-indigo-400 font-semibold mb-5">
              Navigations
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link href="#" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Career Library
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-indigo-400 font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link href="#" className="hover:text-white transition">
                  Brand Guideline
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-white transition">
                  Newsroom
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-zinc-800 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p>
            Copyright © 2024 Programming Hero
          </p>

          <div className="flex gap-6">

            <Link href="#" className="hover:text-white transition">
              Terms & Policy
            </Link>

            <Link href="#" className="hover:text-white transition">
              Privacy Guideline
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}