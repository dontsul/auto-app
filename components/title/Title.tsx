"use client";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ITitleProps {
  tag: string;
  cn?: string;
  children: ReactNode;
}

export const Title: FC<ITitleProps> = ({ tag, cn, children }) => {
  const titleAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  switch (tag) {
    case "h1":
      return (
        <h1 className="font-extrabold text-slate-900 uppercase text-center">
          {children}
        </h1>
      );
    case "h2":
      return (
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={titleAnimation}
          viewport={{ once: true }}
          className={`font-extrabold text-slate-900 uppercase text-4xl lg:text-6xl text-center  ${
            cn ? cn : ""
          }`}
        >
          {children}
        </motion.h2>
      );
    case "h4":
      return (
        <h4 className="font-extrabold text-slate-900 uppercase text-center">
          {children}
        </h4>
      );
    default:
      return null;
  }
};
