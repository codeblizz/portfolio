"use client";
import React from "react";
import NextImage from "next/image";
import { Fade } from "react-awesome-reveal";
import { bigProjects } from "@/constants";

export default function StartupProject() {
  function openProjectInNewWindow(url: string) {
    if (typeof window !== "undefined") {
      const win = window.open(url, "_blank");
      win?.focus();
    }
  }

  return (
    <div className="w-[90%] mx-auto text-center md:text-start py-6 border-b border-slate-600/80">
      <h1 className="text-4xl font-extrabold">{bigProjects.title}</h1>
      <Fade direction="right" duration={1000}>
        <div className="h-[100%]" id="projects">
          <div className="flex flex-col gap-y-3 w-full h-full">
            <p className={"text-xl uppercase"}>{bigProjects.subtitle}</p>
            <div className="flex justify-center items-center w-[100%] h-[100%]">
              <div className="flex-1 flex justify-between w-[100%] h-[100%] gap-[0.15rem] md:gap-3 mb-[1.875rem] overflow-hidden snap-none md:snap-x md:snap-center">
                {bigProjects.projects.map((project, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out w-40 h-12 md:h-24"
                      onClick={() => openProjectInNewWindow(project.link)}
                    >
                      <NextImage
                        alt="project-hub"
                        src={project.image}
                        width={150}
                        height={150}
                        className="h-[95%] w-[95%] hover:scale-150"
                      />
                    </div>
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
