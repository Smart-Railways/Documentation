"use client";

import React, { useState } from "react";
import { CopyIcon, CheckIcon } from "./Icons";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = "bash",
  title,
  showLineNumbers = false,
  className = "",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code", err);
    }
  };

  const lines = code.trim().split("\n");

  return (
    <div
      className={`group my-4 rounded-xl border border-brand-border/80 bg-brand-secondary text-slate-100 overflow-hidden shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/30 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          {title ? (
            <span className="text-slate-200 font-medium">{title}</span>
          ) : (
            <span className="uppercase text-slate-400 font-semibold tracking-wider text-[11px]">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          type="button"
          aria-label="Copy code to clipboard"
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <CheckIcon size={14} className="text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon size={14} className="text-slate-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="overflow-x-auto p-4 font-mono text-[13.5px] leading-relaxed select-text">
        <pre className="text-slate-200">
          {showLineNumbers ? (
            <code>
              {lines.map((line, idx) => (
                <div key={idx} className="table-row">
                  <span className="table-cell pr-4 select-none text-slate-500 text-right w-8 text-xs">
                    {idx + 1}
                  </span>
                  <span className="table-cell">{line}</span>
                </div>
              ))}
            </code>
          ) : (
            <code>{code.trim()}</code>
          )}
        </pre>
      </div>
    </div>
  );
}
