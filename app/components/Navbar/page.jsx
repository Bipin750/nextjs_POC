"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("userData");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/dashboard" className="text-xl font-bold text-blue-600">
          POC Assignment
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700">
          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/report" className="hover:text-blue-600">
            Reports
          </Link>
          <Link href="/login" onClick={logout} className="hover:text-blue-600">
            Log Out
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden block text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col bg-white px-6 pb-4 text-gray-700">
          <Link
            onClick={() => setOpen(false)}
            href="/"
            className="py-2 border-b"
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/about"
            className="py-2 border-b"
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/services"
            className="py-2 border-b"
          >
            Services
          </Link>
          <Link onClick={() => setOpen(false)} href="/contact" className="py-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
