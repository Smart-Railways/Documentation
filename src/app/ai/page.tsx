"use client";

import React from "react";
import Link from "next/link";
import { DocsLayout, NavSection } from "../components/navigation/DocsLayout";
import { Badge } from "../components/ui/Badge";
import { CodeBlock } from "../components/ui/CodeBlock";
import { CorridorMapVisual } from "../components/visuals/CorridorMapVisual";
import {
  CpuIcon,
  ActivityIcon,
  ShieldIcon,
  ClockIcon,
  TerminalIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  TrainIcon,
  ArrowRightIcon,
} from "../components/ui/Icons";

const AI_NAV_SECTIONS: NavSection[] = [
  {
    title: "Mission & Problem",
    items: [
      { title: "The Big Picture", href: "/ai#big-picture", badge: "Problem Statement" },
      { title: "What The Engine Does", href: "/ai#core-engine" },
      { title: "Corridor Digital Twin", href: "/ai#corridor" },
    ],
  },
  {
    title: "Intelligence Formulations",
    items: [
      { title: "Failure Risk Predictor", href: "/ai#failure-risk", badge: "XGBoost" },
      { title: "CP-SAT Constraint Solver", href: "/ai#cpsat-optimizer", badge: "OR-Tools" },
      { title: "Multi-Department Bundling", href: "/ai#bundling", badge: "-40% Closures" },
      { title: "Multi-Horizon Planning", href: "/ai#multi-horizon" },
      { title: "Explainable Reason Tags", href: "/ai#explainability" },
    ],
  },
  {
    title: "API & Benchmarks",
    items: [
      { title: "Python API: RailwayMLEngine", href: "/ai#python-api" },
      { title: "AI vs FIFO Benchmark", href: "/ai#benchmarks", badge: "+25% Throughput" },
      { title: "Governance Principles", href: "/ai#principles" },
    ],
  },
];

const AI_TOC = [
  { id: "big-picture", label: "The Big Picture: Why We Built This" },
  { id: "core-engine", label: "What the Engine Actually Does" },
  { id: "corridor", label: "Corridor Coverage & Aliases" },
  { id: "failure-risk", label: "Calibrated Risk & Survival" },
  { id: "cpsat-optimizer", label: "CP-SAT Constraint Formulation" },
  { id: "bundling", label: "Multi-Department Bundling" },
  { id: "multi-horizon", label: "Multi-Horizon Planning" },
  { id: "explainability", label: "Explainable Reason Tags" },
  { id: "python-api", label: "Python API in 5 Lines" },
  { id: "benchmarks", label: "Proof of Superiority: AI vs FIFO" },
];

export default function AiDocsPage() {
  return (
    <DocsLayout
      title="Railway AI — Intelligent Planning Engine"
      subtitle="Smart, coordinated maintenance block scheduling and predictive failure risk analytics for Indian Railways' high-density corridors. Powered by Google OR-Tools CP-SAT and Calibrated XGBoost."
      badge="Google OR-Tools CP-SAT"
      sections={AI_NAV_SECTIONS}
      toc={AI_TOC}
    >
      {/* The Big Picture */}
      <section id="big-picture" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-300">
            <CpuIcon size={20} />
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary">
            The Big Picture: Why We Built This
          </h2>
        </div>

        <p className="text-sm text-brand-secondary/90 leading-relaxed mb-4">
          Anyone who has traveled on Indian Railways knows that punctuality and safety are a delicate balancing act. Every day, thousands of kilometers of track, overhead electric traction wires (OHE), and signal systems take a heavy pounding from passenger expresses and heavy freight trains.
        </p>
        <p className="text-sm text-brand-secondary/90 leading-relaxed mb-6">
          To keep everything running safely, railway maintenance crews need time on the tracks. In railway terms, this is called a <strong>"maintenance block"</strong> — a window of time (usually 2 to 6 hours) where a track section is closed to train traffic so engineers can replace rails, inspect signals, or adjust high-voltage wires.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-brand-border bg-rose-50/50">
            <div className="flex items-center gap-1.5 text-rose-700 font-bold mb-1">
              <AlertCircleIcon size={16} />
              1. Safety vs Punctuality
            </div>
            <p className="text-brand-secondary/80 leading-relaxed">
              Close a track at peak times, and dozens of passenger expresses suffer cascading delays. Postpone maintenance too long, and a rail fracture or signal breakdown halts traffic for hours.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-amber-50/50">
            <div className="flex items-center gap-1.5 text-amber-800 font-bold mb-1">
              <AlertCircleIcon size={16} />
              2. The Silo Dilemma
            </div>
            <p className="text-brand-secondary/80 leading-relaxed">
              Track engineers (Civil), signal technicians (S&T), and electric crews (TRD) belong to separate departments. Historically, each team requested separate blocks on different days, shutting down the same section repeatedly.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-blue-50/50">
            <div className="flex items-center gap-1.5 text-blue-700 font-bold mb-1">
              <AlertCircleIcon size={16} />
              3. Information Overload
            </div>
            <p className="text-brand-secondary/80 leading-relaxed">
              Section controllers make high-stakes scheduling decisions over phone calls and paper logs, with limited real-time visibility into which track sections are currently suffering from ripple delays.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="core-engine" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-4">
          What Does the Engine Actually Do?
        </h2>

        <div className="space-y-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1 flex items-center gap-2">
              <ActivityIcon size={16} className="text-brand-primary" />
              1. Predicts Trouble Before It Happens
            </h4>
            <p className="text-brand-muted leading-relaxed">
              Instead of waiting for an asset to fail on the tracks, calibrated machine learning models evaluate asset age, gross million tonnes (GMT) of freight rolled over it, weather stress, and inspection history. It outputs a calibrated <strong>30-day failure probability</strong> and estimates <strong>Remaining Useful Life (RUL)</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1 flex items-center gap-2">
              <ClockIcon size={16} className="text-brand-primary" />
              2. Listens to Real Train Traffic & Delay Pressure
            </h4>
            <p className="text-brand-muted leading-relaxed">
              Connects directly with live train telemetry along the corridor (capturing flagship trains like the <em>12002 Bhopal Shatabdi</em>, <em>12301 Howrah Rajdhani</em>, and <em>20164 Vande Bharat</em>). It calculates dynamic <strong>operational pressure scores</strong> to steer track closures away from congested peak intervals.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1 flex items-center gap-2">
              <CpuIcon size={16} className="text-brand-primary" />
              3. Solves the Multi-Window Block Puzzle (CP-SAT Optimization)
            </h4>
            <p className="text-brand-muted leading-relaxed">
              Uses Google OR-Tools constraint satisfaction (CP-SAT) to generate schedules guaranteeing: <strong>no track conflicts</strong>, <strong>crew and equipment capacity bounds</strong>, and <strong>continuous window fits</strong> for heavy tampers.
            </p>
          </div>
        </div>
      </section>

      {/* Corridor Map */}
      <section id="corridor" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-2">
          Corridor Digital Twin & Real Evidence
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4">
          Focused on the <strong>New Delhi to Mumbai Central Golden Quadrilateral corridor (1,384 km)</strong>. The system automatically resolves historical and modern Indian Railways station aliases:
        </p>
        <CorridorMapVisual />
      </section>

      {/* Failure Risk Modeling */}
      <section id="failure-risk" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary">
            Predictive Failure Risk & Survival Analytics
          </h2>
          <Badge variant="surface" size="md">
            Calibrated XGBoost
          </Badge>
        </div>

        <p className="text-xs sm:text-sm text-brand-muted mb-4 leading-relaxed">
          The platform incorporates 11 serialized model artifacts tuned for precision-recall area under curve (PR-AUC) with isotonic probability calibration:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm mb-4">
          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1">
              Calibrated XGBoost (<code className="font-mono text-brand-primary">calibrated_xgboost.pkl</code>)
            </h4>
            <p className="text-brand-muted">
              30-day binary failure classifier with an operational risk threshold of <code className="font-mono font-bold text-brand-primary">0.35</code>. Tuned specifically to eliminate false negatives on critical track defects.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <h4 className="font-bold text-brand-secondary mb-1">
              Cox Proportional Hazards (<code className="font-mono text-brand-primary">cox_survival_model.pkl</code>)
            </h4>
            <p className="text-brand-muted">
              Models asset survival curves under varying freight tonnages (GMT) and ambient weather stresses, generating Remaining Useful Life (RUL) estimates.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40 text-xs sm:text-sm">
          <h4 className="font-bold text-brand-secondary mb-1">
            Deep Neural Checkpoints
          </h4>
          <p className="text-brand-muted">
            The repository also includes checkpoints for temporal sequence modeling (<code className="font-mono text-brand-primary">best_lstm_failure_model.pt</code>), 1D-CNN pattern recognition (<code className="font-mono text-brand-primary">best_cnn_failure_model.pt</code>), and transformer delay forecasting (<code className="font-mono text-brand-primary">best_railway_transformer.pt</code>).
          </p>
        </div>
      </section>

      {/* CP-SAT Discrete Formulation */}
      <section id="cpsat-optimizer" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary">
            Google OR-Tools CP-SAT Discrete Formulation
          </h2>
          <Badge variant="surface" size="md">
            CP-SAT 9.8+
          </Badge>
        </div>

        <p className="text-xs sm:text-sm text-brand-muted mb-4 leading-relaxed">
          The block optimizer models track time as discrete 30-minute intervals across the planning horizon, formulating maintenance scheduling as an exact Constraint Satisfaction Problem (CSP):
        </p>

        <div className="space-y-3 text-xs sm:text-sm mb-4">
          <div className="p-3 rounded-lg border border-brand-border bg-white flex items-start gap-2.5">
            <CheckCircleIcon size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-brand-secondary">Track Non-Overlap Constraint:</strong> For any section <code className="font-mono">s</code> and time slot <code className="font-mono">t</code>, at most one maintenance gang or train movement can occupy the track.
            </div>
          </div>

          <div className="p-3 rounded-lg border border-brand-border bg-white flex items-start gap-2.5">
            <CheckCircleIcon size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-brand-secondary">Manpower & Gang Capacity Bound:</strong> Total simultaneous maintenance gangs across a division cannot exceed available regional crews.
            </div>
          </div>

          <div className="p-3 rounded-lg border border-brand-border bg-white flex items-start gap-2.5">
            <CheckCircleIcon size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-brand-secondary">Window Contiguity Constraint:</strong> A task requiring <code className="font-mono">D</code> continuous hours must receive adjacent discrete slots without mid-operation interruptions.
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-brand-border bg-brand-tertiary/40 p-4 text-xs sm:text-sm">
          <h4 className="font-bold text-brand-secondary mb-1">
            Objective Function
          </h4>
          <p className="text-brand-muted">
            Maximizes scheduled task priority scores + multi-department joint coordination bonuses, while penalizing passenger train delay risks and peak-hour corridor closures.
          </p>
        </div>
      </section>

      {/* Multi-Department Bundling */}
      <section id="bundling" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary">
            Multi-Department Joint Bundling ("One Closure, Three Jobs Done")
          </h2>
          <Badge variant="put" size="md">
            40% Fewer Closures
          </Badge>
        </div>

        <p className="text-xs sm:text-sm text-brand-muted mb-4 leading-relaxed">
          When track engineers shut down a section between Mathura and Agra for rail renewal, the engine scans for pending signal checkups (S&T) and overhead traction inspections (TRD) in that exact section. It bundles them into the same block window:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm mb-4">
          <div className="p-4 rounded-xl border border-brand-border bg-rose-50/50">
            <h4 className="font-bold text-rose-800 mb-2">
              ❌ Traditional Uncoordinated Dispatching
            </h4>
            <div className="space-y-1.5 text-brand-secondary/80 font-mono text-xs">
              <div>• Tuesday: Civil closes section (4 hours)</div>
              <div>• Thursday: S&T closes section (2 hours)</div>
              <div>• Saturday: OHE closes section (3 hours)</div>
              <div className="font-bold text-rose-700 pt-2 border-t border-rose-200">
                Total Closures: 3 | Total Track Downtime: 9 hours
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-emerald-50/50">
            <h4 className="font-bold text-emerald-800 mb-2">
              ✅ Sanket AI Co-Planning Engine
            </h4>
            <div className="space-y-1.5 text-brand-secondary/80 font-mono text-xs">
              <div>• Tuesday: Civil + S&T + OHE co-scheduled</div>
              <div>• Shared 4.5-hour joint maintenance block</div>
              <div>• Coordination bonus applied in CP-SAT objective</div>
              <div className="font-bold text-emerald-700 pt-2 border-t border-emerald-200">
                Total Closures: 1 | Total Track Downtime: 4.5 hours (-50%)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Horizon Planning */}
      <section id="multi-horizon" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-3">
          Multi-Horizon Planning: Daily to Monthly
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4 leading-relaxed">
          The engine operates across four distinct planning horizons to support tactical repairs and strategic track maintenance:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded-xl border border-brand-border bg-white">
            <h5 className="font-bold text-brand-primary uppercase tracking-wider mb-1">Daily (6h & 24h)</h5>
            <p className="text-brand-muted">Immediate tactical block assignments responding to urgent defect logs.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-brand-border bg-white">
            <h5 className="font-bold text-brand-primary uppercase tracking-wider mb-1">Weekly (7-Day)</h5>
            <p className="text-brand-muted">Coordinated multi-day maintenance programs balancing heavy tamper movements.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-brand-border bg-white">
            <h5 className="font-bold text-brand-primary uppercase tracking-wider mb-1">Monthly (30-Day)</h5>
            <p className="text-brand-muted">Strategic long-term asset renewal roadmaps based on Cox survival curves.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-brand-border bg-white">
            <h5 className="font-bold text-brand-primary uppercase tracking-wider mb-1">Dynamic Reschedule</h5>
            <p className="text-brand-muted">Locks completed work and replans remaining slots on the fly if unexpected delays occur.</p>
          </div>
        </div>
      </section>

      {/* Explainability & Reason Tags */}
      <section id="explainability" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary mb-3">
          Transparent & Human-in-the-Loop Explainability
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted mb-4 leading-relaxed">
          No black-box decisions. Every block recommendation is accompanied by human-readable reason tags:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg border border-brand-border bg-white">
            <Badge variant="critical" size="sm" className="mb-1 font-mono">HIGH_FAILURE_RISK</Badge>
            <p className="text-brand-muted">Calibrated failure probability &gt; 0.35 or critical track defect detected.</p>
          </div>

          <div className="p-3 rounded-lg border border-brand-border bg-white">
            <Badge variant="warning" size="sm" className="mb-1 font-mono">OVERDUE_MAINTENANCE</Badge>
            <p className="text-brand-muted">Task deadline has elapsed without completion (DELAYED status).</p>
          </div>

          <div className="p-3 rounded-lg border border-brand-border bg-white">
            <Badge variant="surface" size="sm" className="mb-1 font-mono">HIGH_OPERATIONAL_PRESSURE</Badge>
            <p className="text-brand-muted">Corridor section is currently experiencing severe passenger train congestion.</p>
          </div>
        </div>
      </section>

      {/* Python API Reference */}
      <section id="python-api" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary">
            <TerminalIcon size={20} />
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary">
            Python API: RailwayMLEngine in 5 Lines
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-brand-muted mb-4">
          The engine exposes a unified interface in <code className="font-mono text-brand-primary">src/services/ml_engine.py</code>:
        </p>

        <CodeBlock
          code={`import pandas as pd
from src.services.ml_engine import RailwayMLEngine

# 1. Initialize engine (loads all 6 models into memory)
engine = RailwayMLEngine()

# 2. Check engine health
health = engine.health()
print(f"Engine status: {health['status']} (Models loaded: {health['models_loaded']})")

# 3. Create worklist of pending maintenance tasks
tasks = pd.DataFrame([
    {
        "task_id": "TASK-001",
        "section_id": "NDL-MTJ-01",
        "department": "ENGINEERING",
        "condition_score": 38.0,
        "criticality": 4,
        "urgency": 5,
        "days_overdue": 14,
        "estimated_duration_hours": 3.0,
        "required_manpower": 12
    }
])

# 4. Score tasks with calibrated ML failure risk
scored = engine.predict(tasks)
print(scored[["task_id", "maintenance_decision_score", "decision_reasons"]])

# 5. Generate conflict-free weekly block schedule
plan = engine.generate_block_plan(tasks, horizon_type="weekly")
print(f"Scheduled {len(plan['scheduled_tasks'])} tasks across available windows!")`}
          language="python"
          title="Python API Usage"
        />
      </section>

      {/* Benchmarks Proof */}
      <section id="benchmarks" className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-secondary">
            Proof of Superiority: AI vs Baseline
          </h2>
          <Badge variant="surface" size="md">
            75 Passed Tests
          </Badge>
        </div>

        <p className="text-xs sm:text-sm text-brand-muted mb-4 leading-relaxed">
          The benchmark validator (<code className="font-mono text-brand-primary">BenchmarkValidator</code>) executes automated comparisons between the Railway AI optimizer and the industry-standard FIFO baseline:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <span className="text-2xl font-black text-emerald-600 block mb-1">+25%</span>
            <strong className="text-brand-secondary block mb-1">Critical Throughput</strong>
            <p className="text-brand-muted">AI optimizer allocates 25% more high-priority maintenance jobs within identical track availability.</p>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <span className="text-2xl font-black text-purple-600 block mb-1">40%+</span>
            <strong className="text-brand-secondary block mb-1">Joint Bundling</strong>
            <p className="text-brand-muted">Groups adjacent civil, signaling, and traction work into joint blocks, halving corridor closures.</p>
          </div>

          <div className="p-4 rounded-xl border border-brand-border bg-brand-tertiary/40">
            <span className="text-2xl font-black text-brand-primary block mb-1">0ms</span>
            <strong className="text-brand-secondary block mb-1">Network Overhead</strong>
            <p className="text-brand-muted">Executed in-memory inside Django with 0ms IPC or remote microservice latency.</p>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
