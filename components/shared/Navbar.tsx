"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LocateIcon,
  Mail,
  Phone,
  ChevronDown,
  Home,
  Menu,
  X,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 200);
    setTimeoutId(id);
  };

  useEffect(() => {
    setIsOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    return pathname === href;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="bg-gray-800 text-white py-2 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="font-medium text-sm mb-2 md:mb-0">
              ავტოსკოლა ვარკეთილში
            </h2>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <Phone
                  size={14}
                  className="bg-green-600 rounded-full w-5 h-5 p-1"
                />
                <a
                  href="tel:+995574747581"
                  className="text-xs hover:text-green-300 transition"
                >
                  +995 574-747-581
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail
                  size={14}
                  className="bg-green-600 rounded-full w-5 h-5 p-1"
                />
                <a
                  href="mailto:Guramdiasamidze123@gmail.com"
                  className="text-xs hover:text-green-300 transition"
                >
                  Guramdiasamidze123@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <LocateIcon
                  size={14}
                  className="bg-green-600 rounded-full w-5 h-5 p-1"
                />
                <span className="text-xs">ვარკეთილი, ჯავახეთის N 102</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-50 bg-white shadow-sm w-full mb-5">
        <nav className="border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-red-600">
                <Image
                  src={`/image.jpg`}
                  alt="car-logo"
                  width={80}
                  height={60}
                  className=""
                />
              </Link>
              <div className="hidden md:flex items-center justify-between gap-x-9">
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg transition",
                      isActive("/")
                        ? "bg-green-50 text-green-600"
                        : "hover:bg-gray-100 hover:text-green-500"
                    )}
                  >
                    <Home size={16} />
                    <Link
                      href="/"
                      className={cn(
                        "font-bold",
                        isActive("/")
                          ? "text-green-600"
                          : "hover:text-green-500"
                      )}
                    >
                      მთავარი
                    </Link>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-200",
                        isOpen ? "rotate-180" : "rotate-0",
                        isActive("/") ? "text-green-600" : ""
                      )}
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100 z-50">
                      <Link
                        href="/about-us"
                        className={cn(
                          "block px-4 py-2 text-sm font-bold text-gray-700",
                          isActive("/about-us")
                            ? "bg-green-50 text-green-600"
                            : "hover:bg-gray-50 hover:text-green-500"
                        )}
                      >
                        ჩვენ შესახებ
                      </Link>
                      <Separator className="my-1" />
                      <Link
                        href="/contact"
                        className={cn(
                          "block px-4 py-2 text-sm font-bold text-gray-700",
                          isActive("/contact")
                            ? "bg-green-50 text-green-600"
                            : "hover:bg-gray-50 hover:text-green-500"
                        )}
                      >
                        კონტაქტი
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/tickets"
                  className={cn(
                    "px-4 py-2 font-bold rounded-lg transition",
                    isActive("/tickets")
                      ? "bg-green-50 text-green-600"
                      : "hover:bg-gray-100 hover:text-green-500"
                  )}
                >
                  ბილეთები
                </Link>
                <Link
                  href="/exam"
                  className={cn(
                    "px-4 py-2 font-bold rounded-lg transition",
                    isActive("/exam")
                      ? "bg-green-50 text-green-600"
                      : "hover:bg-gray-100 hover:text-green-500"
                  )}
                >
                  გამოცდა
                </Link>
              </div>
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div
              className={cn(
                "md:hidden transition-all duration-300",
                mobileMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
              )}
            >
              <div className="flex flex-col space-y-2">
                <div className="relative">
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg transition w-full",
                      isActive("/")
                        ? "bg-green-50 text-green-600"
                        : "hover:bg-gray-100 hover:text-green-500"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <Home size={16} />
                    <span className="font-bold">მთავარი</span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "ml-auto transition-transform duration-200",
                        isOpen ? "rotate-180" : "rotate-0",
                        isActive("/") ? "text-green-600" : ""
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "pl-6 transition-all duration-300",
                      isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                    )}
                  >
                    <Link
                      href="/about-us"
                      className={cn(
                        "block px-4 py-2 text-sm font-bold text-gray-700 rounded-lg",
                        isActive("/about-us")
                          ? "bg-green-50 text-green-600"
                          : "hover:bg-gray-100 hover:text-green-500"
                      )}
                    >
                      ჩვენ შესახებ
                    </Link>
                    <Link
                      href="/contact"
                      className={cn(
                        "block px-4 py-2 text-sm font-bold text-gray-700 rounded-lg",
                        isActive("/contact")
                          ? "bg-green-50 text-green-600"
                          : "hover:bg-gray-100 hover:text-green-500"
                      )}
                    >
                      კონტაქტი
                    </Link>
                  </div>
                </div>
                <Link
                  href="/tickets"
                  className={cn(
                    "px-4 py-2 font-bold rounded-lg transition",
                    isActive("/tickets")
                      ? "bg-green-50 text-green-600"
                      : "hover:bg-gray-100 hover:text-green-500"
                  )}
                >
                  ბილეთები
                </Link>
                <Link
                  href="/exam"
                  className={cn(
                    "px-4 py-2 font-bold rounded-lg transition",
                    isActive("/exam")
                      ? "bg-green-50 text-green-600"
                      : "hover:bg-gray-100 hover:text-green-500"
                  )}
                >
                  გამოცდა
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
