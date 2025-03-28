"use client";

import React from "react";
import NextImage from "next/image";
import { Fade } from "react-awesome-reveal";
import { contactInfo } from "@/constants/portfolio.data";

export default function Contact() {
  return (
    <div className="mx-auto w-[90%] py-6">
    <Fade direction="left" duration={1000}>
      <div className="flex flex-col md:grid md:grid-cols-3 justify-between items-center">
        <div className="md:col-span-2 flex flex-col w-auto gap-y-3 text-center md:text-start">
          <h1 className="text-4xl font-extrabold items-center">
            {contactInfo.title}
          </h1>
          <p className="capitalize text-lg text-slate-600/80">
            {contactInfo.subtitle}
          </p>
          <div className="flex flex-col justify-center my-3 gap-y-3 text-slate-600/80">
            <a className="text-xl" href={"tel:" + contactInfo.number}>
              {contactInfo.number}
            </a>
            <a className="text-xl underline underline-offset-4 hover:text-blue-400"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
          </div>
        </div>
        <NextImage
          width={150}
          height={150}
          alt="Man Working"
          className="md:col-span-1 h-56 w-full p-5"
          src="/assets/images/contactDark.svg"
        />
      </div>
    </Fade>
    </div>
  );
}
