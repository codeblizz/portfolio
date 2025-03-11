"use client";

import React from "react";
import { BaseElement } from "@/types/ui/base.type";

function Section({ className, children }: BaseElement) {
  return <section className={className}>{children}</section>;
}

export default Section;
