"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Footer() {
  return (
    <Fade duration={1000}>
      <footer className="flex font-medium justify-center shadow-xl shadow-gray-50 h-56 items-center flex-col gap-y-4 border-t-2 border-t-gray-700/50">
        <p className="inline-flex text-lg items-center gap-x-1">
          {"Made with ❤️ by Collins Maduka"}
        </p>
        <div className="flex flex-col text-[16px] text-center gap-y-4 text-slate-600/80">
          {/* <span>
            Theme by{" "}
            <a href="https://github.com/codeblizz/collins.maduka.dev" className="italic underline underline-offset-3">
              Collins
            </a>
          </span> */}
          <p>&copy;{new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </footer>
    </Fade>
  );
}