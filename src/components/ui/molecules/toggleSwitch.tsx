"use client";

import React from "react";
import { useStyleContext } from "@/contexts/styleContext";

const ToggleSwitch = () => {
  const { isDark, changeTheme } = useStyleContext();
  
  return (
    <label className="relative flex items-center cursor-pointer">
      <input type="checkbox" checked={isDark} onChange={changeTheme} className="sr-only peer" />
      <div className="hidden sm:w-9 sm:h-5 bg-gray-200 rounded-full peer-checked:bg-black/80 ring-2 ring-blue-200 transition"></div>
      <div className="absolute sm:w-4 sm:h-4 bg-white rounded-full shadow-md transform -translate-y-1/2 left-1 top-[0.6rem] peer-checked:translate-x-full transition"></div>
    </label>
  );
};
export default ToggleSwitch;
