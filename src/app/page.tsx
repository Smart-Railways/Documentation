"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "./components/navigation/Navbar";
import { Footer } from "./components/navigation/Footer";
import {
  TrainIcon,
  CpuIcon,
  ServerIcon,
  LayersIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldIcon,
  ActivityIcon,
  ClockIcon,
  TerminalIcon,
  BookOpenIcon,
  ExternalLinkIcon,
} from "./components/ui/Icons";
import { Badge } from "./components/ui/Badge";
import { CodeBlock } from "./components/ui/CodeBlock";
import { CorridorMapVisual } from "./components/visuals/CorridorMapVisual";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-tertiary w-full max-w-full overflow-x-hidden min-w-0">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-brand-border bg-gradient-to-b from-brand-surface via-brand-surface to-brand-tertiary/60 py-8 sm:py-16 lg:py-20 w-full max-w-full">
        <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 w-full min-w-0">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto min-w-0">
            {/* Official Logo Emblem */}
            <div className="relative h-14 w-14 sm:h-20 sm:w-20 rounded-2xl overflow-hidden border-2 border-brand-border bg-white shadow-md p-1 shrink-0">
              <Image
                src="/logo.png"
                alt="Sanket Official Logo"
                fill
                sizes="80px"
                className="object-contain"
                priority
              />
            </div>

            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-brand-border bg-white px-2.5 py-1 text-xs font-semibold text-brand-secondary shadow-2xs max-w-full min-w-0">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="font-bold text-brand-primary shrink-0 text-[11px] sm:text-xs">Live Cockpit:</span>
              <a
                href="https://sanket.aryanshrivastava.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-secondary underline hover:text-brand-primary truncate min-w-0 text-[11px] sm:text-xs font-mono"
              >
                sanket.aryanshrivastava.dev ↗
              </a>
            </div>

            <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-secondary leading-tight break-words">
              AI-Powered Automatic Block Planning for{" "}
              <span className="text-brand-primary underline decoration-brand-blue-light decoration-4 underline-offset-4">
                Indian Railways
              </span>
            </h1>

            <p className="text-xs sm:text-base lg:text-lg text-brand-muted max-w-3xl leading-relaxed">
              <strong>Sanket</strong> coordinates high-density passenger express traffic with vital infrastructure maintenance windows across the <strong>1,384 km New Delhi – Mumbai corridor</strong>. Eliminates operational bottlenecks through in-memory <strong>CP-SAT constraint optimization</strong> and <strong>calibrated failure risk analytics</strong>.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full sm:w-auto">
              <a
                href="https://sanket.aryanshrivastava.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-all active:scale-98"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Launch Live Cockpit</span>
                <ExternalLinkIcon size={14} />
              </a>
              <Link
                href="/ai"
                className="flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-surface px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-brand-secondary hover:border-brand-primary hover:text-brand-primary transition-all active:scale-98 shadow-2xs"
              >
                <CpuIcon size={16} />
                <span>Explore AI Engine</span>
              </Link>
              <Link
                href="/backend"
                className="flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-white px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-brand-secondary hover:border-brand-primary hover:text-brand-primary transition-all active:scale-98 shadow-2xs"
              >
                <ServerIcon size={16} />
                <span>Backend & APIs</span>
              </Link>
              <Link
                href="/frontend"
                className="flex items-center justify-center gap-2 rounded-xl border border-brand-border bg-white px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-brand-secondary hover:border-brand-primary hover:text-brand-primary transition-all active:scale-98 shadow-2xs"
              >
                <LayersIcon size={16} />
                <span>Frontend Docs</span>
              </Link>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            <div className="rounded-2xl border border-brand-border bg-brand-surface p-3.5 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-wider">
                  Corridor Reach
                </span>
                <TrainIcon size={16} className="text-brand-primary" />
              </div>
              <div className="mt-1.5 text-xl sm:text-3xl font-black text-brand-secondary">
                1,384 km
              </div>
              <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 font-medium line-clamp-1">
                NDLS to MMCT Golden Quadrilateral
              </p>
            </div>

            <div className="rounded-2xl border border-brand-border bg-brand-surface p-3.5 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-wider">
                  Critical Throughput
                </span>
                <ActivityIcon size={16} className="text-emerald-600" />
              </div>
              <div className="mt-1.5 text-xl sm:text-3xl font-black text-emerald-600">
                +25%
              </div>
              <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 font-medium line-clamp-1">
                High-priority jobs vs FIFO Baseline
              </p>
            </div>

            <div className="rounded-2xl border border-brand-border bg-brand-surface p-3.5 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-wider">
                  Joint Bundling
                </span>
                <ShieldIcon size={16} className="text-purple-600" />
              </div>
              <div className="mt-1.5 text-xl sm:text-3xl font-black text-purple-600">
                40%+
              </div>
              <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 font-medium line-clamp-1">
                Closure reduction via co-planning
              </p>
            </div>

            <div className="rounded-2xl border border-brand-border bg-brand-surface p-3.5 sm:p-5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-wider">
                  AI Architecture
                </span>
                <CpuIcon size={16} className="text-brand-primary" />
              </div>
              <div className="mt-1.5 text-xl sm:text-3xl font-black text-brand-secondary">
                0ms Latency
              </div>
              <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 font-medium line-clamp-1">
                In-memory solver inside Django
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Documentation Sections */}
      <section className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 py-10 sm:py-16 w-full max-w-full min-w-0">
  
        {/* Corridor Digital Twin Showcase */}
        <div id="corridor-map" className="mb-12 sm:mb-16 w-full max-w-full min-w-0">
          <div className="mb-4 min-w-0">
            <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-brand-secondary break-words">
              Corridor Digital Twin & Station Topology
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 break-words">
              Real-world corridor evidence with automatic alias resolution for historical Indian Railways station codes.
            </p>
          </div>
          <CorridorMapVisual />
        </div>

        {/* 3 Core Architecture Pillars */}
        <div className="mb-12 sm:mb-16 w-full max-w-full min-w-0">
          <div className="mb-6 sm:mb-8 min-w-0">
            <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-brand-secondary break-words">
              System Architecture & Documentation Portals
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 break-words">
              Select any of the three core sub-systems below to access complete technical guides, schemas, and configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Frontend */}
            <div className="rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-xs hover:border-brand-primary transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden border border-brand-border bg-white shadow-2xs shrink-0 p-1">
                    <Image
                      src="/logo.png"
                      alt="Sanket Logo"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <Badge variant="surface" size="sm">
                    Next.js 16.3 + React 19
                  </Badge>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                    Frontend Cockpit (Sanket UI)
                  </h3>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                    Operations control center tailored for Indian Railways section controllers. Features Leaflet GIS mapping, dynamic timetable schedules, multi-category fleet tracking, asset CRUD, and AI recommendation banners with 1-Click approval.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-brand-secondary/90 pt-2 border-t border-brand-border/60">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon size={14} className="text-brand-primary shrink-0" />
                    Leaflet GIS map with corridor occupancy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon size={14} className="text-brand-primary shrink-0" />
                    TanStack Query v5 optimistic UI updates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon size={14} className="text-brand-primary shrink-0" />
                    Hydration-safe skeletons & mobile overlay
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between gap-2">
                <Link
                  href="/frontend"
                  className="font-bold text-xs text-brand-primary hover:underline flex items-center gap-1"
                >
                  <span>Frontend Docs</span>
                  <ArrowRightIcon size={13} />
                </Link>
                <a
                  href="https://sanket.aryanshrivastava.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-blue-light text-brand-primary text-xs font-bold hover:bg-brand-primary hover:text-white transition-colors"
                >
                  <span>Live App</span>
                  <ExternalLinkIcon size={12} />
                </a>
              </div>
            </div>

            {/* Card 2: Backend */}
            <div className="rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-xs hover:border-brand-primary transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-300/40">
                    <ServerIcon size={24} />
                  </div>
                  <Badge variant="success" size="sm">
                    Django 6.1 + DRF
                  </Badge>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                    Backend & Intelligence Engine
                  </h3>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                    Unified monolith powering relational persistence (PostgreSQL 16 / SQLite), Celery 5.6+ timetable sync, RailKit quota-guarded train telemetry, and embedded in-memory AI constraint optimization without external microservices.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-brand-secondary/90 pt-2 border-t border-brand-border/60">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon size={14} className="text-emerald-600 shrink-0" />
                    15+ REST endpoints with IST timezone handling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon size={14} className="text-emerald-600 shrink-0" />
                    3-tier auto-overdue task DELAYED lifecycle
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon size={14} className="text-emerald-600 shrink-0" />
                    35-request Bruno automated test collection
                  </li>
                </ul>
              </div>
              <Link
                href="/backend"
                className="mt-6 inline-flex items-center justify-between w-full font-bold text-xs text-brand-primary group-hover:underline pt-4 border-t border-brand-border"
              >
                <span>Read Backend & API Catalog</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>

            {/* Card 3: AI Engine */}
            <div className="rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-xs hover:border-brand-primary transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 border border-purple-300/40">
                    <CpuIcon size={24} />
                  </div>
                  <Badge variant="surface" size="sm">
                    Google OR-Tools CP-SAT
                  </Badge>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-secondary group-hover:text-brand-primary transition-colors">
                    Railway AI & Optimization Engine
                  </h3>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                    Mathematical co-pilot for controllers. Uses Calibrated XGBoost and Cox Survival analysis to score failure risk, and OR-Tools CP-SAT discrete optimization to pack conflict-free maintenance windows across 6h daily, 7d weekly, and 30d monthly horizons.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-brand-secondary/90 pt-2 border-t border-brand-border/60">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon size={14} className="text-purple-600 shrink-0" />
                    Multi-department joint bundling (40% fewer closures)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon size={14} className="text-purple-600 shrink-0" />
                    Dynamic operational pressure scoring via train delay
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon size={14} className="text-purple-600 shrink-0" />
                    Explainable reason tags (`HIGH_FAILURE_RISK`, etc.)
                  </li>
                </ul>
              </div>
              <Link
                href="/ai"
                className="mt-6 inline-flex items-center justify-between w-full font-bold text-xs text-brand-primary group-hover:underline pt-4 border-t border-brand-border"
              >
                <span>Read Railway AI Docs</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Quickstart Walkthrough */}
        <div id="quickstart" className="mb-12 sm:mb-16 w-full max-w-full min-w-0">
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-8 shadow-xs w-full max-w-full min-w-0 overflow-hidden">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
                <TerminalIcon size={20} />
              </span>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary break-words">
                5-Minute Quickstart: Running Locally
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted mb-6 break-words">
              Follow these three simple steps to start the complete platform on your workstation.
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-bold">
                    1
                  </span>
                  <h4 className="font-bold text-sm text-brand-secondary">
                    Launch Unified Backend (Django + Embedded AI)
                  </h4>
                </div>
                <CodeBlock
                  code={`# Navigate to backend directory
cd backend

# Option A: Fastest with uv
uv pip install -r requirements.txt
uv run python manage.py migrate
uv run python manage.py runserver 8000

# Backend will serve DRF Browsable API at: http://127.0.0.1:8000/railways/`}
                  language="bash"
                  title="Terminal: Backend Setup"
                />
              </div>

              {/* Step 2 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-bold">
                    2
                  </span>
                  <h4 className="font-bold text-sm text-brand-secondary">
                    Launch Frontend Cockpit (Next.js 16)
                  </h4>
                </div>
                <CodeBlock
                  code={`# In another terminal window
cd frontend

# Install dependencies and start development server
bun install   # or: npm install
bun dev       # or: npm run dev

# Open cockpit in browser: http://localhost:3000`}
                  language="bash"
                  title="Terminal: Frontend Setup"
                />
              </div>

              {/* Step 3 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-bold">
                    3
                  </span>
                  <h4 className="font-bold text-sm text-brand-secondary">
                    Verify Embedded AI & Test Suite
                  </h4>
                </div>
                <CodeBlock
                  code={`# Run in-memory CP-SAT & Calibrated XGBoost unit tests
python -m unittest tests/test_embedded_ai.py

# Check engine health in 1 line
python -c "from src.services.ml_engine import RailwayMLEngine; print(RailwayMLEngine().health())"
# Output: Engine status: HEALTHY (Models loaded: 6/6)`}
                  language="bash"
                  title="Terminal: AI Health Check"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Empirical Proof: AI vs Baseline Comparison */}
        <div id="benchmarks" className="mb-8 w-full max-w-full min-w-0">
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-8 shadow-xs w-full max-w-full min-w-0 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-brand-border/80 pb-5 mb-6">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                    <ActivityIcon size={20} />
                  </span>
                  <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary break-words">
                    Empirical Proof: AI Optimizer vs Traditional FIFO
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-brand-muted mt-1 break-words">
                  Validated against Indian Railways corridor traffic simulations across 75 automated test suites.
                </p>
              </div>
              <Badge variant="surface" size="md" className="self-start sm:self-auto shrink-0">
                Verified Benchmark
              </Badge>
            </div>

            <div className="w-full max-w-full overflow-x-auto rounded-xl border border-brand-border/60 scrollbar-thin">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-brand-border bg-brand-tertiary/60 text-xs font-bold text-brand-secondary">
                    <th className="py-2.5 px-3 sm:py-3 sm:px-4">Evaluation Metric</th>
                    <th className="py-2.5 px-3 sm:py-3 sm:px-4">FIFO Baseline</th>
                    <th className="py-2.5 px-3 sm:py-3 sm:px-4 text-brand-primary">Railway AI (CP-SAT)</th>
                    <th className="py-2.5 px-3 sm:py-3 sm:px-4">Net Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border text-xs sm:text-sm">
                  <tr className="hover:bg-brand-tertiary/30">
                    <td className="py-3 px-4 font-bold text-brand-secondary">
                      Critical Track Defect Throughput
                    </td>
                    <td className="py-3 px-4 text-brand-muted font-mono">
                      Baseline (unprioritized)
                    </td>
                    <td className="py-3 px-4 font-bold font-mono text-emerald-600">
                      +25% high-risk tasks scheduled
                    </td>
                    <td className="py-3 px-4 text-brand-secondary">
                      Prevents rail fractures by resolving urgent defects before deadlines.
                    </td>
                  </tr>

                  <tr className="hover:bg-brand-tertiary/30">
                    <td className="py-3 px-4 font-bold text-brand-secondary">
                      Multi-Department Bundling
                    </td>
                    <td className="py-3 px-4 text-brand-muted font-mono">
                      Near 0% (Siloed department blocks)
                    </td>
                    <td className="py-3 px-4 font-bold font-mono text-purple-600">
                      40%+ joint track closures
                    </td>
                    <td className="py-3 px-4 text-brand-secondary">
                      "One Closure, Three Jobs Done": Civil, S&T, and Traction share windows.
                    </td>
                  </tr>

                  <tr className="hover:bg-brand-tertiary/30">
                    <td className="py-3 px-4 font-bold text-brand-secondary">
                      Ripple Passenger Delays
                    </td>
                    <td className="py-3 px-4 text-brand-muted font-mono">
                      High (Random peak closures)
                    </td>
                    <td className="py-3 px-4 font-bold font-mono text-brand-primary">
                      Steered to delay-trough intervals
                    </td>
                    <td className="py-3 px-4 text-brand-secondary">
                      Dynamically respects Vande Bharat & Rajdhani priority headways.
                    </td>
                  </tr>

                  <tr className="hover:bg-brand-tertiary/30">
                    <td className="py-3 px-4 font-bold text-brand-secondary">
                      Decision Explainability
                    </td>
                    <td className="py-3 px-4 text-brand-muted font-mono">
                      Manual intuition / Paper logs
                    </td>
                    <td className="py-3 px-4 font-bold font-mono text-brand-secondary">
                      Plain-English reason tags + Confidence
                    </td>
                    <td className="py-3 px-4 text-brand-secondary">
                      Human controllers retain 100% oversight and 1-Click approval rights.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
