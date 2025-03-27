import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

const lib = {
  cn: (...args: ClassValue[]) => {
    return twMerge(clsx(args));
  },
  getRotationClass: (ch: number) => {
    return `rotate-[${(ch - 1) * 30}deg]`;
  },
  getAnimationDelayClass: (ch: number) => {
    return `before:animation-delay-[-${1.2 - (ch - 1) * 0.1}s]`;
  },
};

export default lib;
