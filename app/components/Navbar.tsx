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
   <Disclosure.Panel className="md:hidden bg-gray-100 px-6 pb-4 shadow-inner">
  <ul className="flex flex-col gap-4 font-medium">
    {navLinks.map((link) => {
      const isActive = pathname === link.href;
      return (
        <li key={link.name}>
          <Link
            href={link.href}
            onClick={() => close()}   // 👈 this closes the menu
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
  );
}
