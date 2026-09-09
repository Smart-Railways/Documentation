"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SearchIcon, CloseIcon, ArrowRightIcon, TrainIcon, ServerIcon, CpuIcon, LayersIcon } from "../ui/Icons";
import { Badge } from "../ui/Badge";

interface SearchItem {
  title: string;
  category: "Frontend" | "Backend" | "AI Engine" | "Enums" | "General";
  url: string;
  description: string;
  badge?: string;
}

const SEARCH_ITEMS: SearchItem[] = [
  // Live Production App
  { title: "Live Production Cockpit (sanket.aryanshrivastava.dev)", category: "General", url: "https://sanket.aryanshrivastava.dev/", description: "Deployed Next.js 16 Indian Railways Cockpit Web Application", badge: "Production" },

  // General & Overview
  { title: "Sanket System Overview", category: "General", url: "/#overview", description: "Smart Indian Railways Traffic & Automatic Block Planning System for SIH" },
  { title: "Digital Twin Corridor Map", category: "General", url: "/#corridor-map", description: "1,384 km New Delhi – Mumbai Central Golden Quadrilateral track alignment" },
  { title: "Quickstart Guide", category: "General", url: "/#quickstart", description: "Spin up Sanket Frontend, Django Backend, and Railway AI in under 5 minutes" },
  { title: "Proof of Superiority: AI vs Baseline", category: "General", url: "/#benchmarks", description: "+25% critical throughput, 40%+ block bundling vs FIFO dispatching" },

  // Frontend
  { title: "Frontend Architecture & Next.js 16", category: "Frontend", url: "/frontend#overview", description: "React 19, App Router, TanStack Query v5, and Leaflet GIS mapping engine" },
  { title: "Corridor GIS & Railway Map", category: "Frontend", url: "/frontend#gis-map", description: "Interactive Leaflet railway map with live train telemetry and route overlays" },
  { title: "Train Operations & Fleet Management", category: "Frontend", url: "/frontend#trains", description: "Multi-category fleet tracking: Vande Bharat, Rajdhani, Shatabdi, Express" },
  { title: "Infrastructure Asset Management", category: "Frontend", url: "/frontend#assets", description: "Track segments, OHE traction, and signaling asset lifecycle CRUD" },
  { title: "Maintenance & Block Planning Cockpit", category: "Frontend", url: "/frontend#maintenance", description: "Automated AI recommendation banners and 1-Click slot approval workflows" },
  { title: "Hydration Safety & Mobile Overlay", category: "Frontend", url: "/frontend#hydration", description: "Leaflet client skeletons, backdrop blur isolation, and drawer fixes" },

  // Backend
  { title: "Backend Unified Monolith Architecture", category: "Backend", url: "/backend#architecture", description: "Django 6.1+, DRF, PostgreSQL 16, and in-memory CP-SAT intelligence" },
  { title: "Base URLs & IST Timezone Standards", category: "Backend", url: "/backend#base-urls", description: "API root at /railways/, Django admin, and Asia/Kolkata timezone guarantee" },
  { title: "Corridor Sections API", category: "Backend", url: "/backend#sections-api", description: "GET / POST / PUT / DELETE /railways/sections/ with station code tracking" },
  { title: "Assets & Criticality API", category: "Backend", url: "/backend#assets-api", description: "/railways/assets/ with department categorizations and risk levels" },
  { title: "Maintenance Tasks & Auto-Overdue DELAYED", category: "Backend", url: "/backend#maintenance-api", description: "Three-tier overdue detection converting expired tasks to DELAYED" },
  { title: "Feasible Windows (CP-SAT Solver) API", category: "Backend", url: "/backend#feasible-windows", description: "POST /railways/block-windows/feasible-windows/ in-memory constraint solver" },
  { title: "Dynamic AI Recommendation & Slot Reschedule", category: "Backend", url: "/backend#window-recommendation", description: "GET /railways/block-windows/{id}/recommendation/ with suggested PUT payload" },
  { title: "1-Click Auto-Apply Recommendation", category: "Backend", url: "/backend#apply-recommendation", description: "POST /railways/block-windows/{id}/apply-recommendation/" },
  { title: "Direct Task-Based Window Update", category: "Backend", url: "/backend#by-task-api", description: "PUT /railways/block-windows/by-task/{task_id}/" },
  { title: "Conflict Check API", category: "Backend", url: "/backend#conflict-check", description: "POST /railways/block-windows/check-conflict/ detecting train collisions" },
  { title: "Live Operations Combined View", category: "Backend", url: "/backend#live-operations", description: "GET /railways/trains/operations/ combining schedules & actual movements" },
  { title: "Celery Sync & RailKit Quota Guards", category: "Backend", url: "/backend#celery-sync", description: "30-train cap, 15/m rate limit, and timetable synchronization at 02:00 IST" },
  { title: "Bruno 35-Request API Test Collection", category: "Backend", url: "/backend#bruno-tests", description: "Automated git-friendly REST API test suite across 7 functional domains" },
  { title: "Render & Docker Cloud Deployment", category: "Backend", url: "/backend#deployment", description: "Single-service deployment with 2 workers / 2 threads preventing OOM" },

  // AI Engine
  { title: "Railway AI Planning Engine", category: "AI Engine", url: "/ai#big-picture", description: "Solving the everyday dilemma between track safety and punctuality" },
  { title: "Calibrated XGBoost Failure Predictor", category: "AI Engine", url: "/ai#failure-predictor", description: "PR-AUC tuned 30-day failure probability, RUL, and Cox survival analysis" },
  { title: "OR-Tools CP-SAT Discrete Optimizer", category: "AI Engine", url: "/ai#cpsat-optimizer", description: "Discrete 30-minute interval block window scheduling with hard safety constraints" },
  { title: "Multi-Department Joint Bundling ('One Closure, Three Jobs')", category: "AI Engine", url: "/ai#bundling", description: "Proactive bundling cutting redundant track closures by up to 40%" },
  { title: "Multi-Horizon Planning: 6h to 30-Day", category: "AI Engine", url: "/ai#multi-horizon", description: "Immediate tactical, 7-day weekly, 30-day monthly & dynamic rescheduling" },
  { title: "Python API Reference: RailwayMLEngine", category: "AI Engine", url: "/ai#python-api", description: "5-line Python integration: health(), predict(), and generate_block_plan()" },
  { title: "Explainable Reason Tags & Controller Copilot", category: "AI Engine", url: "/ai#explainability", description: "Human-in-the-loop with HIGH_FAILURE_RISK and OPERATIONAL_PRESSURE tags" },

  // Enums
  { title: "Asset Department Choices", category: "Enums", url: "/enums#department", description: "ENGINEERING, SNT, TRACTION specifications and scopes" },
  { title: "Maintenance Task Urgency & Priority Weights", category: "Enums", url: "/enums#priority", description: "CRITICAL (40.0), HIGH (30.0), MEDIUM (20.0), LOW (10.0)" },
  { title: "Task Lifecycle Statuses", category: "Enums", url: "/enums#task-status", description: "PENDING, SCHEDULED, DELAYED (overdue), COMPLETED, CANCELLED" },
  { title: "Block Window Status", category: "Enums", url: "/enums#block-status", description: "AVAILABLE, RESERVED, BLOCKED definitions" },
  { title: "Train Types & Priority Levels", category: "Enums", url: "/enums#train-types", description: "VB (10), SHATABDI (10), RAJDHANI (10), EXPRESS (8), FREIGHT (5)" },
  { title: "7-Day Running Days Bitmask", category: "Enums", url: "/enums#running-days", description: "Regex ^[01]{7}$ pattern (1111111 daily, 1111100 weekdays, etc.)" },
  { title: "API Field Serialization Aliases", category: "Enums", url: "/enums#field-mappings", description: "Mapping frontend keys to backend database model fields" },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or state
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <LayersIcon size={16} className="text-brand-primary" />;
      case "Backend":
        return <ServerIcon size={16} className="text-emerald-600" />;
      case "AI Engine":
        return <CpuIcon size={16} className="text-purple-600" />;
      case "Enums":
        return <TrainIcon size={16} className="text-amber-600" />;
      default:
        return <TrainIcon size={16} className="text-brand-primary" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-2.5 sm:p-4 pt-10 sm:pt-20 bg-brand-secondary/60 backdrop-blur-xs animate-scale-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-brand-border bg-brand-surface shadow-2xl overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-brand-border bg-white">
          <SearchIcon size={20} className="text-brand-muted shrink-0" />
          <input
            type="text"
            placeholder="Search docs, APIs, endpoints, enums, models..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-brand-secondary placeholder-brand-muted text-base focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-brand-muted hover:text-brand-secondary hover:bg-brand-tertiary"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-brand-border/40 max-h-[60vh]">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-brand-muted">
              <p className="text-sm">No documentation results found for "{query}"</p>
              <p className="text-xs mt-1">Try searching for "CP-SAT", "endpoint", "overdue", or "XGBoost"</p>
            </div>
          ) : (
            filtered.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                onClick={onClose}
                className="flex items-start justify-between gap-3 p-3 rounded-xl hover:bg-brand-blue-light/40 transition-colors group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-white border border-brand-border/60 shrink-0 mt-0.5 group-hover:border-brand-primary/40">
                    {getCategoryIcon(item.category)}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-brand-secondary group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h4>
                      <Badge variant="neutral" size="sm">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-brand-muted mt-0.5 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <span className="text-brand-muted group-hover:text-brand-primary shrink-0 transition-transform group-hover:translate-x-0.5 self-center">
                  <ArrowRightIcon size={16} />
                </span>
              </Link>
            ))
          )}
        </div>

        {/* Search Modal Footer */}
        <div className="px-4 py-2.5 bg-brand-tertiary/60 border-t border-brand-border flex items-center justify-between text-[11px] text-brand-muted">
          <div className="flex items-center gap-3">
            <span>Navigation: <kbd className="px-1.5 py-0.5 rounded bg-white border border-brand-border font-mono font-semibold">ESC</kbd> to close</span>
          </div>
          <span className="font-semibold text-brand-primary">Sanket Docs v2026</span>
        </div>
      </div>
    </div>
  );
}
