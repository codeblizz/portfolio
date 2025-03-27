"use client";

import React from "react";
import lib from "@/helpers/lib";
import { useStyleContext } from "@/contexts/styleContext";

function Hamburger({ onClick }: { onClick: () => void }) {
  const { isDark } = useStyleContext();
  return (
    <button className="md:hidden flex flex-col items-center space-y-1 cursor-pointer" onClick={onClick}>
      {[1, 2, 3].map(hb => (
        <span
          key={hb}
          className={lib.cn([isDark ? "dark:bg-gray-100/20" : "bg-black/60", "block w-6 h-1 transition-transform duration-300"])}
        />
      ))}
    </button>
  );
}

export default Hamburger;
