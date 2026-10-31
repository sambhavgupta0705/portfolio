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
      <div className="tabs up" style={{ ["--d" as string]: 3 }} role="tablist" aria-label="Filter projects">
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
      <div id="project-list" role="tabpanel" aria-labelledby={`tab-${filter}`}>
        <div className="rows">
          {shown.map((p, i) => (
            <ExtLink className="row" key={p.href} href={p.href} data-reveal style={{ ["--i" as string]: i }}>
              <div>
                <h2 className="r-title">{p.title}</h2>
                <div className="r-sub">{p.description}</div>
                <div className="r-meta">{[categoryLabel[p.category], ...(p.stack ?? [])].join(" · ")}</div>
              </div>
              <span className="r-side">{p.linkLabel ?? "GitHub"} ↗</span>
            </ExtLink>
          ))}
        </div>
        {filter === "all" && (
          <aside className="stat" aria-label="GitHub contributions" data-reveal>
            <b>{contributions.toLocaleString("en-US")}</b>
            <p>GitHub contributions across all years.</p>
            <ExtLink className="link" href={links.github}>
              View profile ↗
            </ExtLink>
          </aside>
        )}
      </div>
    </>
  );
}
