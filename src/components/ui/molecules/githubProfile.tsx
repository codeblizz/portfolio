"use client";
import React from "react";
import NextImage from "next/image";
import { Fade } from "react-awesome-reveal";
import { contactInfo } from "@/constants/portfolio.data";

export type GitHubProfile = {
  bio: string;
  name: string;
  hireable: string;
  location: string;
  avatarUrl: string;
};

export default function GithubProfileCard({ prof }: { prof: GitHubProfile }) {

  if (prof.hireable !== null) prof.hireable = "Yes";
  else prof.hireable = "No";

  return (
    <Fade direction="down" duration={1000}>
      <div className="w-[90%] mx-auto border-t border-slate-600/80" id="contact">
        <h1 className="m-0 text-4xl font-extrabold uppercase text-center md:text-start">Reach Out to me!</h1>
        <div className="flex md:flex-col">
          <div className="flex-[80%] md:text-center md:order-2">
            <p className="uppercase font-bold text-2xl">{contactInfo.subtitle}</p>
            <h2 className="text-[16px] md:text-[30px] leading-[30px]">{String(prof.bio)}</h2>
            {prof.location !== null && (
              <div className="shadow-[hsl(36,100%,90%)]">
                <span className="text-[19px] leading-[45px]">
                  <NextImage
                    src={"/location.svg"}
                    alt=""
                    width={100}
                    height={100}
                  />
                  {prof.location}
                </span>
              </div>
            )}
            <div className="pb-4">
              <span className="text-[16px] leading-[30px] md:text-[19px] md:leading-[45px]">
                Open for opportunities: {prof.hireable}
              </span>
            </div>
          </div>
          <div className="mx-auto order-1 text-right flex-[20%] h-auto max-w-full">
            <NextImage
              width={250}
              height={250}
              alt={prof.name}
              src={prof.avatarUrl}
              className="rounded-[50%] transition-all hover:shadow-none md:shadow-[0_30px_30px_-30px_hsl(0,0%,0%)] shadow-[0_50px_50px_-50px_hsl(0, 0%, 0%)] border border-[hsl(243,100%,69%)] duration-300 ease-out mx-auto w-[200%] max-w-[350px] h-auto"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
