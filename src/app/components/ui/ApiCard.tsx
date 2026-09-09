"use client";

import React, { useState } from "react";
import { Badge } from "./Badge";
import { CodeBlock } from "./CodeBlock";
import { CopyIcon, CheckIcon, ChevronDownIcon } from "./Icons";

interface ApiCardProps {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  endpoint: string;
  title: string;
  description: string;
  requestPayload?: string;
  responsePayload?: string;
  queryParams?: Array<{ name: string; type: string; required?: boolean; description: string }>;
  tags?: string[];
}

export function ApiCard({
  method,
  endpoint,
  title,
  description,
  requestPayload,
  responsePayload,
  queryParams,
  tags,
}: ApiCardProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getVariant = (m: string) => {
    switch (m) {
      case "GET":
        return "get";
      case "POST":
        return "post";
      case "PUT":
        return "put";
      case "PATCH":
        return "patch";
      case "DELETE":
        return "delete";
      default:
        return "surface";
    }
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(endpoint);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy endpoint", err);
    }
  };

  return (
    <div className="rounded-xl border border-brand-border bg-brand-surface shadow-xs transition-all duration-200 overflow-hidden my-4 hover:border-brand-primary/40">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 sm:p-5 flex flex-col gap-3 cursor-pointer hover:bg-black/[0.015] select-none"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 flex-wrap">
            <Badge variant={getVariant(method)} size="md">
              {method}
            </Badge>
            <span className="font-mono text-xs sm:text-sm md:text-base font-bold text-brand-secondary break-all">
              {endpoint}
            </span>
            <button
              onClick={handleCopy}
              type="button"
              aria-label="Copy endpoint URL"
              className="p-1 rounded text-brand-muted hover:text-brand-primary hover:bg-brand-blue-light transition-colors"
            >
              {copied ? (
                <CheckIcon size={14} className="text-emerald-600" />
              ) : (
                <CopyIcon size={14} />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold text-brand-muted bg-brand-tertiary px-2 py-0.5 rounded-full border border-brand-border"
              >
                {tag}
              </span>
            ))}
            <div className={`p-1 text-brand-muted transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
              <ChevronDownIcon size={18} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-brand-secondary text-base">{title}</h4>
          <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-brand-border bg-brand-tertiary/30 p-4 sm:p-5 space-y-4 text-xs sm:text-sm">
          {queryParams && queryParams.length > 0 && (
            <div>
              <h5 className="font-bold text-brand-secondary mb-2 uppercase text-[11px] tracking-wider">
                Query Parameters
              </h5>
              <div className="overflow-x-auto rounded-lg border border-brand-border bg-white">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-brand-border bg-brand-tertiary/60 text-[11px] font-semibold text-brand-secondary">
                      <th className="py-2 px-3">Parameter</th>
                      <th className="py-2 px-3">Type</th>
                      <th className="py-2 px-3">Required</th>
                      <th className="py-2 px-3">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border/60 text-xs">
                    {queryParams.map((param) => (
                      <tr key={param.name} className="hover:bg-brand-surface/80">
                        <td className="py-2 px-3 font-mono font-bold text-brand-primary">
                          {param.name}
                        </td>
                        <td className="py-2 px-3 font-mono text-brand-muted">
                          {param.type}
                        </td>
                        <td className="py-2 px-3">
                          {param.required ? (
                            <span className="text-rose-600 font-semibold">Yes</span>
                          ) : (
                            <span className="text-slate-400">Optional</span>
                          )}
                        </td>
                        <td className="py-2 px-3 text-brand-secondary">
                          {param.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {requestPayload && (
            <div>
              <h5 className="font-bold text-brand-secondary mb-1 uppercase text-[11px] tracking-wider">
                Sample Request Payload
              </h5>
              <CodeBlock code={requestPayload} language="json" />
            </div>
          )}

          {responsePayload && (
            <div>
              <h5 className="font-bold text-brand-secondary mb-1 uppercase text-[11px] tracking-wider">
                Sample 200 OK Response
              </h5>
              <CodeBlock code={responsePayload} language="json" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
