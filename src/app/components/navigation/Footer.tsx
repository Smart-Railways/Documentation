import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TrainIcon, ShieldIcon, CpuIcon, LayersIcon, ServerIcon } from "../ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg overflow-hidden border border-brand-border bg-white shadow-2xs shrink-0">
                <Image
                  src="/logo.png"
                  alt="Sanket Logo"
                  fill
                  sizes="36px"
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-heading font-black text-xl tracking-tight text-brand-secondary">
                SANKET
              </span>
            </div>
            <p className="text-xs text-brand-muted leading-relaxed">
              Smart Indian Railways Traffic & Automatic Block Planning System. Engineered for the New Delhi – Mumbai Golden Quadrilateral corridor (1,384 km).
            </p>
            <div className="pt-1 text-[11px] text-brand-muted">
              Smart India Hackathon (SIH) 2026
            </div>
          </div>

          {/* Col 2: Documentation Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-secondary mb-3">
              Documentation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://sanket.aryanshrivastava.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary font-bold hover:underline transition-colors flex items-center gap-1"
                >
                  <span>Live Production App ↗</span>
                </a>
              </li>
              <li>
                <Link href="/" className="text-brand-muted hover:text-brand-primary transition-colors">
                  System Overview & Metrics
                </Link>
              </li>
              <li>
                <Link href="/frontend" className="text-brand-muted hover:text-brand-primary transition-colors">
                  Frontend Cockpit & Leaflet GIS
                </Link>
              </li>
              <li>
                <Link href="/backend" className="text-brand-muted hover:text-brand-primary transition-colors">
                  Backend Monolith & REST APIs
                </Link>
              </li>
              <li>
                <Link href="/ai" className="text-brand-muted hover:text-brand-primary transition-colors">
                  Railway AI & CP-SAT Engine
                </Link>
              </li>
              <li>
                <Link href="/enums" className="text-brand-muted hover:text-brand-primary transition-colors">
                  Enums & Model Choices
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Modules & Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-secondary mb-3">
              Core Technologies
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-brand-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block" />
                Google OR-Tools CP-SAT (9.8+)
              </li>
              <li className="flex items-center gap-1.5 text-brand-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block" />
                Calibrated XGBoost & Cox Survival
              </li>
              <li className="flex items-center gap-1.5 text-brand-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block" />
                Django 6.1+ & DRF Monolith
              </li>
              <li className="flex items-center gap-1.5 text-brand-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block" />
                Next.js 16.3 + React 19 + Tailwind v4
              </li>
              <li className="flex items-center gap-1.5 text-brand-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block" />
                RailKit Real Telemetry & Quota Guard
              </li>
            </ul>
          </div>

          {/* Col 4: Safety & Principles */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-secondary mb-3">
              Corridor Principles
            </h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              Physical railway safety strictly overrides operational convenience. High-risk track assets receive top optimization priority with conflict-free headway guarantees.
            </p>
            <div className="mt-3 p-2.5 rounded-lg bg-brand-tertiary border border-brand-border text-[11px] text-brand-secondary">
              ⚡ <strong>Zero Microservice Overhead</strong>: In-memory solver execution in ~0.1s.
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <div>
            © {new Date().getFullYear()} Sanket Project. Built for Indian Railways & Smart India Hackathon.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <ShieldIcon size={14} className="text-emerald-600" />
              Verified Indian Railways Corridor Model
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
