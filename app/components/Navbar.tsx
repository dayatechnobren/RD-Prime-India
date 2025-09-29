"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-900 text-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-xl font-bold">R D PRIME INDIA</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/technology">Technology</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>

            {/* Mobile Menu Button */}
            <Disclosure.Button className="md:hidden flex flex-col gap-1.5 focus:outline-none">
              {open ? (
                // X Icon
                <span className="text-2xl font-bold">×</span>
              ) : (
                // Hamburger Icon
                <>
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                </>
              )}
            </Disclosure.Button>
          </div>

          {/* Mobile Dropdown */}
          <Disclosure.Panel className="md:hidden bg-gray-800 px-6 pb-4">
            <ul className="flex flex-col gap-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/technology">Technology</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
