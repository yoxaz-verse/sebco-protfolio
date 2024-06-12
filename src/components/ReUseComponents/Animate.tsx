"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  delay?: number;
  duration?: number;
};

const Animate: React.FC<Props> = ({
  duration,
  delay,
  children,
  style,
  className,
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      variants={{
        hidden: {
          opacity: 0,
          //   letterSpacing: "0.05em",
        },
        visible: {
          //   letterSpacing: "-0.025em",
          opacity: 0.9,
          transition: {
            delay: delay ? delay : 0.2,
            duration: duration ? duration : 1.5,
          },
        },
        hover: {
          opacity: 1,
          transition: {
            duration: 1.5,
          },
        },
      }}
      style={style} // Pass style prop to motion.div
      className={className} // Pass className prop to motion.div
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
