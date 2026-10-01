export type HistoryEntry = {
  /** e.g. "2023 — Present" or "2021" */
  period: string;
  title: string;
  org: string;
  description?: string;
};

/**
 * Your employment / education / career history.
 * Nothing is invented here — add your own entries, newest first, e.g.:
 *
 * {
 *   period: "2022 — 2025",
 *   title: "Digital Compositor",
 *   org: "Studio Name",
 *   description: "One or two lines about scope and responsibilities.",
 * },
 */
export const cvHistory: HistoryEntry[] = [];

export const cvSkills = [
  "Claude Code",
  "Cursor",
  "ChatGPT",
  "Gemini",
  "Unity / C#",
  "Flutter / Dart",
  "Next.js / TypeScript",
  "Git / GitHub",
];
