"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DocsLayout, NavSection } from "../components/navigation/DocsLayout";
import { Badge } from "../components/ui/Badge";
import { CodeBlock } from "../components/ui/CodeBlock";
import {
  LayersIcon,
  TrainIcon,
  ActivityIcon,
  ShieldIcon,
  CheckCircleIcon,
  TerminalIcon,
  CompassIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from "../components/ui/Icons";

const FRONTEND_NAV_SECTIONS: NavSection[] = [
  {
    title: "Introduction",
    items: [
      { title: "Frontend Overview", href: "/frontend#overview", badge: "Next.js 16" },
      { title: "Technology Stack", href: "/frontend#tech-stack" },
      { title: "Directory Architecture", href: "/frontend#directory" },
    ],
  },
  {
    title: "Core UI Modules",
    items: [
      { title: "1. Corridor GIS Railway Map", href: "/frontend#gis-map", badge: "Leaflet" },
      { title: "2. Train Operations & Timetables", href: "/frontend#trains", badge: "/trains" },
      { title: "3. Infrastructure Asset Management", href: "/frontend#assets", badge: "/assets" },
      { title: "4. Maintenance & Block Cockpit", href: "/frontend#maintenance", badge: "/maintenance" },
    ],
  },
  {
    title: "Integration & Mechanics",
    items: [
      { title: "7-Day Running Bitmask", href: "/frontend#bitmask" },
      { title: "Hydration Safety & Leaflet", href: "/frontend#hydration" },
      { title: "Optimistic Mutations", href: "/frontend#tanstack" },
      { title: "Setup & Local Development", href: "/frontend#setup" },
    ],
  },
];

const FRONTEND_TOC = [
  { id: "live-deployment", label: "Live Production Deployment" },
  { id: "overview", label: "Overview & Cockpit Concept" },
  { id: "tech-stack", label: "Technology Stack Table" },
  { id: "directory", label: "Directory Layout" },
  { id: "gis-map", label: "1. Corridor GIS & Railway Map" },
  { id: "trains", label: "2. Train Operations & Timetables" },
  { id: "assets", label: "3. Infrastructure Asset Management" },
  { id: "maintenance", label: "4. Maintenance & Block Cockpit" },
  { id: "bitmask", label: "7-Day Running Bitmask Pattern" },
  { id: "hydration", label: "Hydration Safety & Mobile Overlay" },
  { id: "setup", label: "Installation & Environment" },
];

export default function FrontendDocsPage() {
  return (
    <DocsLayout
      title="Sanket Frontend Cockpit"
      subtitle="Modern operations cockpit engineered for Indian Railways section controllers, station masters, and maintenance engineers with Next.js 16, React 19, Leaflet GIS, and TanStack Query."
      badge="Next.js 16.3 + React 19"
      sections={FRONTEND_NAV_SECTIONS}
      toc={FRONTEND_TOC}
    >
      {/* Live Production Deployment Callout */}
      <div id="live-deployment" className="rounded-2xl border-2 border-brand-primary/30 bg-gradient-to-r from-blue-50/80 via-brand-surface to-blue-50/80 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-brand-border bg-white shadow-2xs shrink-0 p-1">
            <Image
              src="/logo.png"
              alt="Sanket Logo"
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-700 tracking-wider flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Deployed Production Cockpit
              </span>
              <Badge variant="surface" size="sm">Online</Badge>
            </div>
           <a
  href="https://sanket.aryanshrivastava.dev/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm sm:text-base font-extrabold break-all text-brand-secondary hover:text-brand-primary font-mono"
>
  https://sanket.aryanshrivastava.dev/
</a>
          </div>
        </div>

        <a
          href="https://sanket.aryanshrivastava.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-brand-primary text-white text-xs font-bold hover:bg-blue-700 transition-all shadow-2xs shrink-0"
        >
          <span>Launch Live App</span>
          <ExternalLinkIcon size={14} />
        </a>
      </div>

      {/* Overview Section */}
      <section id="overview" className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-8 shadow-xs w-full max-w-full min-w-0">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 rounded-lg bg-blue-50 text-brand-primary border border-brand-primary/20 shrink-0">
            <LayersIcon size={20} />
          </span>
          <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-brand-secondary break-words">
            System Overview & Cockpit Architecture
          </h2>
        </div>
        <p className="text-sm text-brand-secondary/90 leading-relaxed mb-4">
          <strong>Sanket</strong> is a mission-critical operations cockpit engineered for Indian Railways. Operating dense corridors requires balancing fast-moving high-priority passenger expresses (such as Vande Bharat, Rajdhani, and Shatabdi) with essential civil, electrical (OHE), and signaling maintenance closures.
        </p>
        <p className="text-sm text-brand-secondary/90 leading-relaxed">
          The frontend bridges real-time timetable operations, infrastructure condition monitoring, and intelligent corridor block allocation to <strong>minimize train delays while ensuring timely, safe maintenance</strong>.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="rounded-xl border border-brand-border/80 bg-brand-tertiary/60 p-3.5 sm:p-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-brand-secondary mb-1">
              Mission-Critical UI
            </h4>
            <p className="text-xs text-brand-muted">
              High-contrast status pills, dark cockpit theme option, and zero clutter for 24/7 operations control centers.
            </p>
          </div>
          <div className="rounded-xl border border-brand-border/80 bg-brand-tertiary/60 p-3.5 sm:p-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-brand-secondary mb-1">
              Optimistic Updates
            </h4>
            <p className="text-xs text-brand-muted">
              TanStack Query v5 ensures instant UI feedback on asset edits, defect reporting, and slot reservations.
            </p>
          </div>
          <div className="rounded-xl border border-brand-border/80 bg-brand-tertiary/60 p-3.5 sm:p-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-brand-secondary mb-1">
              Zero ML Latency
            </h4>
            <p className="text-xs text-brand-muted">
              Communicates directly with the unified Django backend at <code className="text-brand-primary font-bold">/railways/</code> without extra ports.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Table */}
      <section id="tech-stack" className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-8 shadow-xs w-full max-w-full min-w-0">
        <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-brand-secondary mb-4 break-words">
          Technology Stack
        </h2>
        <div className="w-full max-w-full overflow-x-auto rounded-xl border border-brand-border scrollbar-thin">
          <table className="w-full text-left border-collapse min-w-[540px]">
            <thead>
              <tr className="border-b border-brand-border bg-brand-tertiary/60 text-xs font-bold text-brand-secondary">
                <th className="py-3 px-4">Layer</th>
                <th className="py-3 px-4">Selected Technology</th>
                <th className="py-3 px-4">Architectural Rationale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-xs sm:text-sm">
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-3 px-4 font-bold text-brand-secondary">Web Framework</td>
                <td className="py-3 px-4 font-mono font-semibold text-brand-primary">Next.js 16.3 (App Router)</td>
                <td className="py-3 px-4 text-brand-muted">Turbopack compilation, React Server Components, Server Actions for mutations.</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-3 px-4 font-bold text-brand-secondary">UI Library</td>
                <td className="py-3 px-4 font-mono font-semibold text-brand-secondary">React 19.2 + TypeScript 5</td>
                <td className="py-3 px-4 text-brand-muted">Modern concurrency, strict type checking for backend API contracts.</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-3 px-4 font-bold text-brand-secondary">Styling System</td>
                <td className="py-3 px-4 font-mono font-semibold text-brand-secondary">Tailwind CSS v4</td>
                <td className="py-3 px-4 text-brand-muted">Brand theme variables, high performance, mobile touch optimizations.</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-3 px-4 font-bold text-brand-secondary">Data Synchronization</td>
                <td className="py-3 px-4 font-mono font-semibold text-brand-secondary">TanStack React Query v5</td>
                <td className="py-3 px-4 text-brand-muted">Cache invalidation, polling, and optimistic background revalidation.</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-3 px-4 font-bold text-brand-secondary">Geospatial GIS</td>
                <td className="py-3 px-4 font-mono font-semibold text-brand-secondary">Leaflet & React-Leaflet</td>
                <td className="py-3 px-4 text-brand-muted">Dark Matter CartoDB / Mapbox tiles for rendering live Indian Railways tracks.</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-3 px-4 font-bold text-brand-secondary">Validation & Dates</td>
                <td className="py-3 px-4 font-mono font-semibold text-brand-secondary">Zod + date-fns</td>
                <td className="py-3 px-4 text-brand-muted">Strict runtime schema parsing and IST timezone date transformations.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Directory Layout */}
      <section id="directory" className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-8 shadow-xs w-full max-w-full min-w-0">
        <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-brand-secondary mb-2 break-words">
          Project Directory Structure
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4">
          Organized by domain concern under the <code className="font-mono text-brand-primary">src/</code> folder:
        </p>
        <CodeBlock
          code={`frontend/
├── public/                     # Static assets, Indian Railways logos, icons
├── src/
│   ├── actions/                # Next.js Server Actions for API mutations
│   │   ├── assets.ts           # Asset CRUD actions
│   │   ├── blocks.ts           # Block window allocation actions
│   │   ├── maintenance.ts      # Maintenance task & plan actions
│   │   ├── schedules.ts        # Train schedule actions
│   │   ├── sections.ts         # Section query actions
│   │   └── trains.ts           # Train fleet actions
│   ├── app/                    # Next.js App Router
│   │   ├── assets/             # Asset management page & skeletons
│   │   ├── maintenance/        # Maintenance planning & approval cockpit
│   │   ├── trains/             # Train operations & timetable page
│   │   ├── globals.css         # Tailwind CSS v4 theme variables
│   │   ├── layout.tsx          # Root layout & query client provider
│   │   └── page.tsx            # Main dashboard with GIS railway map
│   ├── components/
│   │   ├── dashboard/          # Dashboard components & recommendation banners
│   │   ├── map/                # Leaflet India railway map & corridor overlays
│   │   ├── navigation/         # Responsive sidebar & mobile drawer navbar
│   │   ├── notifications/      # Real-time notification drawer & alerts
│   │   ├── route-selector/     # Section & route selector controls
│   │   └── ui/                 # Reusable UI primitives (Dialog, Select, Table, etc.)
│   ├── hooks/                  # TanStack Query custom hooks (useRailwayQueries)
│   ├── lib/                    # Axios client, date parsing, and theme helpers
│   └── types/                  # TypeScript interfaces matching backend models
├── .env.example                # Sample environment configuration
├── ENUMS.md                    # Comprehensive reference of backend choices/enums
├── package.json                # Dependencies and npm scripts
└── tsconfig.json               # TypeScript configuration`}
          language="text"
          title="Frontend Directory Map"
        />
      </section>

      {/* Module 1: GIS Map */}
      <section id="gis-map" className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-8 shadow-xs w-full max-w-full min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 mb-4 min-w-0">
          <div className="flex items-start sm:items-center gap-2.5 min-w-0">
            <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-300 shrink-0 mt-0.5 sm:mt-0">
              <CompassIcon size={20} />
            </span>
            <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-brand-secondary break-words">
              1. 🗺️ Corridor GIS & Real-Time Railway Map
            </h2>
          </div>
          <Badge variant="success" size="md" className="self-start sm:self-auto shrink-0">
            Interactive GIS
          </Badge>
        </div>

        <p className="text-sm text-brand-secondary/90 leading-relaxed mb-4">
          The centerpiece of the homepage (<code className="font-mono text-brand-primary">src/app/page.tsx</code>) is the interactive geospatial map powered by <strong>Leaflet and React-Leaflet</strong>:
        </p>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-3.5 sm:p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1">
              Corridor & Section Dynamic Selector
            </h4>
            <p className="text-brand-muted">
              Section controllers can switch dynamically between divisions (Northern Railway, North Central, West Central, Western Railway) and filter tracks by station pairs (e.g. New Delhi – Mathura, Mathura – Agra, Surat – Mumbai Central).
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1">
              Visual Corridor Track Occupancy
            </h4>
            <p className="text-brand-muted">
              Renders color-coded polylines representing tracks: Green for Clear / Unoccupied, Amber for Active Maintenance Window, and Red for Train Occupied. Train markers update dynamically as actual movement entry/exit timestamps sync from the backend.
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl border border-brand-border bg-brand-tertiary/40 min-w-0">
            <h4 className="font-bold text-brand-secondary mb-1">
              Dark Mode CartoDB Tile Layer
            </h4>
            <p className="text-brand-muted">
              Default tile provider is configured to CartoDB Dark Matter for crisp readability in dim control room environments:
            </p>
            <div className="mt-2 font-mono text-[11px] sm:text-xs text-brand-secondary bg-white p-2 sm:p-2.5 rounded border border-brand-border break-all select-all overflow-hidden">
              https://&#123;s&#125;.basemaps.cartocdn.com/dark_all/&#123;z&#125;/&#123;x&#125;/&#123;y&#125;&#123;r&#125;.png
            </div>
          </div>
        </div>
      </section>

      {/* Module 2: Trains */}
      <section id="trains" className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-8 shadow-xs w-full max-w-full min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 mb-4 min-w-0">
          <div className="flex items-start sm:items-center gap-2.5 min-w-0">
            <span className="p-1.5 rounded-lg bg-blue-50 text-brand-primary border border-brand-primary/20 shrink-0 mt-0.5 sm:mt-0">
              <TrainIcon size={20} />
            </span>
            <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-brand-secondary break-words">
              2. 🚆 Train Operations & Traffic Management (/trains)
            </h2>
          </div>
          <Badge variant="surface" size="md" className="self-start sm:self-auto shrink-0">
            Traffic Control
          </Badge>
        </div>

        <p className="text-sm text-brand-secondary/90 leading-relaxed mb-4">
          The <code className="font-mono text-brand-primary">/trains</code> route handles fleet-wide timetable schedules, running days bitmasks, and real-time movement monitoring:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-xs sm:text-sm">
          <div className="p-3.5 sm:p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1">
              Multi-Category Fleet Support
            </h4>
            <p className="text-brand-muted mb-2">
              Every train category carries an inherent priority level (1–10) utilized by both the UI sorting and the CP-SAT optimizer:
            </p>
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-xs">
                <span>Vande Bharat / Rajdhani / Shatabdi</span>
                <span className="font-bold text-brand-primary">Priority 10</span>
              </div>
              <div className="flex justify-between font-mono text-xs">
                <span>Superfast / Express / Mail</span>
                <span className="font-bold text-brand-secondary">Priority 6–9</span>
              </div>
              <div className="flex justify-between font-mono text-xs">
                <span>Passenger & Heavy Freight</span>
                <span className="font-bold text-brand-muted">Priority 5</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1">
              Live Movement Tracking & Delays
            </h4>
            <p className="text-brand-muted">
              Cross-references scheduled entry/exit against actual movements synced by RailKit. Computes positive delay minutes and automatically flags ripple delay threats to maintenance controllers.
            </p>
          </div>
        </div>
      </section>

      {/* Module 3: Assets */}
      <section id="assets" className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-8 shadow-xs w-full max-w-full min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 mb-4 min-w-0">
          <div className="flex items-start sm:items-center gap-2.5 min-w-0">
            <span className="p-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 shrink-0 mt-0.5 sm:mt-0">
              <ActivityIcon size={20} />
            </span>
            <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-brand-secondary break-words">
              3. 🏗️ Infrastructure Asset Management (/assets)
            </h2>
          </div>
          <Badge variant="warning" size="md" className="self-start sm:self-auto shrink-0">
            Asset Health
          </Badge>
        </div>

        <p className="text-sm text-brand-secondary/90 leading-relaxed mb-4">
          The <code className="font-mono text-brand-primary">/assets</code> cockpit provides comprehensive inspection and lifecycle tracking across Indian Railways' three primary infrastructure departments:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="p-3.5 sm:p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <Badge variant="primary" size="sm" className="mb-2">
              ENGINEERING (Civil)
            </Badge>
            <p className="text-brand-muted">
              Rails, sleepers, ballast compaction, expansion joints, switches, and bridge structures. Requires heavy mechanized tamper blocks (3–6 hours).
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <Badge variant="put" size="sm" className="mb-2">
              S&T (Signal & Telecom)
            </Badge>
            <p className="text-brand-muted">
              Track circuits, point machines, signal units, axle counters, and electronic interlocking systems. Typically scheduled for 45–90 minute windows.
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <Badge variant="patch" size="sm" className="mb-2">
              TRACTION (TRD / OHE)
            </Badge>
            <p className="text-brand-muted">
              Overhead catenary wires, tension masts, power isolators, and traction substations. Requires track power shutdowns (1–3 hours).
            </p>
          </div>
        </div>
      </section>

      {/* Module 4: Maintenance Cockpit */}
      <section id="maintenance" className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-8 shadow-xs w-full max-w-full min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 mb-4 min-w-0">
          <div className="flex items-start sm:items-center gap-2.5 min-w-0">
            <span className="p-1.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-300 shrink-0 mt-0.5 sm:mt-0">
              <ShieldIcon size={20} />
            </span>
            <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-brand-secondary break-words">
              4. 🛠️ Intelligent Maintenance & Block Planning (/maintenance)
            </h2>
          </div>
          <Badge variant="surface" size="md" className="self-start sm:self-auto shrink-0">
            Block Optimization
          </Badge>
        </div>

        <p className="text-sm text-brand-secondary/90 leading-relaxed mb-4">
          The <code className="font-mono text-brand-primary">/maintenance</code> view provides section controllers with an AI-guided block allocation workflow:
        </p>

        <div className="space-y-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1">
              AI Recommendation Banner & 1-Click Auto-Apply
            </h4>
            <p className="text-brand-muted leading-relaxed mb-3">
              When reviewing pending defects or conflicting windows, an intelligent banner displays the CP-SAT recommended collision-free window. Controllers can click <strong>"Accept Recommendation"</strong> to execute the mutation in a single request:
            </p>
            <CodeBlock
              code={`// Frontend 1-Click Auto-Apply Trigger
const handleApplyRecommendation = async (blockWindowId: number) => {
  const response = await fetch(
    \`\${process.env.NEXT_PUBLIC_API_URL}/block-windows/\${blockWindowId}/apply-recommendation/\`,
    { method: "POST" }
  );
  if (response.ok) {
    queryClient.invalidateQueries({ queryKey: ["block-windows"] });
    toast.success("Block window rescheduled to optimal collision-free slot!");
  }
};`}
              language="typescript"
              title="React Mutation Trigger"
            />
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1">
              Maintenance Plan Status Lifecycle
            </h4>
            <CodeBlock
              code={`[DRAFT] ──> [PENDING_APPROVAL] ──> [APPROVED] ──> [IN_PROGRESS] ──> [COMPLETED]
     │               │                 │
     └──> [CANCELLED] └──> [REJECTED]   └──> [CANCELLED]`}
              language="text"
              title="Plan State Machine"
            />
          </div>
        </div>
      </section>

      {/* Bitmask Pattern */}
      <section id="bitmask" className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-8 shadow-xs w-full max-w-full min-w-0">
        <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-brand-secondary mb-3 break-words">
          7-Day Running Days Bitmask Formulation
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4 break-words">
          Indian Railways train timetables are encoded using a 7-character binary mask representing <strong>Monday through Sunday</strong>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 font-mono text-xs">
          <div className="p-3 rounded-lg border border-brand-border bg-white flex justify-between items-center">
            <span><code>"1111111"</code>: Daily (Mon–Sun)</span>
            <Badge variant="surface" size="sm">DAILY</Badge>
          </div>
          <div className="p-3 rounded-lg border border-brand-border bg-white flex justify-between items-center">
            <span><code>"1111100"</code>: Weekdays (Mon–Fri)</span>
            <Badge variant="neutral" size="sm">WEEKDAY</Badge>
          </div>
          <div className="p-3 rounded-lg border border-brand-border bg-white flex justify-between items-center">
            <span><code>"0000011"</code>: Weekends (Sat–Sun)</span>
            <Badge variant="neutral" size="sm">WEEKEND</Badge>
          </div>
          <div className="p-3 rounded-lg border border-brand-border bg-white flex justify-between items-center">
            <span><code>"1000000"</code>: Mondays only</span>
            <Badge variant="neutral" size="sm">MON_ONLY</Badge>
          </div>
        </div>
      </section>

      {/* Hydration Safety */}
      <section id="hydration" className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-8 shadow-xs w-full max-w-full min-w-0">
        <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-brand-secondary mb-3 break-words">
          Hydration Safety & Mobile Overlay Isolation
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4 leading-relaxed break-words">
          Leaflet relies on browser APIs (<code className="font-mono text-brand-primary">window</code>, <code className="font-mono text-brand-primary">document</code>) that are unavailable during Next.js server-side rendering (SSR). To eliminate hydration errors:
        </p>

        <div className="space-y-4">
          <CodeBlock
            code={`// Dynamic import with SSR disabled in Next.js App Router
import dynamic from "next/dynamic";

export const RailwayCorridorMap = dynamic(
  () => import("./LeafletCorridorMap"),
  {
    ssr: false,
    loading: () => <MapHydrationSkeleton />,
  }
);`}
            language="typescript"
            title="components/map/RailwayCorridorMap.tsx"
          />

          <div className="p-3.5 sm:p-4 rounded-xl border border-brand-border bg-brand-tertiary/40 text-xs sm:text-sm">
            <h4 className="font-bold text-brand-secondary mb-1">
              Backdrop-Filter Stacking Context Fix
            </h4>
            <p className="text-brand-muted">
              On mobile devices, backdrop blur on route selectors could bleed through the navigation drawer. This is solved in <code className="font-mono text-brand-primary">globals.css</code> using CSS isolation:
            </p>
            <CodeBlock
              code={`.mobile-nav-open [data-mobile-sidebar] {
  z-index: 9999 !important;
  isolation: isolate;
}`}
              language="css"
            />
          </div>
        </div>
      </section>

      {/* Setup & Local Development */}
      <section id="setup" className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-8 shadow-xs w-full max-w-full min-w-0">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
            <TerminalIcon size={20} />
          </span>
          <h2 className="text-lg sm:text-2xl font-heading font-extrabold text-brand-secondary break-words">
            Installation & Environment Configuration
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-brand-muted mb-4">
          Configure <code className="font-mono text-brand-primary">.env.local</code> in the frontend root:
        </p>

        <CodeBlock
          code={`# Live Production Deployed Web App:
# https://sanket.aryanshrivastava.dev/

# Local Backend API URLs (Django REST Framework)
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
NEXT_PUBLIC_API_URL=http://localhost:8000/railways

# Production Backend API (Render Cloud)
# NEXT_PUBLIC_BACKEND_URL=https://backend-oz3h.onrender.com
# NEXT_PUBLIC_API_URL=https://backend-oz3h.onrender.com/railways

# Map Configuration (Optional)
# Leave empty for free CartoDB Dark Matter tiles:
NEXT_PUBLIC_CARTO_API_KEY=
# NEXT_PUBLIC_MAP_TILE_URL=https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=YOUR_TOKEN`}
          language="env"
          title="frontend/.env.local"
        />

        <div className="mt-4">
          <CodeBlock
            code={`# 1. Install dependencies
bun install   # or npm install

# 2. Run local development server
bun dev       # or npm run dev

# 3. Production build
bun run build # or npm run build`}
            language="bash"
            title="Terminal Commands"
          />
        </div>
      </section>
    </DocsLayout>
  );
}
