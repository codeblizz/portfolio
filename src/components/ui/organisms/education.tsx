"use client";
import React from "react";
import { educationInfo } from "@/constants";
import EducationCard from "@/components/ui/molecules/education";

export default function Education() {
  if (educationInfo.viewEducation) {
    return (
      <div className="flex flex-col w-[90%] text-center md:text-start border-b border-b-gray-500/50 mx-auto pb-6 mt-8" id="education">
        <h1 className="font-extrabold text-4xl">Education</h1>
        <div className="flex flex-col justify-center pt-5 gap-y-4">
          {educationInfo.schools.map((school, idx) => (
            <EducationCard key={idx} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
