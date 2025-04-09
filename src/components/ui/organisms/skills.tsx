"use client";
import React from "react";
import NextImage from "next/image";
import { Fade } from "react-awesome-reveal";
import Technologies from "@/components/ui/molecules/technologies";
import { emoji, skillsSection } from "@/constants";

export default function Skills() {
  return (
    <div
      className="flex flex-col border-b border-b-gray-500/50 text-center gap-y-5 md:text-start w-[90%] h-full my-10 mx-auto"
      id="skills"
    >
      <h1 className="text-4xl font-extrabold">{skillsSection.sectionTitle}</h1>
      <Fade direction="left" duration={1000}>
        <div className="flex flex-col md:grid mb-10 md:grid-cols-3 gap-y-5 md:gap-0 justify-between items-center w-full">
          <div className="md:col-span-1 h-full w-full inline-flex md:justify-start justify-center md:items-center">
            <NextImage
              alt="skills"
              width={1250}
              height={1250}
              className="w-[75%] h-full"
              src={"./assets/images/developer.svg"}
            />
          </div>
          <div className="md:col-span-2 flex w-full flex-col h-[14rem] border shadow-sm shadow-slate-300/40 border-slate-600/80 overflow-y-scroll">
            <h1 className="text-2xl fixed uppercase font-bold text-white/50 bg-slate-600 px-4 py-[2px]">
              {skillsSection.title}{" "}
            </h1>
            <label className="flex flex-col border-t border-t-slate-600/80 text-sm text-slate-600/80 gap-y-1 mt-9">
              <div className="w-full flex justify-center items-center">
                <h5 className="text-center border-l border-b border-r w-1/4">Summary</h5>
              </div>
              <p className="lowercase px-4 text-start text-wrap first-letter:uppercase">
                {skillsSection.subTitle}
              </p>
            </label>
            <Technologies />
            <div className="flex flex-col my-3 border-t border-t-slate-600/80">
              <div className="w-full flex justify-center items-center">
                <h1 className="text-sm text-center text-slate-600/80 border-l border-b border-r w-1/4">
                  Responsibilities
                </h1>
              </div>
              <div className="mt-2">
                {skillsSection.responsibilities.map((resp, idx) => {
                  return (
                    <p
                      key={idx}
                      className="text-sm px-4 text-slate-600/80 text-start"
                    >
                      {emoji.bookmark} {resp}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
