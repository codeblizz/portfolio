"use client";

import React from "react";
import { BaseElement } from "@/types/ui/base.type";

interface FormElement extends BaseElement {
  action?: string | ((formData: FormData) => void | Promise<void>);
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

function Form({ className, action, onSubmit, children }: FormElement) {
  return (
    <form action={action} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
