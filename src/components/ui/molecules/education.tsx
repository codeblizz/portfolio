"use client";
import NextImage from "next/image";
import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import DescBullets from "@/components/ui//molecules/descBullets";

export type SchoolType = {
  schoolName: string;
  logo: string;
  subHeader: string;
  duration: string;
  desc: string;
  descBullets: string[];
};

export default function EducationCard({ school }: { school: SchoolType }) {
  const imgRef = useRef(null);

  return (
    <Fade direction="left" duration={1000}>
      <div className="flex items-center gap-x-3 mx-auto w-[100%]">
        <div className="h-full max-w-[10%]">
          <NextImage
            width={150}
            height={150}
            ref={imgRef}
            src={school.logo}
            alt={school.schoolName}
            crossOrigin={"anonymous"}
            className="w-[70%] h-full rounded-full"
          />
        </div>
        <div className="max-w-[90%] overflow-x-hidden text-ellipsis">
          <h5 className="text-start text-nowrap text-xl font-extrabold">
            {school.schoolName}
          </h5>
          <div className="flex flex-col">
            <h5 className="text-sm md:text-lg font-bold">{school.subHeader}</h5>
            <p className="text-sm md:text-md font-semibold">{school.duration}</p>
            <p className="text-sm md:text-sm lowercase first-letter:uppercase overflow-auto md:text-nowrap">{school.desc}</p>
            <div className="text-sm md:text-lg">
              <ul className="flex flex-col ">
                <DescBullets descBullets={school} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
