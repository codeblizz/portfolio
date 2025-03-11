"use client";

import React from "react";
import NextLink from "next/link";
import { BaseElement } from "@/types/ui/base.type";

interface NavigationLink extends BaseElement {
  href: string;
};

function Link({ href, className, children }: NavigationLink) {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
}

export default Link;
