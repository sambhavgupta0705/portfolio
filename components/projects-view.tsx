"use client";

import { useState } from "react";
import { ExtLink } from "@/components/ext-link";
import { categoryLabel, type Project, type ProjectCategory } from "@/content/projects";
import { links } from "@/content/links";

type Filter = "all" | ProjectCategory;

const tabs: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "opensource", label: "Open source" },
  { id: "personal", label: "Personal" },
];

export function ProjectsView({ projects, contributions }: { projects: Project[]; contributions: number }) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (index + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
    setFilter(tabs[next].id);
    (e.currentTarget.parentElement?.children[next] as HTMLElement | undefined)?.focus();
  }

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Filter projects">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={filter === t.id}
            aria-controls="project-list"
            tabIndex={filter === t.id ? 0 : -1}
            onClick={() => setFilter(t.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="pwrap" id="project-list" role="tabpanel" aria-labelledby={`tab-${filter}`}>
        <div className="lines">
          {shown.map((p) => (
            <ExtLink className="line" key={p.href} href={p.href}>
              <div>
                <div className="l-title">{p.title}</div>
                <div className="l-sub">{p.description}</div>
                <div className="l-meta">{[categoryLabel[p.category], ...(p.stack ?? [])].join(" · ")}</div>
              </div>
              <span className="l-side">GitHub ↗</span>
            </ExtLink>
          ))}
        </div>
        {filter === "all" && (
          <aside className="stat" aria-label="GitHub contributions">
            <div>
              <p className="s-label">GitHub contributions</p>
              <p className="s-num">{contributions.toLocaleString("en-US")}</p>
            </div>
            <div className="s-info">
              <p className="s-cap">across all years</p>
              <ExtLink className="s-link" href={links.github}>
                View profile ↗
              </ExtLink>
            </div>
          </aside>
        )}
      </div>
    </>
  );
}
