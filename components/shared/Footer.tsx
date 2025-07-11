"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
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
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pathname, timeoutId]);

  const isActive = (href: string): boolean => {
    return pathname === href;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <footer className="bg-white text-black mt-auto border-t-2 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 sm:py-8">
          <Link
            href="/"
            className="text-xl font-bold text-red-400 mb-4 sm:mb-0"
          >
            <Image
              src="/LogoAvto.png"
              alt="car-logo"
              width={170}
              height={60}
              className="w-32 sm:w-40 lg:w-48 h-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center justify-between gap-x-5 lg:gap-x-6 text-base lg:text-md">
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-300",
                  isActive("/") ? "text-red-400" : "hover:text-red-400"
                )}
              >
                <Link
                  href="/"
                  className={cn(
                    "font-bold",
                    isActive("/") ? "text-red-400" : ""
                  )}
                >
                  მთავარი
                </Link>
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-300 ease-in-out",
                    isOpen ? "rotate-180" : "rotate-0"
                  )}
                />
              </div>
              {isOpen && (
                <div className="absolute bottom-full right-0 w-48 bg-white rounded-lg shadow-lg py-2 z-50 text-base transform transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                  <Link
                    href="/videos"
                    className={cn(
                      "block px-4 py-2 font-semibold text-gray-800",
                      isActive("/videos")
                        ? "text-red-400"
                        : "hover:text-red-400 hover:bg-gray-50"
                    )}
                  >
                    ვიდეოები
                  </Link>
                  <Separator className="my-1" />
                  <Link
                    href="/teachers"
                    className={cn(
                      "block px-4 py-2 font-semibold text-gray-800",
                      isActive("/teachers")
                        ? "text-red-400"
                        : "hover:text-red-400 hover:bg-gray-50"
                    )}
                  >
                    მასწავლებლები
                  </Link>
                  <Separator className="my-1" />
                  <Link
                    href="/about-us"
                    className={cn(
                      "block px-4 py-2 font-semibold text-gray-800",
                      isActive("/about-us")
                        ? "text-red-400"
                        : "hover:text-red-400 hover:bg-gray-50"
                    )}
                  >
                    ჩვენს შესახებ
                  </Link>
                  <Separator className="my-1" />
                  <Link
                    href="/contact"
                    className={cn(
                      "block px-4 py-2 font-semibold text-gray-800",
                      isActive("/contact")
                        ? "text-red-400"
                        : "hover:text-red-400 hover:bg-gray-50"
                    )}
                  >
                    კონტაქტი
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/road-signs"
              className={cn(
                "px-3 py-2 font-semibold rounded-lg transition-colors duration-300",
                isActive("/road-signs") ? "text-red-400" : "hover:text-red-400"
              )}
            >
              საგზაო ნიშნები
            </Link>
            <Link
              href="/tickets"
              className={cn(
                "px-3 py-2 font-semibold rounded-lg transition-colors duration-300",
                isActive("/tickets") ? "text-red-400" : "hover:text-red-400"
              )}
            >
              ბილეთები
            </Link>
            <Link
              href="/exam"
              className={cn(
                "px-3 py-2 font-semibold rounded-lg transition-colors duration-300",
                isActive("/exam") ? "text-red-400" : "hover:text-red-400"
              )}
            >
              გამოცდა
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-800 transition-colors duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={cn(
            "md:hidden transition-all duration-500 ease-in-out",
            mobileMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
          )}
        >
          <nav className="flex flex-col space-y-2">
            <div className="relative">
              <button
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 w-full text-left",
                  isActive("/") ? "text-red-400" : "hover:text-red-400"
                )}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <span className="font-semibold text-base">
                  <Link href="/">მთავარი</Link>
                </span>
                <ChevronDown
                  size={16}
                  className={cn(
                    "ml-auto transition-transform duration-300",
                    isOpen ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>
              <div
                className={cn(
                  "pl-6 transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                )}
              >
                <Link
                  href="/videos"
                  className={cn(
                    "block px-4 py-2 text-base font-semibold text-gray-800",
                    isActive("/videos")
                      ? "text-red-400"
                      : "hover:text-red-400 hover:bg-gray-50"
                  )}
                >
                  ვიდეოები
                </Link>
                <Link
                  href="/teachers"
                  className={cn(
                    "block px-4 py-2 text-base font-semibold text-gray-800",
                    isActive("/teachers")
                      ? "text-red-400"
                      : "hover:text-red-400 hover:bg-gray-50"
                  )}
                >
                  მასწავლებლები
                </Link>
                <Link
                  href="/about-us"
                  className={cn(
                    "block px-4 py-2 text-base font-semibold text-gray-800",
                    isActive("/about-us")
                      ? "text-red-400"
                      : "hover:text-red-400 hover:bg-gray-50"
                  )}
                >
                  ჩვენს შესახებ
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "block px-4 py-2 text-base font-semibold text-gray-800",
                    isActive("/contact")
                      ? "text-red-400"
                      : "hover:text-red-400 hover:bg-gray-50"
                  )}
                >
                  კონტაქტი
                </Link>
              </div>
            </div>
            <Link
              href="/road-signs"
              className={cn(
                "px-4 py-2 font-semibold rounded-lg transition-colors duration-300",
                isActive("/road-signs") ? "text-red-400" : "hover:text-red-400"
              )}
            >
              საგზაო ნიშნები
            </Link>
            <Link
              href="/tickets"
              className={cn(
                "px-4 py-2 font-semibold rounded-lg transition-colors duration-300",
                isActive("/tickets") ? "text-red-400" : "hover:text-red-400"
              )}
            >
              ბილეთები
            </Link>
            <Link
              href="/exam"
              className={cn(
                "px-4 py-2 font-semibold rounded-lg transition-colors duration-300",
                isActive("/exam") ? "text-red-400" : "hover:text-red-400"
              )}
            >
              გამოცდა
            </Link>
          </nav>
        </div>
        <div className="py-4 text-center text-sm text-gray-400 border-t">
          <p>© 2024 ავტოსკოლა. ყველა უფლება დაცულია.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
