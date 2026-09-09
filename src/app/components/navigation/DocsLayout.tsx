"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BookOpenIcon, MenuIcon, CloseIcon, ChevronRightIcon } from "../ui/Icons";
import { Badge } from "../ui/Badge";

export interface NavSection {
  title: string;
  items: {
    title: string;
    href: string;
    badge?: string;
  }[];
}

interface DocsLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
  sections?: NavSection[];
  toc?: { id: string; label: string }[];
}

export function DocsLayout({
  children,
  title,
  subtitle,
  badge,
  sections,
  toc,
}: DocsLayoutProps) {
  const pathname = usePathname();
  const [mobileSectionsOpen, setMobileSectionsOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-brand-tertiary overflow-x-hidden w-full">
      <Navbar />

      {/* Mobile Sticky Bar for Subsections & TOC (Visible on < lg) */}
      {((sections && sections.length > 0) || (toc && toc.length > 0)) && (
        <div className="lg:hidden sticky top-16 z-30 w-full border-b border-brand-border bg-brand-surface/95 backdrop-blur-md px-4 py-2.5 flex items-center justify-between shadow-2xs">
          <div className="flex items-center gap-2 truncate pr-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary truncate">
              {title}
            </span>
          </div>

          <button
            onClick={() => setMobileSectionsOpen(true)}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-brand-border bg-white text-xs font-semibold text-brand-secondary hover:border-brand-primary transition-colors shrink-0 cursor-pointer shadow-2xs"
          >
            <MenuIcon size={14} />
            <span>On This Page</span>
          </button>
        </div>
      )}

      {/* Mobile Sections Bottom Sheet / Modal */}
      {mobileSectionsOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
          <div
            className="fixed inset-0 bg-brand-secondary/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileSectionsOpen(false)}
          />

          <div className="relative w-full max-h-[80vh] bg-brand-surface rounded-t-2xl shadow-2xl border-t border-brand-border flex flex-col z-50 overflow-hidden animate-fade-in-up">
            <div className="flex items-center justify-between p-4 border-b border-brand-border bg-brand-tertiary/50">
              <div className="flex items-center gap-2">
                <BookOpenIcon size={18} className="text-brand-primary" />
                <span className="font-heading font-bold text-sm text-brand-secondary">
                  Page Navigation & Sections
                </span>
              </div>
              <button
                onClick={() => setMobileSectionsOpen(false)}
                className="p-1 rounded-lg text-brand-muted hover:text-brand-secondary cursor-pointer"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            <div className="overflow-y-auto p-4 space-y-6 flex-1">
              {/* Table of Contents Anchors */}
              {toc && toc.length > 0 && (
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-primary mb-2">
                    On This Page
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setMobileSectionsOpen(false)}
                        className="flex items-center justify-between p-2 rounded-lg text-xs font-medium text-brand-secondary hover:bg-brand-blue-light/60 hover:text-brand-primary transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronRightIcon size={14} className="text-brand-muted" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Sidebar Sections */}
              {sections && sections.length > 0 && (
                <div className="space-y-4 pt-2 border-t border-brand-border/60">
                  {sections.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-secondary/80 mb-2">
                        {section.title}
                      </h4>
                      <div className="space-y-1">
                        {section.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            onClick={() => setMobileSectionsOpen(false)}
                            className="flex items-center justify-between p-2 rounded-lg text-xs font-medium text-brand-secondary hover:bg-brand-blue-light/60 hover:text-brand-primary transition-colors"
                          >
                            <span>{item.title}</span>
                            {item.badge && (
                              <Badge variant="surface" size="sm">
                                {item.badge}
                              </Badge>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 px-3.5 sm:px-6 lg:px-8 py-6 sm:py-8 gap-8 min-w-0">
        {/* Left Sticky Sidebar (Desktop only) */}
        {sections && sections.length > 0 && (
          <aside className="hidden lg:block w-60 xl:w-64 shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-3 space-y-6">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-brand-secondary/70 mb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item, itemIdx) => {
                      const isCurrent =
                        pathname === item.href ||
                        (item.href.includes("#") &&
                          pathname === item.href.split("#")[0]);

                      return (
                        <li key={itemIdx}>
                          <Link
                            href={item.href}
                            className={`group flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                              isCurrent
                                ? "bg-brand-blue-light/80 text-brand-primary font-bold"
                                : "text-brand-secondary/80 hover:bg-brand-surface hover:text-brand-primary"
                            }`}
                          >
                            <span className="line-clamp-1">{item.title}</span>
                            {item.badge && (
                              <span className="text-[10px] font-semibold text-brand-muted group-hover:text-brand-primary">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </aside>
        )}

        {/* Center Content Area */}
        <main className="flex-1 min-w-0 w-full">
          {/* Header Banner */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-5 sm:p-7 lg:p-8 shadow-xs mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-primary">
                Documentation
              </span>
              {badge && (
                <Badge variant="surface" size="sm">
                  {badge}
                </Badge>
              )}
            </div>
            <h1 className="font-heading text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-secondary">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs sm:text-sm lg:text-base text-brand-muted mt-2 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Page Content Body */}
          <div className="space-y-6 sm:space-y-8 min-w-0">{children}</div>
        </main>

        {/* Right Sticky Table of Contents (Desktop XL only) */}
        {toc && toc.length > 0 && (
          <aside className="hidden xl:block w-52 shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pl-3 border-l border-brand-border/80">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-secondary mb-3 flex items-center gap-1.5">
                <BookOpenIcon size={13} className="text-brand-primary" />
                On this page
              </h4>
              <ul className="space-y-1.5 text-xs">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-brand-muted hover:text-brand-primary transition-colors block py-0.5 line-clamp-1"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>

      <Footer />
    </div>
  );
}
