"use client";

import React from "react";
import { useFormStatus } from "react-dom";

interface IButton {
  text: string;
  name?: string;
  disabled: boolean;
  className: string;
  type: "submit" | "reset" | "button" | undefined;
}

function Button({ className, name, type, disabled, text }: IButton) {
  const { pending } = useFormStatus();
  return (
    <button name={name} type={type} className={className} disabled={disabled}>
      {pending ? "loading..." : text}
    </button>
  );
}

export default Button;
