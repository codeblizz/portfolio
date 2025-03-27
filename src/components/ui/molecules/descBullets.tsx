import React from "react";
import { SchoolType } from "@/components/ui/molecules/education";
import { WorkExperienceCard } from "@/components/ui/organisms/experience";

export default function DescBullets({
  descBullets
}: {
  descBullets: Pick<WorkExperienceCard | SchoolType, "descBullets">;
}) {
  return descBullets.descBullets.length
    ? descBullets.descBullets.map((item, idx) => (
        <li key={idx} className="">
          {item}
        </li>
      ))
    : null;
}
