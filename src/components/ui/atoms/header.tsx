"use client";

import React from "react";
import { BaseElement } from "@/types/ui/base.type";

function Header({ className, children }: BaseElement) {
  return <header className={className}>{children}</header>;
}

export default Header;
