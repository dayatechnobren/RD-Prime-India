"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Technology", href: "/technology" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-white shadow-md text-black sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <img
                src="/logo.png"
                height="50"
                width="50"
                alt="RD Prime"
                className="cursor-pointer"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`transition-colors duration-300 ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-500"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {/* underline effect */}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 w-full transform transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 scale-x-100"
                          : "bg-blue-500 scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>

            {/* Mobile Menu Button */}
            <Disclosure.Button className="md:hidden flex flex-col gap-1.5 focus:outline-none">
              {open ? (
                <span className="text-3xl font-bold">×</span>
              ) : (
                <>
                  <span className="block w-6 h-0.5 bg-black"></span>
                  <span className="block w-6 h-0.5 bg-black"></span>
                  <span className="block w-6 h-0.5 bg-black"></span>
                </>
              )}
            </Disclosure.Button>
          </div>

          {/* Mobile Dropdown */}
          <Disclosure.Panel className="md:hidden bg-gray-100 px-6 pb-4 shadow-inner">
            <ul className="flex flex-col gap-4 font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`block py-2 transition-colors duration-300 ${
                        isActive
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-700 hover:text-blue-500"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
