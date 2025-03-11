"use client";

import React from "react";
import { BaseElement } from "@/types/ui/base.type";

function Body({ className, children }: BaseElement) {
  return <body className={className}>{children}</body>;
}

export default Body;
