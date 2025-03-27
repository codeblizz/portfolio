"use client";
import React from "react";
import { skillsSection } from "@/constants/portfolio.data";

export default function Skills() {
  return (
    <div className="w-full h-auto flex text-sm gap-3 items-start justify-center">
      <p className="text-slate-600/80 mt-1 underline underline-offset-4">Technologies:</p>
      <ul className="text-start">
        {skillsSection.skills.map((skills) => {
          return (
            <li
              key={skills.skillName}
              className="inline-flex hover:text-[#645beb] text-slate-600/80 hover:cursor-text justify-between items-center gap-x-1"
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
