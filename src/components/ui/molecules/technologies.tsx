"use client";
import React from "react";
import { skillsSection } from "@/constants";

export default function Skills() {
  return (
    <div className="w-full h-auto border-t mt-2 border-slate-600/80 flex flex-col text-sm gap-y-0 md:text-start text-center justify-center">
      <div className="w-full flex justify-center items-center">
        <p className="text-slate-600/80 text-center border-l border-b border-r w-1/4">
          Technologies
        </p>
      </div>
      <ul className="text-start">
        {skillsSection.skills.map((skills) => {
          return (
            <li
              key={skills.skillName}
              className="inline-flex indent-4 hover:text-[#645beb] text-slate-600/80 hover:cursor-zoom-in justify-between items-center gap-x-1"
            >
              <i className={skills.fontAwesomeClassname}></i>
              <p>{skills.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
