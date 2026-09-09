"use client";

import React, { useState } from "react";
import { DocsLayout, NavSection } from "../components/navigation/DocsLayout";
import { Badge } from "../components/ui/Badge";
import { CodeBlock } from "../components/ui/CodeBlock";
import { TrainIcon, SearchIcon, LayersIcon, ShieldIcon } from "../components/ui/Icons";

const ENUMS_NAV_SECTIONS: NavSection[] = [
  {
    title: "Domain Choices",
    items: [
      { title: "1. Asset Department", href: "/enums#department" },
      { title: "2. Asset Categories", href: "/enums#categories" },
      { title: "3. Maintenance Priority & Weights", href: "/enums#priority" },
      { title: "4. Maintenance Task Status", href: "/enums#task-status" },
      { title: "5. Block Window Status", href: "/enums#block-status" },
    ],
  },
  {
    title: "Operations & Enums",
    items: [
      { title: "6. AI Optimization Algorithms", href: "/enums#algorithms" },
      { title: "7. Maintenance Plan Status", href: "/enums#plan-status" },
      { title: "8. Train Types & Priorities", href: "/enums#train-types" },
      { title: "9. Running Days Bitmask", href: "/enums#running-days" },
      { title: "10. API Field Mappings", href: "/enums#field-mappings" },
    ],
  },
];

const ENUMS_TOC = [
  { id: "department", label: "1. Asset Department" },
  { id: "categories", label: "2. Asset Categories" },
  { id: "priority", label: "3. Task Priority Weights" },
  { id: "task-status", label: "4. Task Status Lifecycle" },
  { id: "block-status", label: "5. Block Window Status" },
  { id: "algorithms", label: "6. Optimization Algorithms" },
  { id: "plan-status", label: "7. Maintenance Plan Status" },
  { id: "train-types", label: "8. Train Types & Priorities" },
  { id: "running-days", label: "9. 7-Day Running Bitmask" },
  { id: "field-mappings", label: "10. Field Mappings & Aliases" },
];

export default function EnumsReferencePage() {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <DocsLayout
      title="Backend & Frontend Enums, Choices & Schema Reference"
      subtitle="Complete, unified dictionary of database text choices (models.TextChoices), TypeScript enums, scheduling weights, status lifecycles, and API serialization aliases."
      badge="Schema & Data Dictionary"
      sections={ENUMS_NAV_SECTIONS}
      toc={ENUMS_TOC}
    >
      {/* Search Filter Bar */}
      <div className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-5 shadow-xs flex items-center gap-3">
        <SearchIcon size={18} className="text-brand-muted shrink-0" />
        <input
          type="text"
          placeholder="Filter enums, fields, weights, or database choices..."
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          className="w-full bg-transparent text-brand-secondary placeholder-brand-muted text-sm focus:outline-none"
        />
        {searchFilter && (
          <button
            onClick={() => setSearchFilter("")}
            className="text-xs text-brand-muted hover:text-brand-secondary font-semibold"
          >
            Clear
          </button>
        )}
      </div>

      {/* 1. Asset Department */}
      <section id="department" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-2">
          1. Asset Department (Asset.Department / AssetDepartment)
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4">
          Backend model: <code className="font-mono text-brand-primary">apps.assets.models.Asset.department</code> (API alias: <code className="font-mono text-brand-primary">division</code>)
        </p>

        <div className="overflow-x-auto rounded-xl border border-brand-border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-brand-border bg-brand-tertiary/60 text-xs font-bold text-brand-secondary">
                <th className="py-2.5 px-3">Database Key</th>
                <th className="py-2.5 px-3">Display Label</th>
                <th className="py-2.5 px-3">Infrastructure Scope & Responsibility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-xs sm:text-sm">
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">ENGINEERING</td>
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Engineering</td>
                <td className="py-2.5 px-3 text-brand-muted">Track, rails, sleepers, ballast, civil structures, bridges</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">SNT</td>
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Signal & Telecom</td>
                <td className="py-2.5 px-3 text-brand-muted">Signaling equipment, electronic interlocking, points, telecommunications</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">TRACTION</td>
                <td className="py-2.5 px-3 font-semibold text-brand-secondary">Traction (TRD)</td>
                <td className="py-2.5 px-3 text-brand-muted">Overhead Electrification (OHE), power supply, substations, mast poles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Asset Categories */}
      <section id="categories" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-2">
          2. Asset Categories (AssetCategory)
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4">
          Backend field: <code className="font-mono text-brand-primary">apps.assets.models.Asset.asset_type</code> (API alias: <code className="font-mono text-brand-primary">category</code>)
        </p>

        <div className="overflow-x-auto rounded-xl border border-brand-border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-brand-border bg-brand-tertiary/60 text-xs font-bold text-brand-secondary">
                <th className="py-2.5 px-3">Category Choice Key</th>
                <th className="py-2.5 px-3">Display Label</th>
                <th className="py-2.5 px-3">Department</th>
                <th className="py-2.5 px-3">Typical Maintenance Window</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-xs">
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">TRACK_CIRCUIT</td>
                <td className="py-2.5 px-3 font-semibold">Track Circuit</td>
                <td className="py-2.5 px-3"><Badge variant="put" size="sm">SNT</Badge></td>
                <td className="py-2.5 px-3 text-brand-muted">30 - 60 mins</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">SIGNAL</td>
                <td className="py-2.5 px-3 font-semibold">Signal & Interlocking</td>
                <td className="py-2.5 px-3"><Badge variant="put" size="sm">SNT</Badge></td>
                <td className="py-2.5 px-3 text-brand-muted">45 - 90 mins</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">POINT_MACHINE</td>
                <td className="py-2.5 px-3 font-semibold">Point Machine / Switch</td>
                <td className="py-2.5 px-3"><Badge variant="put" size="sm">SNT</Badge></td>
                <td className="py-2.5 px-3 text-brand-muted">45 - 60 mins</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">OVERHEAD_EQUIPMENT</td>
                <td className="py-2.5 px-3 font-semibold">OHE / Traction Catenary</td>
                <td className="py-2.5 px-3"><Badge variant="patch" size="sm">TRACTION</Badge></td>
                <td className="py-2.5 px-3 text-brand-muted">60 - 180 mins</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">TRANSFORMER</td>
                <td className="py-2.5 px-3 font-semibold">Substation Transformer</td>
                <td className="py-2.5 px-3"><Badge variant="patch" size="sm">TRACTION</Badge></td>
                <td className="py-2.5 px-3 text-brand-muted">90 - 240 mins</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">TRACK_SEGMENT</td>
                <td className="py-2.5 px-3 font-semibold">Track Segment / Rail</td>
                <td className="py-2.5 px-3"><Badge variant="primary" size="sm">ENGINEERING</Badge></td>
                <td className="py-2.5 px-3 text-brand-muted">60 - 180 mins</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">AXLE_COUNTER</td>
                <td className="py-2.5 px-3 font-semibold">Axle Counter</td>
                <td className="py-2.5 px-3"><Badge variant="put" size="sm">SNT</Badge></td>
                <td className="py-2.5 px-3 text-brand-muted">30 - 45 mins</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">INTERLOCKING</td>
                <td className="py-2.5 px-3 font-semibold">Electronic Interlocking</td>
                <td className="py-2.5 px-3"><Badge variant="put" size="sm">SNT</Badge></td>
                <td className="py-2.5 px-3 text-brand-muted">60 - 120 mins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Maintenance Priority & Weights */}
      <section id="priority" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-2">
          3. Maintenance Task Urgency / Priority & Objective Weights
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4">
          Backend field: <code className="font-mono text-brand-primary">apps.maintenance.models.MaintenanceTask.priority</code> (API alias: <code className="font-mono text-brand-primary">urgency</code>)
        </p>

        <div className="overflow-x-auto rounded-xl border border-brand-border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-brand-border bg-brand-tertiary/60 text-xs font-bold text-brand-secondary">
                <th className="py-2.5 px-3">Choice Key</th>
                <th className="py-2.5 px-3">Display Label</th>
                <th className="py-2.5 px-3">CP-SAT Weight</th>
                <th className="py-2.5 px-3">Operational Severity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-xs sm:text-sm">
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-rose-700">CRITICAL</td>
                <td className="py-2.5 px-3"><Badge variant="critical" size="sm">Critical</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-rose-700">40.0</td>
                <td className="py-2.5 px-3 text-brand-secondary">Severe safety risk or immediate operational hazard; highest allocation priority</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-amber-800">HIGH</td>
                <td className="py-2.5 px-3"><Badge variant="high" size="sm">High</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-amber-800">30.0</td>
                <td className="py-2.5 px-3 text-brand-secondary">Significant wear or disruption risk; requires near-term maintenance block</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-blue-700">MEDIUM</td>
                <td className="py-2.5 px-3"><Badge variant="medium" size="sm">Medium</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-blue-700">20.0</td>
                <td className="py-2.5 px-3 text-brand-secondary">Standard routine inspection, preventive repair, or periodic check</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-slate-700">LOW</td>
                <td className="py-2.5 px-3"><Badge variant="low" size="sm">Low</Badge></td>
                <td className="py-2.5 px-3 font-mono font-bold text-slate-700">10.0</td>
                <td className="py-2.5 px-3 text-brand-secondary">Minor maintenance or non-critical cosmetic/support activity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Task Status Lifecycle */}
      <section id="task-status" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-2">
          4. Maintenance Task Status Lifecycle
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4">
          Backend field: <code className="font-mono text-brand-primary">apps.maintenance.models.MaintenanceTask.status</code> (API alias: <code className="font-mono text-brand-primary">task_status</code>)
        </p>

        <div className="overflow-x-auto rounded-xl border border-brand-border mb-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-brand-border bg-brand-tertiary/60 text-xs font-bold text-brand-secondary">
                <th className="py-2.5 px-3">Status Key</th>
                <th className="py-2.5 px-3">Display Badge</th>
                <th className="py-2.5 px-3">State Description & Automation Hook</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-xs sm:text-sm">
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold">PENDING</td>
                <td className="py-2.5 px-3"><Badge variant="surface" size="sm">Pending</Badge></td>
                <td className="py-2.5 px-3 text-brand-secondary">Initial state; task created, awaiting block window reservation</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold">SCHEDULED</td>
                <td className="py-2.5 px-3"><Badge variant="success" size="sm">Scheduled</Badge></td>
                <td className="py-2.5 px-3 text-brand-secondary">Block window reserved and linked to the task</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-rose-600">DELAYED</td>
                <td className="py-2.5 px-3"><Badge variant="critical" size="sm">Delayed (Overdue)</Badge></td>
                <td className="py-2.5 px-3 text-brand-secondary">
                  <strong>Automatic Overdue:</strong> Deadline elapsed without completion (<code className="font-mono font-bold text-rose-600">is_overdue=True</code>)
                </td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold">COMPLETED</td>
                <td className="py-2.5 px-3"><Badge variant="neutral" size="sm">Completed</Badge></td>
                <td className="py-2.5 px-3 text-brand-secondary">Maintenance work successfully executed on site</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold">CANCELLED</td>
                <td className="py-2.5 px-3"><Badge variant="neutral" size="sm">Cancelled</Badge></td>
                <td className="py-2.5 px-3 text-brand-secondary">Task dismissed or superseded</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Block Window Status */}
      <section id="block-status" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-2">
          5. Block Window Status (BlockWindow.Status)
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4">
          Backend field: <code className="font-mono text-brand-primary">apps.blocks.models.BlockWindow.status</code>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl border border-brand-border bg-white">
            <Badge variant="surface" size="sm" className="mb-2">AVAILABLE</Badge>
            <p className="text-brand-muted">Section window is open and available for maintenance scheduling.</p>
          </div>
          <div className="p-3.5 rounded-xl border border-brand-border bg-white">
            <Badge variant="warning" size="sm" className="mb-2">RESERVED</Badge>
            <p className="text-brand-muted">Corridor block is reserved for an approved maintenance task.</p>
          </div>
          <div className="p-3.5 rounded-xl border border-brand-border bg-white">
            <Badge variant="critical" size="sm" className="mb-2">BLOCKED</Badge>
            <p className="text-brand-muted">Track is actively blocked; maintenance crew on track.</p>
          </div>
        </div>
      </section>

      {/* 6. AI Algorithms */}
      <section id="algorithms" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-2">
          6. AI Optimization Algorithms (algorithm)
        </h2>
        <div className="overflow-x-auto rounded-xl border border-brand-border">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-brand-border bg-brand-tertiary/60 font-bold text-brand-secondary">
                <th className="py-2.5 px-3">Algorithm Key</th>
                <th className="py-2.5 px-3">Optimization Mechanism</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">CP-SAT Constraint Solver</td>
                <td className="py-2.5 px-3 text-brand-secondary">Google OR-Tools CP-SAT evaluating task priority, safety buffers, network delay impact, and train headway.</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">Database Timestamp Gap</td>
                <td className="py-2.5 px-3 text-brand-secondary">Deterministic fail-safe finding optimal collision-free intervals between live train movements.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. Train Types & Priorities */}
      <section id="train-types" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-2">
          8. Train Types & Priority Levels (Train.TrainType)
        </h2>
        <div className="overflow-x-auto rounded-xl border border-brand-border">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-brand-border bg-brand-tertiary/60 font-bold text-brand-secondary">
                <th className="py-2.5 px-3">Code Key</th>
                <th className="py-2.5 px-3">Category Name</th>
                <th className="py-2.5 px-3">Default Priority</th>
                <th className="py-2.5 px-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">VB</td>
                <td className="py-2.5 px-3 font-semibold">Vande Bharat</td>
                <td className="py-2.5 px-3 font-mono font-bold text-emerald-600">10</td>
                <td className="py-2.5 px-3 text-brand-muted">Semi-high speed premium train sets</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">SHATABDI</td>
                <td className="py-2.5 px-3 font-semibold">Shatabdi Express</td>
                <td className="py-2.5 px-3 font-mono font-bold text-emerald-600">10</td>
                <td className="py-2.5 px-3 text-brand-muted">Superfast day intercity services</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">RAJDHANI</td>
                <td className="py-2.5 px-3 font-semibold">Rajdhani Express</td>
                <td className="py-2.5 px-3 font-mono font-bold text-emerald-600">10</td>
                <td className="py-2.5 px-3 text-brand-muted">High-priority long-distance national capital express</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">EXPRESS</td>
                <td className="py-2.5 px-3 font-semibold">Express / Superfast</td>
                <td className="py-2.5 px-3 font-mono font-bold text-blue-600">8 (6–9)</td>
                <td className="py-2.5 px-3 text-brand-muted">Mail, Express, and Superfast long-distance passenger services</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">PASSENGER</td>
                <td className="py-2.5 px-3 font-semibold">Passenger / MEMU</td>
                <td className="py-2.5 px-3 font-mono font-bold text-slate-600">5</td>
                <td className="py-2.5 px-3 text-brand-muted">Ordinary passenger and local commuter shuttles</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono font-bold text-brand-primary">FREIGHT</td>
                <td className="py-2.5 px-3 font-semibold">Freight / Goods</td>
                <td className="py-2.5 px-3 font-mono font-bold text-slate-600">5</td>
                <td className="py-2.5 px-3 text-brand-muted">Heavy goods, coal, container, and auto rakes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. Running Days Bitmask */}
      <section id="running-days" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-2">
          9. 7-Day Running Days Bitmask Pattern (TrainSchedule.running_days)
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4">
          7-character binary regex <code className="font-mono text-brand-primary">^[01]&#123;7&#125;$</code> representing Monday through Sunday:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg border border-brand-border bg-white flex justify-between">
            <span>"1111111"</span>
            <span className="font-bold text-brand-primary">Daily (Mon–Sun)</span>
          </div>
          <div className="p-3 rounded-lg border border-brand-border bg-white flex justify-between">
            <span>"1111100"</span>
            <span className="font-bold text-brand-secondary">Weekdays (Mon–Fri)</span>
          </div>
          <div className="p-3 rounded-lg border border-brand-border bg-white flex justify-between">
            <span>"0000011"</span>
            <span className="font-bold text-brand-secondary">Weekends (Sat–Sun)</span>
          </div>
          <div className="p-3 rounded-lg border border-brand-border bg-white flex justify-between">
            <span>"1000000"</span>
            <span className="font-bold text-brand-muted">Mondays only</span>
          </div>
        </div>
      </section>

      {/* 10. Field Mappings */}
      <section id="field-mappings" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-2">
          10. API Field Mappings & Serialization Aliases
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4">
          Direct crosswalk between frontend JSON keys and Django ORM database model fields:
        </p>

        <div className="overflow-x-auto rounded-xl border border-brand-border">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-brand-border bg-brand-tertiary/60 font-bold text-brand-secondary">
                <th className="py-2.5 px-3">Resource</th>
                <th className="py-2.5 px-3">Frontend API Key</th>
                <th className="py-2.5 px-3">Backend Database Field</th>
                <th className="py-2.5 px-3">Notes & Format</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-bold">Asset</td>
                <td className="py-2.5 px-3 font-mono text-brand-primary">asset_title</td>
                <td className="py-2.5 px-3 font-mono">name</td>
                <td className="py-2.5 px-3 text-brand-muted">Asset descriptive title</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-bold">Asset</td>
                <td className="py-2.5 px-3 font-mono text-brand-primary">category</td>
                <td className="py-2.5 px-3 font-mono">asset_type</td>
                <td className="py-2.5 px-3 text-brand-muted">AssetCategory choice</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-bold">Asset</td>
                <td className="py-2.5 px-3 font-mono text-brand-primary">division</td>
                <td className="py-2.5 px-3 font-mono">department</td>
                <td className="py-2.5 px-3 text-brand-muted">ENGINEERING / SNT / TRACTION</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-bold">Asset</td>
                <td className="py-2.5 px-3 font-mono text-brand-primary">risk_level</td>
                <td className="py-2.5 px-3 font-mono">criticality</td>
                <td className="py-2.5 px-3 text-brand-muted">Integer rating (1–5)</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-bold">Task</td>
                <td className="py-2.5 px-3 font-mono text-brand-primary">task_code</td>
                <td className="py-2.5 px-3 font-mono">task_id</td>
                <td className="py-2.5 px-3 text-brand-muted">Unique code (e.g. TMS-746)</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-bold">Task</td>
                <td className="py-2.5 px-3 font-mono text-brand-primary">details</td>
                <td className="py-2.5 px-3 font-mono">description</td>
                <td className="py-2.5 px-3 text-brand-muted">Task description text</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-bold">Task</td>
                <td className="py-2.5 px-3 font-mono text-brand-primary">urgency</td>
                <td className="py-2.5 px-3 font-mono">priority</td>
                <td className="py-2.5 px-3 text-brand-muted">CRITICAL / HIGH / MEDIUM / LOW</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono text-brand-primary">Task</td>
                <td className="py-2.5 px-3 font-mono text-brand-primary">deadline</td>
                <td className="py-2.5 px-3 font-mono">due_date</td>
                <td className="py-2.5 px-3 text-brand-muted">Due date YYYY-MM-DD</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono text-brand-primary">Task</td>
                <td className="py-2.5 px-3 font-mono text-brand-primary">task_status</td>
                <td className="py-2.5 px-3 font-mono">status</td>
                <td className="py-2.5 px-3 text-brand-muted">PENDING / SCHEDULED / DELAYED / COMPLETED</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono text-brand-primary">Task</td>
                <td className="py-2.5 px-3 font-mono text-brand-primary">is_delayed</td>
                <td className="py-2.5 px-3 font-mono">is_overdue</td>
                <td className="py-2.5 px-3 text-brand-muted">True if past due date</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono text-brand-primary">Block</td>
                <td className="py-2.5 px-3 font-mono text-brand-primary">start_time</td>
                <td className="py-2.5 px-3 font-mono">start_time</td>
                <td className="py-2.5 px-3 text-brand-muted">YYYY-MM-DD HH:MM:SS (IST)</td>
              </tr>
              <tr className="hover:bg-brand-tertiary/30">
                <td className="py-2.5 px-3 font-mono text-brand-primary">Block</td>
                <td className="py-2.5 px-3 font-mono text-brand-primary">end_time</td>
                <td className="py-2.5 px-3 font-mono">end_time</td>
                <td className="py-2.5 px-3 text-brand-muted">YYYY-MM-DD HH:MM:SS (IST)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </DocsLayout>
  );
}
