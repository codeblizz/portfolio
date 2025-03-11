"use client";

import React, { forwardRef, Ref, useImperativeHandle, useRef } from "react";

type InputProps = {
  name: string;
  type: string;
  className: string;
  disabled: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, inputRef: Ref<unknown>) => {
    const ref = useRef<HTMLInputElement | null>(null);
    useImperativeHandle(inputRef, () => ({
      inputFocus: () => ref.current?.focus(),
      inputClear: () => {
        if (ref.current) ref.current.value = "";
      },
    }));
    return <input ref={ref} {...props} />;
  }
);

Input.displayName = "Input";

export default Input;
