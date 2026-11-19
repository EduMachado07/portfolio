import { useEffect, useRef } from "react";
import { scrollToSection } from "@/lib/use-active-section";

export interface INavSection {
  id: string;
  label: string;
}

export interface INavGroup {
  id: string;
  label: string;
  sections: INavSection[];
}

interface SectionNavProps {
  groups: INavGroup[];
  activeId: string;
}

const groupOf = (groups: INavGroup[], sectionId: string) =>
  groups.find((group) => group.sections.some((section) => section.id === sectionId)) ?? groups[0];

/** Sticky table of contents shown beside the content on large screens. */
export const SectionSidebar = ({ groups, activeId }: SectionNavProps) => {
  return (
    <nav aria-label="Sumário da página" className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto pb-6 lg:block">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">Nesta página</p>
      <ol className="flex flex-col gap-5 border-l border-zinc-200">
        {groups.map((group) => (
          <li key={group.id}>
            <p className="-ml-px border-l border-transparent pl-4 text-sm font-semibold text-zinc-950">
              {group.label}
            </p>
            <ol className="mt-1.5 flex flex-col">
              {group.sections.map((section) => {
                const isActive = section.id === activeId;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToSection(section.id);
                      }}
                      aria-current={isActive ? "location" : undefined}
                      className={`-ml-px block border-l-2 py-1 pl-4 text-sm transition-colors duration-300 ${
                        isActive
                          ? "border-zinc-950 font-medium text-zinc-950"
                          : "border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-900"
                      }`}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>
    </nav>
  );
};

/** Sticky row of chips, one per group, shown under the navbar on small screens. */
export const SectionChips = ({ groups, activeId }: SectionNavProps) => {
  const activeGroup = groupOf(groups, activeId);
  const rowRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const row = rowRef.current;
    const chip = chipRefs.current[activeGroup.id];
    if (!row || !chip) return;
    row.scrollTo({ left: chip.offsetLeft - row.clientWidth / 2 + chip.clientWidth / 2, behavior: "smooth" });
  }, [activeGroup.id]);

  return (
    <nav
      aria-label="Setores da página"
      className="sticky top-[57px] z-40 border-b border-zinc-200 bg-gray-100/90 backdrop-blur-md lg:hidden"
    >
      <div ref={rowRef} className="flex gap-2 overflow-x-auto px-[6%] py-2.5 [scrollbar-width:none]">
        {groups.map((group) => {
          const isActive = group.id === activeGroup.id;
          const firstSection = group.sections[0].id;
          return (
            <a
              key={group.id}
              ref={(el) => {
                chipRefs.current[group.id] = el;
              }}
              href={`#${firstSection}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(firstSection);
              }}
              aria-current={isActive ? "location" : undefined}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 ${
                isActive
                  ? "border-zinc-950 bg-zinc-950 text-white"
                  : "border-zinc-300 bg-white text-zinc-600 hover:text-zinc-950"
              }`}
            >
              {group.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
