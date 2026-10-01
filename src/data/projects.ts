import type { SpecRow } from "@/data/types";

export type ProjectSize = "lg" | "md" | "sm";

export type ProjectScreenshot = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  approach: string;
  problem: string;
  year: string;
  role: string;
  stack: string[];
  status: string;
  mark?: string;
  heroImage?: ProjectScreenshot;
  screenshots?: ProjectScreenshot[];
  engineeringHighlights?: SpecRow[];
  apkUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
  size: ProjectSize;
};

/**
 * Add a new case study by appending an entry here — the Selected Work
 * grid, card sizing, and the /work/[slug] detail page all read from this
 * array. Leave apkUrl/githubUrl/externalUrl unset until there's a real,
 * verified link to put there.
 */
export const projects: Project[] = [
  {
    slug: "wayblock",
    name: "WayBlock",
    tagline: "Real-time 1v1 strategy, built on a tested rules engine",
    description:
      "Built around a platform-independent C# rules engine with property-based tests and a CI-enforced performance budget, plus a dedicated multiplayer match service — not just a Unity client with game logic bolted on.",
    approach:
      "The rules engine is a plain C# library with no Unity references, because game logic that depends on a game engine can't be unit-tested in milliseconds or reused by a separate server. Keeping board state, move validation, and win conditions strictly separate from Unity's presentation and networking layers meant that logic could be tested and benchmarked in CI on its own — independent of the client, and fast enough to run on every push.",
    problem:
      "A 1v1 abstract strategy duel — race your pawn across the board while placing walls to block your opponent, and relocate a wall once your reserve runs out.",
    year: "2026",
    role: "Product & Engineering",
    stack: [
      "Unity",
      "C#",
      "Netcode for GameObjects",
      "ASP.NET",
      "Claude Code",
    ],
    status: "In development · v0.1.0",
    mark: "/projects/wayblock-mark.png",
    size: "lg",
    heroImage: {
      src: "/projects/wayblock/01.jpg",
      width: 1080,
      height: 2412,
      alt: "WayBlock — main menu, v0.1.0",
    },
    screenshots: [
      {
        src: "/projects/wayblock/01.jpg",
        width: 1080,
        height: 2412,
        alt: "WayBlock — main menu, v0.1.0",
      },
      {
        src: "/projects/wayblock/02.jpg",
        width: 1080,
        height: 2412,
        alt: "WayBlock — Quick Start matchmaking",
      },
      {
        src: "/projects/wayblock/03.jpg",
        width: 1080,
        height: 2412,
        alt: "WayBlock — Create Lobby, rule configuration (board size, relocation source, vacated slot policy)",
      },
      {
        src: "/projects/wayblock/04.jpg",
        width: 1080,
        height: 2412,
        alt: "WayBlock — Join Lobby with a 6-digit code",
      },
      {
        src: "/projects/wayblock/06.jpg",
        width: 1080,
        height: 2412,
        alt: "WayBlock — Play vs Bot, difficulty select",
      },
      {
        src: "/projects/wayblock/07.jpg",
        width: 1080,
        height: 2412,
        alt: "WayBlock — a live match in progress",
      },
      {
        src: "/projects/wayblock/05.jpg",
        width: 1080,
        height: 2412,
        alt: "WayBlock — settings",
      },
    ],
    engineeringHighlights: [
      {
        label: "Rules Engine",
        value: "Platform-independent C# library (netstandard2.1), decoupled from Unity",
      },
      {
        label: "Algorithms",
        value: "Zobrist hashing for board state, path-oracle pathfinding for legal-move validation",
      },
      {
        label: "Testing",
        value: "Property-based test suite, plus a self-play bot harness for regression checks",
      },
      {
        label: "CI/CD",
        value: "GitHub Actions — Unity tests + core rules tests, with a CI-enforced performance budget",
      },
      {
        label: "Multiplayer",
        value: "Dedicated ASP.NET match service for lobbies, separate from the game client",
      },
    ],
    apkUrl: "",
  },
  {
    slug: "oddly-notes",
    name: "Oddly Notes",
    tagline: "Voice-first reflection journal with real multi-provider AI",
    description:
      "A Flutter app built on Clean Architecture, with a provider-agnostic AI router that calls Claude, OpenAI, or Gemini interchangeably behind one abstraction — plus consent-gated AI processing the user controls directly.",
    approach:
      "Claude, OpenAI, and Gemini are isolated behind a common provider interface rather than called directly from feature code. That separation exists so a provider outage, price change, or missing capability never requires touching the features that depend on AI — only the adapter that talks to that one provider. The same boundary is what makes consent enforceable in one place: cloud AI processing is off by default, and turning it off cuts the path to every provider at once, not just some of them.",
    problem:
      "A calm, voice-first journal that turns a raw spoken thought into a transcribed, AI-synthesized reflection — paired with the original, never replacing it.",
    year: "2026",
    role: "Product & Engineering",
    stack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Drift (SQLite)",
      "Claude / OpenAI / Gemini APIs",
      "Claude Code",
    ],
    status: "In development · v1.0.0",
    mark: "/projects/oddlynotes-mark.png",
    size: "md",
    heroImage: {
      src: "/projects/oddlynotes/01.jpg",
      width: 1080,
      height: 2412,
      alt: "Oddly Notes — home screen, ready to capture a voice note or text",
    },
    screenshots: [
      {
        src: "/projects/oddlynotes/01.jpg",
        width: 1080,
        height: 2412,
        alt: "Oddly Notes — home screen, capture a voice note or text",
      },
      {
        src: "/projects/oddlynotes/03.jpg",
        width: 1080,
        height: 2412,
        alt: "Oddly Notes — Insights, weekly reflection and topic detection",
      },
      {
        src: "/projects/oddlynotes/07.jpg",
        width: 1080,
        height: 2412,
        alt: "Oddly Notes — note editor with AI assist",
      },
      {
        src: "/projects/oddlynotes/06.jpg",
        width: 1080,
        height: 2412,
        alt: "Oddly Notes — Cloud AI processing consent control, off by default",
      },
      {
        src: "/projects/oddlynotes/08.jpg",
        width: 1080,
        height: 2412,
        alt: "Oddly Notes — honest fallback message when cloud AI is turned off",
      },
      {
        src: "/projects/oddlynotes/05.jpg",
        width: 1080,
        height: 2412,
        alt: "Oddly Notes — AI settings: external content and Smart Templates",
      },
      {
        src: "/projects/oddlynotes/02.jpg",
        width: 1080,
        height: 2412,
        alt: "Oddly Notes — Journal",
      },
      {
        src: "/projects/oddlynotes/04.jpg",
        width: 1080,
        height: 2412,
        alt: "Oddly Notes — Profile settings",
      },
      {
        src: "/projects/oddlynotes/09.jpg",
        width: 1080,
        height: 2412,
        alt: "Oddly Notes — search",
      },
    ],
    engineeringHighlights: [
      {
        label: "Architecture",
        value: "Flutter / Dart, Clean Architecture (ports-and-adapters), dependency injection",
      },
      {
        label: "State & Data",
        value: "Riverpod (code generation), Drift (SQLite) for local persistence",
      },
      {
        label: "AI Integration",
        value: "Multi-provider router — Claude, OpenAI, and Gemini behind one common abstraction",
      },
      {
        label: "AI Features",
        value: "Topic insight generation, dynamic question generation, note summarization",
      },
      {
        label: "AI Consent",
        value: "Cloud AI processing is off by default and user-controlled, with honest on-device fallback",
      },
    ],
    apkUrl: "",
  },
];
