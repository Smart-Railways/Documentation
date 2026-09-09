import React from "react";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "surface"
  | "outline"
  | "get"
  | "post"
  | "put"
  | "delete"
  | "patch"
  | "critical"
  | "high"
  | "medium"
  | "low"
  | "success"
  | "warning"
  | "neutral";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Badge({
  children,
  variant = "surface",
  size = "sm",
  className = "",
}: BadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs font-semibold rounded-md",
    md: "px-2.5 py-1 text-xs font-semibold rounded-md",
    lg: "px-3 py-1.5 text-sm font-semibold rounded-lg",
  }[size];

  const variantClasses: Record<BadgeVariant, string> = {
    primary: "bg-brand-primary text-white shadow-xs",
    secondary: "bg-brand-secondary text-brand-surface",
    surface: "bg-brand-blue-light text-brand-primary border border-brand-primary/20",
    outline: "border border-brand-border bg-brand-surface text-brand-secondary",
    get: "bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono",
    post: "bg-blue-100 text-blue-800 border border-blue-300 font-mono",
    put: "bg-amber-100 text-amber-900 border border-amber-300 font-mono",
    delete: "bg-rose-100 text-rose-800 border border-rose-300 font-mono",
    patch: "bg-purple-100 text-purple-800 border border-purple-300 font-mono",
    critical: "bg-rose-50 text-rose-700 border border-rose-200",
    high: "bg-amber-50 text-amber-800 border border-amber-200",
    medium: "bg-blue-50 text-blue-700 border border-blue-200",
    low: "bg-slate-100 text-slate-700 border border-slate-200",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    warning: "bg-amber-50 text-amber-800 border border-amber-200",
    neutral: "bg-stone-100 text-stone-700 border border-stone-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 tracking-tight transition-colors ${sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
