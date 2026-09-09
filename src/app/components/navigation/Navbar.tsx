"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TrainIcon, SearchIcon, MenuIcon, CloseIcon, ExternalLinkIcon } from "../ui/Icons";
import { SearchModal } from "./SearchModal";

const NAV_LINKS = [
  { label: "Overview", href: "/" },
  { label: "Frontend", href: "/frontend" },
  { label: "Backend", href: "/backend" },
  { label: "AI Engine", href: "/ai" },
  { label: "Enums", href: "/enums" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-brand-border bg-brand-surface/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo - Clean & Compact */}
          <Link
            href="/"
            className="flex items-center gap-2 font-heading font-black text-lg tracking-tight text-brand-secondary hover:opacity-90 shrink-0"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden border border-brand-border bg-white shadow-2xs shrink-0">
              <Image
                src="/logo.png"
                alt="Sanket Logo"
                fill
                sizes="32px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <span>SANKET</span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand-blue-light text-brand-primary border border-brand-primary/20">
              Docs
            </span>
          </Link>

          {/* Simple Clean Page Switcher (No Icons, No Badges) */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-brand-primary text-white shadow-2xs"
                      : "text-brand-secondary hover:text-brand-primary hover:bg-brand-tertiary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Live App Button */}
            <a
              href="https://sanket.aryanshrivastava.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-brand-blue-light text-brand-primary border border-brand-primary/20 text-xs font-bold hover:bg-brand-primary hover:text-white transition-all shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>Live App</span>
              <ExternalLinkIcon size={12} />
            </a>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              type="button"
              aria-label="Search docs"
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-brand-border bg-white text-xs font-medium text-brand-muted hover:border-brand-primary hover:text-brand-primary transition-all cursor-pointer shadow-2xs"
            >
              <SearchIcon size={14} />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline text-[10px] font-mono bg-brand-tertiary px-1 rounded border border-brand-border text-brand-secondary">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation"
              className="md:hidden p-1.5 rounded-lg text-brand-secondary hover:bg-brand-tertiary border border-brand-border cursor-pointer"
            >
              {mobileMenuOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            </button>
          </div>
        </div>

        {/* Simple Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-brand-border bg-brand-surface px-4 py-3 space-y-1 shadow-md animate-fade-in-down">
            <a
              href="https://sanket.aryanshrivastava.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold bg-brand-blue-light text-brand-primary border border-brand-primary/20 mb-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Launch Live App</span>
              </div>
              <ExternalLinkIcon size={14} />
            </a>

            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-brand-primary text-white"
                      : "text-brand-secondary hover:bg-brand-tertiary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Global Search Dialog Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
