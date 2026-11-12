"use client";
import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type VariantType = "fade" | "fadeUp" | "photo";

interface AnimatedProps {
  children: React.ReactNode;
  variant?: VariantType;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: boolean;
  /** How much of the element must be visible before it animates (0 to 1). */
  triggerAmount?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const variantsMap: Record<VariantType, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  photo: {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
};

/**
 * Reveal-on-scroll wrapper. Plays once per page view and renders
 * statically when the visitor prefers reduced motion.
 */
export default function Animated({
  children,
  variant = "fade",
  className = "",
  delay = 0,
  duration = 0.8,
  stagger = false,
  triggerAmount = 0.25,
}: AnimatedProps) {
  const reduce = useReducedMotion();
  const base = variantsMap[variant];

  const parentVariants: Variants = stagger
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
    : base;

  const content = stagger
    ? React.Children.map(children, (child, i) => (
        <motion.div
          key={i}
          variants={base}
          transition={{ duration, delay: delay + i * 0.06, ease: EASE }}
        >
          {child}
        </motion.div>
      ))
    : children;

  return (
    <motion.div
      className={className}
      variants={parentVariants}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: triggerAmount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {content}
    </motion.div>
  );
}
