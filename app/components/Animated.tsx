"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

type VariantType = "fade" | "fadeUp" | "photo";

interface AnimatedProps {
  children: React.ReactNode;
  variant?: VariantType;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: boolean;
  // how much of the element must be visible before animation triggers (0 to 1)
  triggerAmount?: number;
}

const variantsMap: Record<VariantType, Variants> = {
  fade: {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 18, scale: 0.995 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  photo: {
    hidden: { opacity: 0, y: 28, rotate: -3, scale: 0.995 },
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1 },
  },
};

export default function Animated({
  children,
  variant = "fade",
  className = "",
  delay = 0,
  // increased default duration for slower, smoother reveals
  duration = 1.0,
  stagger = false,
  // default trigger sensitivity: 0.3 means ~30% visible before animating
  triggerAmount = 0.3,
}: AnimatedProps) {
  const base: Variants = variantsMap[variant];

  // If we're not staggering, animate the parent element itself using the base variant.
  const parentVariants: Variants = !stagger
    ? base
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      };

  // When staggering, wrap each immediate child in its own motion.div so staggerChildren works.
  const wrappedChildren = stagger
    ? React.Children.map(children, (child, i) => (
        <motion.div
          key={i}
          variants={base}
          // slightly larger per-child offset for a slighter slower stagger
          transition={{ duration, delay: delay + i * 0.08 }}
        >
          {child}
        </motion.div>
      ))
    : children;

  return (
    <motion.div
      className={className}
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      // replay animation every time element enters the viewport
      // `triggerAmount` controls how much of the element must be visible before animation runs
      viewport={{ once: false, amount: triggerAmount }}
      transition={{ duration }}
    >
      {wrappedChildren}
    </motion.div>
  );
}
