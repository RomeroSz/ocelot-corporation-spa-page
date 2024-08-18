"use client"
import React, { useEffect, useState } from "react";
import { TiArrowUpThick } from "react-icons/ti";
import { m, motion } from "framer-motion";

const TapTop: React.FC<any> = () => {
  const [showButton, setShowButton] = useState(false);

  const executeScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tapTopAnimation = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <button onClick={executeScroll} aria-label="Back to top">
      <motion.div
        className={`fixed flex items-center justify-center cursor-pointer z-50 bottom-8 right-8 border-0 p-2 rounded-lg bg-cyan-500 text-white text-2xl font-semibold`}
        initial="hidden"
        animate={showButton ? "visible" : "hidden"}
        variants={tapTopAnimation}
      >
        <TiArrowUpThick  />
      </motion.div>
    </button>
  );
};

export default TapTop;
