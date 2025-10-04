import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component: React.ComponentType) =>
  function HOC() {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileInView={{
          opacity: [0, 0.5, 1],
        }}
        transition={{
          default: {
            type: "spring",
            bounceDamping: 3,
            duration: 1,
          },
        }}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
