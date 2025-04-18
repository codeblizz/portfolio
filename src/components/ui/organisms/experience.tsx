"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { workExperiences } from "@/constants";
import ExperienceCard from "@/components/ui/molecules/experience";

export type WorkExperienceCard = {
  role: string;
  date: string;
  desc: string;
  company: string;
  companyLogo: string;
  descBullets: string[];
};

export default function WorkExperience() {
  if (workExperiences.viewExperiences) {
    return (
      <div className="w-[90%] mx-auto text-center md:text-start my-6 border-b border-b-gray-500/50">
        <h1 className="text-4xl font-extrabold mb-4">Experiences</h1>
        <Fade direction="right" duration={1000}>
          <div
            className="flex flex-col pb-5 "
            id="experience"
          >
            <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4">
              {workExperiences.experience.map((card, idx) => {
                return (
                  <ExperienceCard
                    key={idx}
                    cardInfo={{
                      role: card.role,
                      desc: card.desc,
                      date: card.date,
                      company: card.company,
                      companyLogo: card.companyLogo,
                      descBullets: card.descBullets ?? [""],
                    }}
                  />
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
