"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
}

export function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Online Coaching", href: "https://coaching.telanganachessacademy.com/" },
    { name: "Events", href: "https://telanganachessacademy.com/tournaments/" },
    { name: "Courses", href: "/courses" },
    { name: "Our Coaches", href: "/coaches" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#F5F7FA] shadow-md fixed w-full z-20">
      {/* Top Section: Logo + Academy + Contact */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-60 py-3">
        <div className="flex items-center w-full lg:w-auto">
          {/* Logo and Title (Centered) */}
          <div className="flex flex-1 justify-center lg:justify-start">
            <Link href="/" className="flex items-center space-x-1.5 md:space-x-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/logo.ico"
                  alt="Bharat Chess Academy Logo"
                  width={55}
                  height={55}
                />
              </div>
              <span className="text-base md:text-xl font-semibold tracking-tight bg-gradient-to-r from-[#2B6CB0] via-[#4299E1] to-[#F56565] bg-clip-text text-transparent whitespace-nowrap">
                Bharat Chess Academy
              </span>
            </Link>
          </div>
          {/* Mobile Menu Toggle (Right-aligned) */}
          <div className="lg:hidden flex items-center">
            <button
              className="p-1 text-[#2D3748] hover:text-[#2B6CB0]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-2 lg:mt-0 text-xs md:text-sm text-[#2D3748] flex flex-col lg:flex-row lg:space-x-2 text-center lg:text-right">
          <span>WhatsApp/Call: +91 9864646481</span>
          <span className="lg:block hidden">|</span>
          <span>Email: bharatchessacademy@gmail.com</span>
        </div>
      </div>

      {/* Navbar Menu */}
      <nav className="bg-[#F5F7FA] border-t border-gray-200 px-4 md:px-6 py-0">
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center space-x-3 xl:space-x-10">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <div className="relative">
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="flex items-center space-x-1 text-[#2D3748] hover:text-[#2B6CB0] font-medium py-1 px-1.5 text-md whitespace-nowrap"
                    aria-expanded={isAboutOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {isAboutOpen && (
                    <div className="absolute top-full left-0 mt-1 w-40 bg-white text-[#2D3748] rounded shadow-lg border border-gray-200 z-10">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-3 py-1.5 text-md hover:bg-gray-100 whitespace-nowrap"
                          onClick={() => setIsAboutOpen(false)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.name === "Online Coaching" ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D3748] hover:text-[#2B6CB0] font-medium py-1 px-1.5 text-md rounded hover:bg-gray-100 whitespace-nowrap"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#2D3748] hover:text-[#2B6CB0] font-medium py-1 px-1.5 text-md rounded hover:bg-gray-100 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 space-y-2 text-[#2D3748]">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                      className="flex items-center justify-between w-full hover:text-[#2B6CB0] py-1.5 text-sm"
                      aria-expanded={isAboutOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {isAboutOpen && (
                      <div className="ml-3 mt-1 space-y-1">
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block text-[#2D3748] bg-white hover:bg-gray-100 py-1.5 text-sm px-3"
                            onClick={() => {
                              setIsAboutOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.name === "Online Coaching" ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2B6CB0] py-1.5 text-sm block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#2B6CB0] py-1.5 text-sm block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
