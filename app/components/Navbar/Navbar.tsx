"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-100 border-b border-gray-200 shadow-sm h-16">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <nav className="flex items-center justify-between h-full">
          {/* Left: "huntshake" brand text */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              huntshake
            </Link>
            <ul className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Login + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link
                href="/login"
                className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Log In
              </Link>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-200 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/40">
          <div className="absolute top-0 right-0 h-full w-64 bg-white shadow-xl p-6 flex flex-col">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end mb-6 text-gray-700 hover:text-gray-900"
            >
              <X size={24} />
            </button>
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-auto w-full inline-block text-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
