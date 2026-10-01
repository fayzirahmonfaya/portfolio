"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotionPref } from "@/lib/useReducedMotionPref";

/**
 * The site's one original 3D motif: a crisp, flat-shaded cube with a hard
 * specular highlight — deliberately not a glow/gradient orb. Reused as the
 * Ecosystem hub's visual anchor so that slot reads as intentional, not empty.
 */
export default function EngineeredObject({
  className,
  size = 140,
}: {
  className?: string;
  /** Size in px. Drives both the box dimensions and the 3D face geometry, so they can never fall out of sync. */
  size?: number;
}) {
  const reduced = useReducedMotionPref();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 16, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 40, damping: 16, mass: 0.6 });
  const tiltX = useTransform(sy, [-1, 1], [8, -8]);
  const tiltY = useTransform(sx, [-1, 1], [-10, 10]);

  useEffect(() => {
    if (reduced) return;
    function onMove(e: PointerEvent) {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduced]);

  const half = "calc(var(--cube) / 2)";

  return (
    <div
      className={cn("pointer-events-none", className)}
      style={{
        perspective: "1000px",
        width: size,
        height: size,
        ["--cube" as string]: `${size}px`,
      }}
      aria-hidden="true"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
      >
        <div
          className="relative h-full w-full"
          style={{ transform: "rotateX(-16deg) rotateY(32deg)", transformStyle: "preserve-3d" }}
        >
          <div
            className={cn(
              "relative h-full w-full",
              !reduced && "animate-[spin-y_28s_linear_infinite]"
            )}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* front face */}
            <div
              className="absolute inset-0"
              style={{ background: "#87878d", transform: `translateZ(${half})` }}
            >
              <span
                className="absolute inset-x-0 bottom-0 h-[3px]"
                style={{ background: "var(--color-acid)" }}
              />
            </div>

            {/* right face */}
            <div
              className="absolute inset-0"
              style={{ background: "#3c3c40", transform: `rotateY(90deg) translateZ(${half})` }}
            />

            {/* top face */}
            <div
              className="absolute inset-0"
              style={{ background: "#ededea", transform: `rotateX(90deg) translateZ(${half})` }}
            >
              <span
                className="absolute left-[12%] top-[18%] h-[10%] w-[34%] rotate-[-18deg]"
                style={{ background: "#ffffff", opacity: 0.95 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
