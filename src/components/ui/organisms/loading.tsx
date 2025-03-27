"use client";
import React from "react";
import lib from "@/helpers/lib";

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <div className="loader relative size-[40px] my-[100px] mx-auto">
        {Array.from({ length: 12 }, (_, i) => ++i).map((ch) => (
          <span key={ch} className={`${lib.getRotationClass(ch)} ${lib.getAnimationDelayClass(ch)} size-full absolute top-0 left-0 before:block before:mx-auto before:w-[15%] before:h-[15%] before:bg-[hsl(0,0%,20%)] before:rounded-full before:animate-[loaderBounceDelay_1.2s_infinite_ease-in-out]`}></span>
        ))}
      </div>
    </div>
  );
}