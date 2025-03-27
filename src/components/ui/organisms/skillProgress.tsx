"use client";
import React from "react";
import NextIMage from "next/image";
import { Fade } from "react-awesome-reveal";
import { techStack } from "@/constants/portfolio.data";

export default function SkillProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade direction="down" duration={1000}>
        <div className="w-[90%] md:grid md:grid-cols-3 py-6 justify-between items-center mx-auto border-b border-b-gray-500/50">
          <div className="col-span-2 flex flex-col gap-y-1 mb-2">
            <h1 className="text-3xl font-extrabold">
              {"Proficiency".toUpperCase()}
            </h1>
            {techStack.experience.map((exp, idx) => {
              const progressStyle = {
                width: exp.progressPercentage,
              };
              return (
                <div key={idx} className="flex flex-col my-1">
                  <p>{exp.Stack}</p>
                  <div className="meter h-[20px] relative bg-[hsl(0,14%,95%)] rounded-2xl">
                    <span style={progressStyle} className="block h-[100%] absolute rounded-tr-[6px] rounded-br-[6px] rounded-tl-[20px] rounded-bl-[20px] overflow-hidden bg-[hsl(243,100%,82%)]"></span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full h-full inline-flex items-end justify-end">
            <NextIMage
              width={100}
              height={100}
              alt="Skills"
              className="w-[50%]"
              src="/assets/images/skill.svg"
            />
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
