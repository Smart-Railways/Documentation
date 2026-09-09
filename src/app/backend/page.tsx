"use client";

import React from "react";
import Link from "next/link";
import { DocsLayout, NavSection } from "../components/navigation/DocsLayout";
import { Badge } from "../components/ui/Badge";
import { CodeBlock } from "../components/ui/CodeBlock";
import { ApiCard } from "../components/ui/ApiCard";
import {
  ServerIcon,
  CpuIcon,
  ShieldIcon,
  ClockIcon,
  TerminalIcon,
  CheckCircleIcon,
  ActivityIcon,
  ArrowRightIcon,
} from "../components/ui/Icons";

const BACKEND_NAV_SECTIONS: NavSection[] = [
  {
    title: "Architecture",
    items: [
      { title: "Unified Monolith Overview", href: "/backend#architecture", badge: "Django 6.1" },
      { title: "Base URLs & Timezones (IST)", href: "/backend#base-urls" },
      { title: "Directory Structure", href: "/backend#directory" },
    ],
  },
  {
    title: "API Catalog & Explorer",
    items: [
      { title: "Endpoints Reference Table", href: "/backend#endpoints-table" },
      { title: "Feasible Windows (CP-SAT)", href: "/backend#feasible-windows", badge: "AI" },
      { title: "AI Slot Recommendation", href: "/backend#recommendation-api", badge: "AI" },
      { title: "Direct Task Window Update", href: "/backend#by-task-api" },
      { title: "Conflict Detection API", href: "/backend#conflict-api" },
      { title: "Live Operations Aggregate", href: "/backend#operations-api" },
    ],
  },
  {
    title: "Background Services & Tests",
    items: [
      { title: "Auto-DELAYED Task Lifecycle", href: "/backend#overdue-lifecycle" },
      { title: "Celery Sync & RailKit Quota", href: "/backend#celery-quota" },
      { title: "Bruno 35-Request Test Suite", href: "/backend#testing" },
      { title: "Render Cloud Deployment", href: "/backend#deployment" },
    ],
  },
];

const BACKEND_TOC = [
  { id: "architecture", label: "Unified Monolith Architecture" },
  { id: "base-urls", label: "Base URLs & IST Standards" },
  { id: "endpoints-table", label: "REST Endpoints Directory" },
  { id: "feasible-windows", label: "Feasible Windows (CP-SAT)" },
  { id: "recommendation-api", label: "AI Window Recommendation" },
  { id: "by-task-api", label: "Task-Based Window Update" },
  { id: "conflict-api", label: "Conflict Check Engine" },
  { id: "operations-api", label: "Live Operations Aggregator" },
  { id: "overdue-lifecycle", label: "Auto-Overdue DELAYED Sync" },
  { id: "celery-quota", label: "Celery & RailKit Quota Guards" },
  { id: "testing", label: "Automated Testing & Bruno" },
  { id: "deployment", label: "Render & Docker Deployment" },
];

export default function BackendDocsPage() {
  return (
    <DocsLayout
      title="Unified Backend & Intelligence Engine"
      subtitle="Enterprise-grade Django 6.1+ REST framework monolith with in-memory Google OR-Tools CP-SAT solver, Calibrated XGBoost failure risk scoring, PostgreSQL 16, and Celery 5.6+ task queue."
      badge="Django 6.1 + DRF"
      sections={BACKEND_NAV_SECTIONS}
      toc={BACKEND_TOC}
    >
      {/* Architecture Overview */}
      <section id="architecture" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-300">
            <ServerIcon size={20} />
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary">
            Unified Monolith Architecture
          </h2>
        </div>
        <p className="text-sm text-brand-secondary/90 leading-relaxed mb-4">
          Rather than distributing business logic and AI solvers across fragmented microservices that introduce serialization overhead and container failures, the backend is architected as a <strong>unified, high-performance monolith</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1">
              Web & API Framework
            </h4>
            <p className="text-brand-muted">
              <strong>Django 6.1+ & Django REST Framework (DRF)</strong>. Standardized viewsets, routers, paginated serializations, and built-in interactive browsable API.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1">
              Embedded In-Memory AI Solvers (0ms Latency)
            </h4>
            <p className="text-brand-muted">
              <strong>Google OR-Tools CP-SAT discrete solver</strong> and <strong>Calibrated XGBoost models</strong> run directly within the Django worker memory, achieving sub-second optimization (~0.1s) without microservice roundtrips.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1">
              Relational Persistence & Zero-Config Fallback
            </h4>
            <p className="text-brand-muted">
              <strong>PostgreSQL 16</strong> in production (Supabase / Managed PaaS) via <code className="font-mono text-brand-primary">psycopg3</code>, with zero-config local <strong>SQLite</strong> development fallback.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1">
              Asynchronous Workers & Telemetry Bridge
            </h4>
            <p className="text-brand-muted">
              <strong>Celery 5.6+ & Redis</strong> coordinate timetable synchronization at 02:00 AM IST and fetch live train movements from the <strong>RailKit API</strong> with strict quota protections.
            </p>
          </div>
        </div>
      </section>

      {/* Base URLs & Timezones */}
      <section id="base-urls" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-3">
          Base URLs & IST Timezone Standards
        </h2>

        <div className="space-y-3 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-brand-border bg-white gap-2 text-xs">
            <div className="flex items-center gap-2">
              <Badge variant="get" size="sm">GET</Badge>
              <span className="font-mono font-bold text-brand-secondary">http://127.0.0.1:8000/railways/</span>
            </div>
            <span className="text-brand-muted">Interactive DRF Browsable API Root</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-brand-border bg-white gap-2 text-xs">
            <div className="flex items-center gap-2">
              <Badge variant="get" size="sm">GET</Badge>
              <span className="font-mono font-bold text-brand-secondary">http://127.0.0.1:8000/admin/</span>
            </div>
            <span className="text-brand-muted">Django Administration Panel & Data Editor</span>
          </div>
        </div>

        <div className="rounded-xl border border-brand-border bg-amber-50/70 p-4 text-xs sm:text-sm text-amber-900">
          <h4 className="font-bold mb-1 flex items-center gap-1.5">
            <ClockIcon size={16} className="text-amber-700" />
            Timezone Standard: Indian Standard Time (IST - Asia/Kolkata)
          </h4>
          <p className="leading-relaxed">
            All API inputs, outputs, and Celery cron evaluations operate on formatted IST: <code className="font-mono font-semibold bg-white/80 px-1 py-0.5 rounded">YYYY-MM-DD HH:MM:SS</code>. While datetimes are stored in UTC in PostgreSQL, serializers convert them dynamically via <code className="font-mono font-semibold">timezone.localtime()</code> to eliminate date drift between maintenance queue rows and block window recommendations.
          </p>
        </div>
      </section>

      {/* Directory Structure */}
      <section id="directory" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-2">
          Backend Repository Layout
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4">
          Structured into clean Django domain apps and embedded AI modules:
        </p>
        <CodeBlock
          code={`backend/
├── apps/                              # 🚆 Django Business Logic Applications
│   ├── corridors/                     # Railway corridor sections and station codes
│   ├── assets/                        # Track, OHE, traction, and signaling assets
│   ├── maintenance/                   # Defect logs, severity ratings, deadlines & overdue automation
│   ├── trains/                        # Timetables, live train movements & Celery tasks
│   └── blocks/                        # Maintenance windows & in-memory AI constraint solver bridge
│       ├── ai_client.py               # In-memory bridge to RailwayMLEngine (0ms latency)
│       ├── services.py                # Conflict detection & CP-SAT feasible window calculations
│       ├── views.py                   # BlockWindowViewSet (check-conflict, feasible-windows)
│       └── serializers.py             # Serializers with decision_score & algorithm fields
├── src/                               # 🧠 Embedded Railway AI/ML Intelligence Engine
│   ├── decision/                      # Multi-factor maintenance decision & urgency scoring
│   ├── optimization/                  # Google OR-Tools CP-SAT discrete constraint optimizer
│   ├── models/                        # ML failure predictors (calibrated XGBoost, Cox survival)
│   └── features/                      # Operational telemetry & section delay pressure builders
├── models/                            # 📦 11 Serialized AI/ML Pre-Trained Artifacts (.pkl, .pt)
├── bruno/                             # 🚀 35-Request Automated API Test Collection
├── config/                            # ⚙️ Django settings, URLs, Celery instantiation
└── requirements.txt                   # Production dependencies (Django + OR-Tools + ML)`}
          language="text"
          title="Backend Directory Architecture"
        />
      </section>

      {/* Complete Endpoints Table */}
      <section id="endpoints-table" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary">
            REST API Endpoints Reference
          </h2>
          <Badge variant="surface" size="md">
            15+ REST Endpoints
          </Badge>
        </div>

        <div className="overflow-x-auto rounded-xl border border-brand-border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-brand-border bg-brand-tertiary/60 text-xs font-bold text-brand-secondary">
                <th className="py-2.5 px-3">Domain</th>
                <th className="py-2.5 px-3">Method</th>
                <th className="py-2.5 px-3">Endpoint Path</th>
                <th className="py-2.5 px-3">Operational Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-xs">
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Corridors</td>
                <td className="py-2.5 px-3"><Badge variant="get" size="sm">GET</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">/railways/sections/</td>
                <td className="py-2.5 px-3 text-brand-muted">List all corridor track sections with source/destination station codes</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Assets</td>
                <td className="py-2.5 px-3"><Badge variant="get" size="sm">GET</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">/railways/assets/</td>
                <td className="py-2.5 px-3 text-brand-muted">List infrastructure assets (Engineering, SNT, Traction) with criticality ratings</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Maintenance</td>
                <td className="py-2.5 px-3"><Badge variant="get" size="sm">GET</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">/railways/maintenance-tasks/</td>
                <td className="py-2.5 px-3 text-brand-muted">List maintenance tasks with auto-overdue sync to DELAYED status</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Trains</td>
                <td className="py-2.5 px-3"><Badge variant="get" size="sm">GET</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">/railways/trains/</td>
                <td className="py-2.5 px-3 text-brand-muted">List all trains synchronized via RailKit timetable sync</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Live Operations</td>
                <td className="py-2.5 px-3"><Badge variant="get" size="sm">GET</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">/railways/trains/operations/</td>
                <td className="py-2.5 px-3 text-brand-muted">Combined live tracking view for up to 30 trains with calculated entry/exit delay</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Schedules</td>
                <td className="py-2.5 px-3"><Badge variant="get" size="sm">GET</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">/railways/train-schedules/</td>
                <td className="py-2.5 px-3 text-brand-muted">Weekly timetables with 7-day running bitmask filter (?date=YYYY-MM-DD)</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Block Windows</td>
                <td className="py-2.5 px-3"><Badge variant="get" size="sm">GET</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">/railways/block-windows/</td>
                <td className="py-2.5 px-3 text-brand-muted">List all reserved, available, or blocked corridor windows</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Feasible Windows</td>
                <td className="py-2.5 px-3"><Badge variant="post" size="sm">POST</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">/railways/block-windows/feasible-windows/</td>
                <td className="py-2.5 px-3 text-brand-muted">Runs in-memory OR-Tools CP-SAT solver to compute safe block windows</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">AI Recommendation</td>
                <td className="py-2.5 px-3"><Badge variant="get" size="sm">GET</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">/railways/block-windows/&#123;id&#125;/recommendation/</td>
                <td className="py-2.5 px-3 text-brand-muted">Evaluates conflict count and recommends best alternative slot with suggested payload</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Auto-Apply Slot</td>
                <td className="py-2.5 px-3"><Badge variant="post" size="sm">POST</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">/railways/block-windows/&#123;id&#125;/apply-recommendation/</td>
                <td className="py-2.5 px-3 text-brand-muted">1-Click action to automatically update block window to AI-recommended slot</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">By Task Window</td>
                <td className="py-2.5 px-3"><Badge variant="put" size="sm">PUT</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">/railways/block-windows/by-task/&#123;task_id&#125;/</td>
                <td className="py-2.5 px-3 text-brand-muted">Update or reserve block window directly by human-readable task code (e.g. TMS-746)</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Conflict Check</td>
                <td className="py-2.5 px-3"><Badge variant="post" size="sm">POST</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">/railways/block-windows/check-conflict/</td>
                <td className="py-2.5 px-3 text-brand-muted">Detect train movement collisions during proposed maintenance interval</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive API Explorer Cards */}
      <section id="feasible-windows" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary">
          Deep-Dive API Payloads & Responses
        </h2>

        {/* Card 1: Feasible Windows CP-SAT */}
        <ApiCard
          method="POST"
          endpoint="/railways/block-windows/feasible-windows/"
          title="Compute Feasible Maintenance Windows (In-Memory CP-SAT)"
          description="Submits a maintenance task code and target date. Dynamically builds a 24-hour virtual planning horizon for the task's corridor section and executes the Google OR-Tools CP-SAT discrete solver to find conflict-free intervals."
          tags={["AI", "OR-Tools CP-SAT", "0ms Latency"]}
          requestPayload={`{
  "task_id": "TASK-OHE-101",
  "date": "2026-09-04"
}`}
          responsePayload={`{
  "task_id": "TASK-OHE-101",
  "date": "2026-09-04",
  "section": {
    "id": 1,
    "name": "New Delhi - Mathura Junction",
    "source": "New Delhi",
    "source_code": "NDLS",
    "destination": "Mathura Junction",
    "destination_code": "MTJ"
  },
  "required_duration_minutes": 120,
  "feasible": true,
  "windows": [
    {
      "start": "2026-09-04 04:00:00",
      "end": "2026-09-04 06:00:00",
      "duration_minutes": 120,
      "decision_score": 0.85,
      "algorithm": "CP-SAT Constraint Solver"
    }
  ]
}`}
        />

        {/* Card 2: AI Recommendation & Slot Rescheduling */}
        <div id="recommendation-api">
          <ApiCard
            method="GET"
            endpoint="/railways/block-windows/{id}/recommendation/"
            title="Dynamic AI Recommendation & Conflict Resolution"
            description="Evaluates an existing block window against live and scheduled train movements. If a conflict or suboptimal delay risk is detected, returns an alternative 100% collision-free slot with an auto-generated suggested PUT payload."
            queryParams={[
              { name: "task_id", type: "string", required: true, description: "Maintenance task code (e.g. TMS-696)" }
            ]}
            tags={["AI Co-Pilot", "Dynamic Rescheduling"]}
            responsePayload={`{
  "block_window_id": 1,
  "task_id": "TMS-696",
  "section": {
    "id": 10,
    "name": "Surat-Mumbai",
    "source": "Surat",
    "source_code": "ST",
    "destination": "Mumbai",
    "destination_code": "MMCT"
  },
  "current_slot": {
    "start_time": "2026-09-04 13:00:00",
    "end_time": "2026-09-04 17:00:00",
    "duration_minutes": 240,
    "status": "RESERVED",
    "has_conflict": true,
    "conflict_count": 1,
    "conflicts": [
      {
        "train_number": "12002",
        "train_name": "New Delhi - Bhopal Shatabdi Express",
        "entry_time": "2026-09-04 14:00:00",
        "exit_time": "2026-09-04 14:35:00"
      }
    ]
  },
  "has_better_slot": true,
  "recommendation_reason": "Current window has 1 train conflict(s) with train(s) 12002. AI recommends shifting to 03:00:00 - 05:00:00 which is 100% collision-free with a decision score of 0.850.",
  "recommended_slot": {
    "start": "2026-09-04 03:00:00",
    "end": "2026-09-04 05:00:00",
    "duration_minutes": 120,
    "decision_score": 0.85,
    "algorithm": "CP-SAT Constraint Solver"
  },
  "suggested_put_payload": {
    "section": 10,
    "start_time": "2026-09-04 03:00:00",
    "end_time": "2026-09-04 05:00:00",
    "status": "RESERVED"
  },
  "put_url": "/railways/block-windows/1/"
}`}
          />
        </div>

        {/* Card 3: 1-Click Auto Apply */}
        <div id="apply-recommendation">
          <ApiCard
            method="POST"
            endpoint="/railways/block-windows/{id}/apply-recommendation/"
            title="1-Click Auto-Apply AI Recommendation"
            description="Applies the AI-recommended conflict-free slot directly to the block window database record in a single atomic transaction. Automatically updates the linked maintenance task to SCHEDULED."
            tags={["1-Click Action", "Atomic Update"]}
            responsePayload={`{
  "success": true,
  "message": "Block window updated to AI recommended slot successfully",
  "block_window": {
    "id": 1,
    "section": 10,
    "start_time": "2026-09-04 03:00:00",
    "end_time": "2026-09-04 05:00:00",
    "status": "RESERVED"
  }
}`}
          />
        </div>

        {/* Card 4: By Task Window Update */}
        <div id="by-task-api">
          <ApiCard
            method="PUT"
            endpoint="/railways/block-windows/by-task/{task_id}/"
            title="Direct Task-Based Window Update (/by-task/)"
            description="Allows frontend or external systems to reserve or update block windows directly by the task's human-readable identifier (such as TASK-OHE-101 or TMS-746) without needing to query internal numeric IDs."
            tags={["Developer Friendly", "Task Linked"]}
            requestPayload={`{
  "section": 1,
  "start_time": "2026-09-04 03:00:00",
  "end_time": "2026-09-04 05:00:00",
  "status": "RESERVED"
}`}
            responsePayload={`{
  "id": 14,
  "section": 1,
  "task": 6,
  "task_id": "TASK-OHE-101",
  "start_time": "2026-09-04 03:00:00",
  "end_time": "2026-09-04 05:00:00",
  "status": "RESERVED"
}`}
          />
        </div>

        {/* Card 5: Conflict Check */}
        <div id="conflict-api">
          <ApiCard
            method="POST"
            endpoint="/railways/block-windows/check-conflict/"
            title="Corridor Conflict Detection Engine"
            description="Inspects all scheduled and live trains on a corridor section during a proposed time range. Returns collision status and lists overlapping trains with exact entry/exit timestamps."
            tags={["Safety", "Collision Check"]}
            requestPayload={`{
  "section": 1,
  "maintenance_start": "2026-09-04 13:00:00",
  "maintenance_end": "2026-09-04 17:00:00"
}`}
            responsePayload={`{
  "has_conflict": true,
  "conflict_count": 1,
  "conflicts": [
    {
      "train_number": "12002",
      "train_name": "New Delhi - Bhopal Shatabdi Express",
      "entry_time": "2026-09-04 14:00:00",
      "exit_time": "2026-09-04 14:35:00"
    }
  ]
}`}
          />
        </div>

        {/* Card 6: Live Operations */}
        <div id="operations-api">
          <ApiCard
            method="GET"
            endpoint="/railways/trains/operations/"
            title="Live Operations Dashboard Aggregator"
            description="Aggregates master train records, scheduled timetables, and actual live movement tracking for up to 30 operating trains along a corridor section with calculated delay minutes."
            queryParams={[
              { name: "date", type: "string", required: true, description: "Service date YYYY-MM-DD" },
              { name: "source", type: "string", required: true, description: "Origin station code (e.g. NDLS)" },
              { name: "destination", type: "string", required: true, description: "Destination station code (e.g. GZB)" }
            ]}
            tags={["Live Telemetry", "RailKit Bridge"]}
            responsePayload={`{
  "date": "2026-09-04",
  "source": "NDLS",
  "destination": "GZB",
  "count": 1,
  "trains": [
    {
      "train_number": "12004",
      "train_name": "Lucknow Shatabdi Express",
      "train_type": "SHATABDI",
      "priority": 9,
      "section": {
        "name": "New Delhi - Ghaziabad Main Section",
        "source": "New Delhi",
        "source_code": "NDLS",
        "destination": "Ghaziabad Junction",
        "destination_code": "GZB"
      },
      "schedule": {
        "entry_time": "06:10:00",
        "exit_time": "06:45:00"
      },
      "movement": {
        "actual_entry_time": "2026-09-04 06:15:00",
        "actual_exit_time": "2026-09-04 06:50:00"
      },
      "delay_minutes": 5
    }
  ]
}`}
          />
        </div>
      </section>

      {/* Auto-Overdue Lifecycle */}
      <section id="overdue-lifecycle" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-3">
          Multi-Tier Auto-Overdue DELAYED Transition
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4 leading-relaxed">
          Whenever a maintenance task's deadline passes (<code className="font-mono text-brand-primary">due_date &lt; today</code> in <code className="font-mono text-brand-primary">Asia/Kolkata</code>) without completion, the backend transitions its status to <code className="font-mono text-rose-600 font-bold">DELAYED</code> and sets <code className="font-mono text-rose-600 font-bold">is_overdue = True</code> across three redundant mechanisms:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <Badge variant="surface" size="sm" className="mb-2">1. Model-Level Hook</Badge>
            <p className="text-brand-muted">
              <code className="font-mono font-bold text-brand-secondary">MaintenanceTask.save()</code> evaluates deadlines before committing changes to PostgreSQL.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <Badge variant="surface" size="sm" className="mb-2">2. On-the-Fly API Sync</Badge>
            <p className="text-brand-muted">
              <code className="font-mono font-bold text-brand-secondary">MaintenanceTaskViewSet.get_queryset()</code> runs a bulk update on expired tasks upon every GET request.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <Badge variant="surface" size="sm" className="mb-2">3. Midnight Celery Beat</Badge>
            <p className="text-brand-muted">
              Scheduled at 00:00 IST daily to log and synchronize all expired tasks across all divisions.
            </p>
          </div>
        </div>
      </section>

      {/* Celery & RailKit Quota */}
      <section id="celery-quota" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary">
            <ShieldIcon size={20} />
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary">
            Celery Periodic Tasks & RailKit Quota Guards
          </h2>
        </div>

        <div className="space-y-3 mb-6 min-w-0">
          <div className="p-3 sm:p-3.5 rounded-xl border border-brand-border bg-white flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2 min-w-0">
            <div className="min-w-0">
              <span className="font-mono font-bold text-brand-secondary break-all text-[11px] sm:text-xs">
                apps.trains.tasks.sync_all_timetables
              </span>
              <p className="text-brand-muted mt-0.5 text-xs">Daily at 02:00 AM IST. Syncs full weekly timetables inside atomic transactions.</p>
            </div>
            <Badge variant="neutral" size="sm" className="self-start sm:self-auto shrink-0">Crontab(0, 2)</Badge>
          </div>

          <div className="p-3 sm:p-3.5 rounded-xl border border-brand-border bg-white flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2 min-w-0">
            <div className="min-w-0">
              <span className="font-mono font-bold text-brand-secondary break-all text-[11px] sm:text-xs">
                apps.trains.tasks.sync_relevant_live_trains
              </span>
              <p className="text-brand-muted mt-0.5 text-xs">Every 3 hours. Dispatches tracking tasks for up to 30 operating trains.</p>
            </div>
            <Badge variant="neutral" size="sm" className="self-start sm:self-auto shrink-0">Crontab(0, */3)</Badge>
          </div>
        </div>

        <div className="rounded-xl border border-brand-border bg-brand-tertiary/40 p-3.5 sm:p-4 text-xs sm:text-sm min-w-0">
          <h4 className="font-bold text-brand-secondary mb-2.5">
            🛡️ Strict Quota Protection Features
          </h4>
          <ul className="space-y-2.5 text-brand-muted text-xs sm:text-sm">
            <li className="flex items-start gap-2 min-w-0">
              <CheckCircleIcon size={15} className="text-brand-primary shrink-0 mt-0.5" />
              <div className="min-w-0 leading-relaxed">
                <strong className="text-brand-secondary">Hard Quota Cap (30 Trains / Cycle):</strong>{" "}
                <span>Prioritizes up to 10 premium services (Vande Bharat, Shatabdi, Rajdhani, Tejas).</span>
              </div>
            </li>
            <li className="flex items-start gap-2 min-w-0">
              <CheckCircleIcon size={15} className="text-brand-primary shrink-0 mt-0.5" />
              <div className="min-w-0 leading-relaxed">
                <strong className="text-brand-secondary">Rate Limiting (15/m):</strong>{" "}
                <span>Throttles live-tracking calls to 15 per minute, preventing RailKit HTTP 429 errors.</span>
              </div>
            </li>
            <li className="flex items-start gap-2 min-w-0">
              <CheckCircleIcon size={15} className="text-brand-primary shrink-0 mt-0.5" />
              <div className="min-w-0 leading-relaxed">
                <strong className="text-brand-secondary">Active-Day Bitmask Pre-Filter:</strong>{" "}
                <span>Checks train running masks before scheduling API queries.</span>
              </div>
            </li>
            <li className="flex items-start gap-2 min-w-0">
              <CheckCircleIcon size={15} className="text-brand-primary shrink-0 mt-0.5" />
              <div className="min-w-0 leading-relaxed">
                <strong className="text-brand-secondary">Graceful Skip Handling:</strong>{" "}
                <span>Caught RailKit 400 responses are marked as SKIPPED rather than triggering failing retries.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Bruno API Test Suite */}
      <section id="testing" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary">
            Automated Testing & Bruno API Collection
          </h2>
          <Badge variant="surface" size="md">
            35 Bruno Requests
          </Badge>
        </div>

        <p className="text-xs sm:text-sm text-brand-muted mb-4 leading-relaxed">
          The backend repository includes a git-friendly <strong>Bruno API Collection</strong> with 35 automated requests covering sections, assets, tasks, trains, block windows, and AI endpoints:
        </p>

        <CodeBlock
          code={`# Run in-memory embedded AI unit tests (CP-SAT + XGBoost)
python -m unittest tests/test_embedded_ai.py
# Output: Ran 4 tests in ~0.1s — OK

# Verify ML engine health
python -c "from src.services.ml_engine import RailwayMLEngine; print(RailwayMLEngine().health())"

# Execute Bruno API tests via CLI
bru run bruno/ --env Local`}
          language="bash"
          title="Automated Test Commands"
        />
      </section>

      {/* Render Cloud Deployment */}
      <section id="deployment" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-3">
          Production Cloud Deployment (Render / Docker)
        </h2>

        <p className="text-xs sm:text-sm text-brand-muted mb-4 leading-relaxed">
          Because the AI models run in-memory within the Django process, no separate AI container or microservice port is required.
        </p>

        <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40 text-xs sm:text-sm mb-4">
          <h4 className="font-bold text-brand-secondary mb-1">
            Memory Optimization for Free Tier (512 MB)
          </h4>
          <p className="text-brand-muted mb-2">
            Configure Gunicorn with <strong>2 workers and 2 threads</strong> to ensure the in-memory CP-SAT and XGBoost models never trigger Out-Of-Memory (OOM 137) errors:
          </p>
          <CodeBlock
            code={`gunicorn config.wsgi:application --workers 2 --threads 2 --bind 0.0.0.0:$PORT`}
            language="bash"
          />
        </div>

        <CodeBlock
          code={`# Required Environment Variables on Render (with Deployed Frontend CORS)
DEBUG=False
SECRET_KEY=generate-a-strong-random-secret-key
DATABASE_URL=postgresql://user:pass@host:5432/railway_db?sslmode=require
ALLOWED_HOSTS=*
CSRF_TRUSTED_ORIGINS=https://backend-oz3h.onrender.com,https://sanket.aryanshrivastava.dev
CORS_ALLOWED_ORIGINS=https://sanket.aryanshrivastava.dev,http://localhost:3000
ENABLE_LIVE_SYNC=False
RAILKIT_API_KEY=your_railkit_api_key`}
          language="env"
          title="Render Production .env"
        />
      </section>
    </DocsLayout>
  );
}
