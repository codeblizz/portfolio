"use client";
import React from "react";
import NextIMage from "next/image";
import { Fade } from "react-awesome-reveal";
import { techStack } from "@/constants/portfolio.data";

export default function SkillProgress() {
  if (techStack.viewSkillBars) {
    return (
      <div className="md:w-[90%] mx-auto text-center md:text-start border-b border-b-gray-500/50">
        <h1 className="text-3xl font-extrabold">
          {"Proficiency".toUpperCase()}
        </h1>
        <Fade direction="right" duration={1000}>
          <div className="md:grid md:grid-cols-3 w-full gap-3 flex flex-col py-6 justify-between items-center">
            <div className="col-span-2 flex flex-col gap-y-1 mb-2 md:w-full w-[90%] mx-auto">
              {techStack.experience.map((exp, idx) => {
                const progressStyle = {
                  width: exp.progressPercentage,
                };
                return (
                  <div key={idx} className="flex flex-col my-1">
                    <p>{exp.Stack}</p>
                    <div className="meter h-[20px] relative bg-[hsl(0,14%,95%)] rounded-2xl">
                      <span
                        style={progressStyle}
                        className="block h-[100%] absolute rounded-tr-[6px] rounded-br-[6px] rounded-tl-[20px] rounded-bl-[20px] overflow-hidden bg-[hsl(243,100%,82%)]"
                      ></span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full h-full inline-flex items-center justify-center md:justify-end">
              <NextIMage
                width={100}
                height={100}
                alt="Skills"
                className="w-[50%] h-ful pt-7 md:pt-14"
                src="/assets/images/skill.svg"
              />
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
