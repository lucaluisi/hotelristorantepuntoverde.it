"use client";

import { useAnimate } from "framer-motion";
import React from "react";

export default function UseAnimate() {
  return (
    <div className="bg-white grid h-screen place-content-center">
      <Basic />
    </div>
  );
}

const Basic = () => {
  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    await animate("#target", { x: 150 });
    await animate("#target", { y: 190, rotate: "360deg" }, { duration: 0.5 });
    await animate("#target", { borderRadius: "100%" });
    animate("button", { rotate: "360deg" });
    await animate("#target", {
      x: -150,
      borderRadius: "25px",
      rotate: "180deg",
      background: "#f59e0b",
    });
    await animate(
      "#target",
      {
        y: 0,
        borderRadius: "0px",
        rotate: "0deg",
      },
      { duration: 0.5 }
    );
    await animate("#target", {
      x: 0,
      background: "#4f46e5",
    });
    animate("button", { rotate: "0deg" });
  };

  return (
    <div ref={scope}>
      <div id="target" className="h-24 w-24 bg-violet-500" />
      <button
        onClick={handleAnimate}
        className="mt-4 rounded-md bg-slate-900 px-4 py-2 font-normal"
      >
        Trigger animation
      </button>
    </div>
  );
};
