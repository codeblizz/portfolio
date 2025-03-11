"use client";

import React from "react";
import { BaseElement } from "@/types/ui/base.type";

function Html({ children }: Pick<BaseElement, "children">) {
  return <html lang="en">{children}</html>;
}

export default Html;
