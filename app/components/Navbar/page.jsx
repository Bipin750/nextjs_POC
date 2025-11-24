"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const hideNavbarRoutes = ["/login"];

  const shouldShowNavbar = !hideNavbarRoutes.includes(pathname);
  const logout = () => {
    localStorage.removeItem("userData");
  };

  return (
    <div>
      {shouldShowNavbar && (
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/dashboard" className="text-xl font-bold text-blue-600">
              POC Assignment
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 text-gray-700">
              <Link
                href="/dashboard"
                className={`${
                  pathname === "/dashboard"
                    ? "text-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/report"
                className={`${
                  pathname === "/report"
                    ? "text-blue-600 "
                    : "hover:text-blue-600"
                }`}
              >
                Reports
              </Link>
              <Link
                href="/login"
                onClick={logout}
                className="hover:text-blue-600"
              >
                Log Out
              </Link>
            </div>

            {/* Hamburger Button */}
            <button
              className="md:hidden block text-gray-700 text-2xl cursor-pointer"
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
                href="/dashboard"
                className={`${
                  pathname === "/dashboard" ? "text-blue-600" : "py-2"
                }`}
              >
                Dashboard
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="/report"
                className={`${
                  pathname === "/report" ? "text-blue-600" : "py-2"
                }`}
              >
                Reports
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="/login"
                className="py-2"
              >
                Log Out
              </Link>
            </div>
          )}
        </nav>
      )}
    </div>
  );
}
