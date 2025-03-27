"use client";
import React from "react";
import NextImage from "next/image";
import { Fade } from "react-awesome-reveal";
import Skills from "@/components/ui/molecules/skills";
import { emoji, skillsSection } from "@/constants/portfolio.data";

export default function Skill() {
  return (
    <div className="border-b border-b-gray-500/50 w-[90%] my-5 mx-auto" id="skill">
      <h1 className="text-3xl font-extrabold">{skillsSection.sectionTitle}</h1>
      <Fade direction="left" duration={1000}>
        <div className="flex flex-col md:grid px-4 mb-10 md:grid-cols-3 gap-2 md:gap-0 h-56 justify-between items-center w-[100%]">
          <div className="md:col-span-1 h-full w-full inline-flex justify-start items-center">
            <NextImage
              alt="skills"
              width={1250}
              height={1250}
              className="w-[75%] h-full"
              src={"./assets/images/developer.svg"}
            />
          </div>
          <div className="md:col-span-2 flex flex-col h-[14rem] border shadow-sm shadow-slate-300/40 border-slate-600/80 overflow-y-scroll">
            <h1 className="text-2xl uppercase underline font-bold fixed w-full">{skillsSection.title} </h1>
            <label className="flex text-sm text-slate-600/80 gap-3 mt-9">
              <h5 className="underline underline-offset-4">Summary:</h5>
              <p className="lowercase first-letter:uppercase">{skillsSection.subTitle}</p>
            </label>
            <Skills />
            <div className="flex flex-col my-3 gap-3">
              <h1 className="underline underline-offset-4 text-sm text-slate-600/80">Responsibilities</h1>
              {skillsSection.responsibilities.map((resp, idx) => {
                return (
                  <p key={idx} className="text-sm text-slate-600/80">
                    {emoji.goldenThunder} {resp}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
