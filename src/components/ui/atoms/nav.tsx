"use client";

import React from "react";
import { BaseElement } from "@/types/ui/base.type";

function Nav({ className, children }: BaseElement) {
  return <nav className={className}>{children}</nav>;
}

export default Nav;
