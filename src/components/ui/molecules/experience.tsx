"use client";
import lib from "@/helpers/lib";
import NextImage from "next/image";
import ColorThief from "colorthief";
import React, { useState, useRef } from "react";
import { useStyleContext } from "@/contexts/styleContext";
import DescBullets from "@/components/ui//molecules/descBullets";
import { WorkExperienceCard } from "@/components/ui/organisms/experience";

export default function ExperienceCard({
  cardInfo
}: {
  cardInfo: WorkExperienceCard;
}) {
  const { isDark } = useStyleContext();
  const imgRef = useRef<HTMLImageElement>(null);
  const [colorArrays, setColorArrays] = useState<number[]>([0]);

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values: number[]) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  return (
    <div className={lib.cn([isDark ? "bg-[hsl(222,27%,12%)]" : "bg-[hsl(0,0%,100%)]", "relative rounded-[10px] border border-[hsla(0,0%,83%,0.397)] hover:shadow[0px_20px_30px_-10px_hsla(0,0%,0%,0.2)] shadow-[0px_10px_30px_-15px_hsla(0,0%,0%,0.2)]"])}>
      <div
        style={{ background: rgb(colorArrays) ?? "" }}
        className="experience-banner flex h-[11rem] blur-[0px] items-end justify-center bg-[length:150%] bg-center bg-no-repeat rounded-t-[10px] bg-gradient-to-b from-black/70 to-black/50"
      >
        <div className="absolute top-0 left-0 blur-[5px] rounded-t-[10px] bg-gradient-to-b from-black/40 to-black/20 h-[11rem] w-[100%]"></div>
        <div className="flex items-center justify-center bg-transparent absolute top-0 left-0 w-[100%] h-[9rem]">
          <h5 className="text-center text-ellipsis overflow-hidden whitespace-nowrap text-2xl m-0 p-6 text-white/50 font-bold ">{cardInfo.company}</h5>
        </div>

        <NextImage
          width={250}
          height={250}
          ref={imgRef}
          alt={cardInfo.company}
          crossOrigin={"anonymous"}
          src={cardInfo.companyLogo}
          onLoad={() => getColorArrays()}
          className="absolute object-cover left-0 right-0 top-[7rem] mx-auto size-[8rem] rounded-[50%] shadow-[0_0.5rem_1rem_rgba(0,0,0,0.3)]"
        />
      </div>
      <div className="p-6 mt-8">
        <h5 className={"text-center font-bold text-2xl m-0 pt-6"}>
          {cardInfo.role}
        </h5>
        <h5 className={"text-center text-xl m-0 pt-4 font-semibold"}>
          {cardInfo.date}
        </h5>
        <p className={"text-center"}>
          {cardInfo.desc}
        </p>
        <ul>
          <DescBullets descBullets={cardInfo} />
        </ul>
      </div>
    </div>
  );
}
