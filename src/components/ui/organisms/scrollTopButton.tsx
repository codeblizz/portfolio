"use client";
import React from "react";
import { emoji } from "@/constants";

export default function ScrollTop() {
  function scrollTopEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollTopFunction() {
    const scrollTopButton = document.getElementById("scrollTopButton");
    if (!scrollTopButton) return;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
      scrollTopButton.style.visibility = "visible";
    else scrollTopButton.style.visibility = "hidden";
  }

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollTopFunction();
    };
    window.onload = function () {
      scrollTopFunction();
    };
  }

  return (
    <button
      title="Go to top"
      id="scrollTopButton"
      onClick={scrollTopEvent}
      className="right-8 z-50 cursor-pointer hidden outline-none hover:transition-all hover:ease-in-out hover:duration-200 hover:bg-[hsl(0,0%,0%)] text-2xl rounded-2xl text-[hsl(0,0%,100%)] border-none bottom-5 p-4 fixed bg-[hsl(272,70%,32%)]"
    >
      <i className="text-center size-10" aria-hidden="true">
        {emoji.handPointUp}
      </i>
    </button>
  );
}
