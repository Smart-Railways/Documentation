"use client";

import React, { useState } from "react";
import { TrainIcon, ShieldIcon, ActivityIcon } from "../ui/Icons";
import { Badge } from "../ui/Badge";

interface StationNode {
  code: string;
  name: string;
  alias?: string;
  distanceKm: number;
  division: string;
  speedLimitKmph: number;
  tracks: string;
  highlight?: string;
}

const STATIONS: StationNode[] = [
  { code: "NDLS", name: "New Delhi", distanceKm: 0, division: "Northern Railway (NR)", speedLimitKmph: 130, tracks: "Double / Quadruple Electrified", highlight: "Origin & Traffic Hub" },
  { code: "MTJ", name: "Mathura Junction", distanceKm: 141, division: "North Central (NCR)", speedLimitKmph: 160, tracks: "Triple Track Automatic Block", highlight: "Gatimaan / Vande Bharat 160 km/h testing zone" },
  { code: "AGC", name: "Agra Cantt", distanceKm: 195, division: "North Central (NCR)", speedLimitKmph: 160, tracks: "Double Track Automatic Block", highlight: "Tourism & High-density Express node" },
  { code: "GWL", name: "Gwalior", distanceKm: 313, division: "North Central (NCR)", speedLimitKmph: 130, tracks: "Double Track Absolute / Auto Block", highlight: "Civil asset renewal priority" },
  { code: "VGLJ", name: "Virangana Lakshmibai Jhansi", alias: "JHS", distanceKm: 410, division: "North Central (NCR)", speedLimitKmph: 130, tracks: "Junction yard with heavy freight crossing", highlight: "Historically coded as JHS; automatic alias resolving" },
  { code: "BINA", name: "Bina Junction", distanceKm: 563, division: "West Central (WCR)", speedLimitKmph: 130, tracks: "Major coal/freight corridor bifurcation", highlight: "Heavy freight traction stress" },
  { code: "BPL", name: "Bhopal Junction", distanceKm: 702, division: "West Central (WCR)", speedLimitKmph: 130, tracks: "Double Track Electrified", highlight: "Bhopal Shatabdi & Vande Bharat terminus" },
  { code: "BRC", name: "Vadodara Junction", alias: "VAD", distanceKm: 992, division: "Western Railway (WR)", speedLimitKmph: 130, tracks: "Double Electrified Quadruple approaching yard", highlight: "Western artery merge point; formerly VAD" },
  { code: "ST", name: "Surat", alias: "SRT", distanceKm: 1122, division: "Western Railway (WR)", speedLimitKmph: 130, tracks: "Continuous heavy suburban & long-distance", highlight: "High operational delay pressure zone; formerly SRT" },
  { code: "MMCT", name: "Mumbai Central", alias: "MUM", distanceKm: 1384, division: "Western Railway (WR)", speedLimitKmph: 110, tracks: "Multi-track suburban & terminal corridor", highlight: "Southern terminal of Golden Quadrilateral; formerly MUM" },
];

export function CorridorMapVisual() {
  const [selectedStation, setSelectedStation] = useState<StationNode>(STATIONS[0]);
  const [viewMode, setViewMode] = useState<"track" | "grid">("track");

  return (
    <div className="rounded-2xl border border-brand-border bg-brand-surface p-4 sm:p-6 shadow-xs my-6 w-full max-w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-border/70 pb-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
              <TrainIcon size={18} />
            </span>
            <h3 className="text-base sm:text-lg font-bold text-brand-secondary">
              Corridor Digital Twin: New Delhi – Mumbai (1,384 km)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted mt-1">
            Golden Quadrilateral Route • 10 Critical Junctions with Real Telemetry & Station Aliasing
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          {/* View mode toggle */}
          <div className="flex rounded-lg border border-brand-border p-0.5 bg-brand-tertiary text-xs">
            <button
              onClick={() => setViewMode("track")}
              className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                viewMode === "track"
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-brand-secondary hover:text-brand-primary"
              }`}
            >
              Track Line
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-brand-primary text-white shadow-xs"
                  : "text-brand-secondary hover:text-brand-primary"
              }`}
            >
              Station Grid
            </button>
          </div>

          <Badge variant="surface" size="sm" className="hidden sm:inline-flex">
            100% Real Evidence
          </Badge>
        </div>
      </div>

      {/* Track Line View */}
      {viewMode === "track" && (
        <div className="relative">
          <div className="sm:hidden flex items-center justify-between text-[11px] text-brand-muted mb-2 font-medium">
            <span>Tap any station node to inspect</span>
            <span className="text-brand-primary font-bold">Swipe track ➔</span>
          </div>

          <div className="relative overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-2 scrollbar-thin">
            <div className="min-w-[700px] px-3">
              <div className="relative flex items-center justify-between">
                {/* Connecting Railway Track Line */}
                <div className="absolute left-3 right-3 top-4 h-1.5 bg-gradient-to-r from-brand-primary via-blue-500 to-indigo-600 rounded-full z-0 opacity-80" />
                
                {STATIONS.map((stn, idx) => {
                  const isSelected = selectedStation.code === stn.code;
                  return (
                    <button
                      key={stn.code}
                      onClick={() => setSelectedStation(stn)}
                      type="button"
                      className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                    >
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 ${
                          isSelected
                            ? "bg-brand-primary text-white scale-120 ring-4 ring-brand-blue-light shadow-md"
                            : "bg-white text-brand-secondary border-2 border-brand-border hover:border-brand-primary hover:scale-105"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <span
                        className={`mt-2 font-mono text-xs font-bold tracking-tight transition-colors ${
                          isSelected ? "text-brand-primary font-extrabold" : "text-brand-secondary group-hover:text-brand-primary"
                        }`}
                      >
                        {stn.code}
                      </span>
                      <span className="text-[10px] text-brand-muted font-medium">
                        {stn.distanceKm} km
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Station Grid View (Especially friendly on mobile!) */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-2">
          {STATIONS.map((stn, idx) => {
            const isSelected = selectedStation.code === stn.code;
            return (
              <button
                key={stn.code}
                onClick={() => setSelectedStation(stn)}
                type="button"
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "border-brand-primary bg-brand-blue-light/50 ring-2 ring-brand-primary/20"
                    : "border-brand-border bg-white hover:border-brand-primary/60"
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-mono font-bold text-xs text-brand-primary">
                    {stn.code}
                  </span>
                  <span className="text-[10px] font-mono text-brand-muted">
                    #{idx + 1}
                  </span>
                </div>
                <div className="text-xs font-semibold text-brand-secondary truncate">
                  {stn.name}
                </div>
                <div className="text-[10px] text-brand-muted mt-0.5">
                  {stn.distanceKm} km
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Selected Station Details Card */}
      <div className="mt-4 rounded-xl border border-brand-border/80 bg-brand-tertiary/60 p-3.5 sm:p-5 transition-all">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 sm:gap-4">
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-lg sm:text-xl font-extrabold text-brand-primary">
                [{selectedStation.code}]
              </span>
              <h4 className="text-base sm:text-lg font-bold text-brand-secondary">
                {selectedStation.name}
              </h4>
              {selectedStation.alias && (
                <Badge variant="warning" size="sm">
                  Alias: {selectedStation.alias} ➔ {selectedStation.code}
                </Badge>
              )}
            </div>
            <p className="text-[11px] sm:text-xs text-brand-muted font-medium">
              {selectedStation.division} • Cumulative Distance: <strong className="text-brand-secondary">{selectedStation.distanceKm} km</strong> from NDLS
            </p>
            <p className="text-xs sm:text-sm text-brand-secondary/90 leading-relaxed pt-1">
              {selectedStation.highlight}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 shrink-0 text-xs">
            <div className="rounded-lg bg-white p-2 sm:p-2.5 border border-brand-border/60">
              <span className="text-brand-muted block text-[10px] sm:text-[11px]">Permissible Speed</span>
              <span className="font-semibold text-brand-secondary text-xs sm:text-sm">
                {selectedStation.speedLimitKmph} km/h MPS
              </span>
            </div>
            <div className="rounded-lg bg-white p-2 sm:p-2.5 border border-brand-border/60">
              <span className="text-brand-muted block text-[10px] sm:text-[11px]">Track Infrastructure</span>
              <span className="font-semibold text-brand-secondary text-xs sm:text-sm line-clamp-1">
                {selectedStation.tracks}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
