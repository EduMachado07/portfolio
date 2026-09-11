import type { ReactNode } from "react";

interface GridBackgroundProps {
  children: ReactNode;
  cellWidth?: number;
  cellHeight?: number;
  style?: string;
}

export const GridBackground = ({
  children,
  cellWidth = 44,
  cellHeight = 44,
  style,
}: GridBackgroundProps) => {
  return (
    <div className="relative isolate">
      <div
        className={`pointer-events-none absolute inset-0 -z-10 ${style}`}
        style={{
          backgroundImage:
            "linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)",
          backgroundSize: `${cellWidth}px ${cellHeight}px`,
          // maskImage:
          //   "radial-gradient(ellipse 70% 70% at 50% 20%, black 40%, transparent 100%)",
          // WebkitMaskImage:
          //    "radial-gradient(ellipse 70% 70% at 50% 20%, black 40%, transparent 100%)",
        }}
      />
      {children}
    </div>
  );
};
