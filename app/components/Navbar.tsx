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
  {({ open, close }) => (
    <>
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
        {/* logo */}

        {/* desktop menu */}

        {/* mobile button */}
        <Disclosure.Button className="md:hidden flex flex-col gap-1.5">
          {open ? "×" : "☰"}
        </Disclosure.Button>
      </div>

      {/* mobile menu */}
      <Disclosure.Panel className="md:hidden bg-gray-100 px-6 pb-4 shadow-inner">
        <ul className="flex flex-col gap-4 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => close()}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
  );
}
