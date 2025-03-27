"use client";
import React from "react";
import NextImage from "next/image";
import { Fade } from "react-awesome-reveal";
import { emoji, greeting } from "@/constants/portfolio.data";

export default function Greeting() {
  return (
    <Fade direction="right" duration={1000}>
      <div
        className="flex flex-col md:grid md:grid-cols-3 justify-between border-b border-b-gray-500/50 gap-8 mx-auto w-[90%] items-center pt-30 pb-10"
        id="greeting"
      >
        <div className="md:col-span-2 flex flex-col gap-y-3">
          <h1 className="flex items-center">
            <p className="font-extrabold text-4xl">
              {greeting.title}{" "}
            </p>
            <span className="wave-emoji inline-flex text-3xl mx-2 items-center">{emoji.wavyHand}</span>
          </h1>
          <p className="text-slate-600/80 text-lg">
            {greeting.subTitle}
          </p>
          <div className="flex items-center gap-x-3">
            <a className="underline underline-offset-4" href="#contact">
              {"Contact me"}
            </a>
            <a className="underline underline-offset-4" target="_blank" href={greeting.resumeLink}>
              {"See my resume"}
            </a>
          </div>
        </div>
        <div className="md:col-span-1">
          <NextImage
            width={250}
            height={250}
            className="float-right"
            alt="sitting on table"
            src={"/assets/images/sittingOnTable.svg"}
          />
        </div>
      </div>
    </Fade>
  );
}
