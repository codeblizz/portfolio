"use client";
import { useEffect, useRef } from "react";

function useClickOutside<T extends Node>(cb: () => void) {
  let domNode = useRef<T | null>(null);
  
  let outSideHandler = (event: MouseEvent) => {
    let targetNode = event.target as unknown as HTMLElement;
    if (
      targetNode &&
      !domNode.current?.contains(targetNode) &&
      targetNode?.id !== "menu-dialog"
    )
      cb();
  };

  useEffect(() => {
    document.addEventListener("click", outSideHandler);
    return () => document.removeEventListener("click", outSideHandler);
  }, [cb, outSideHandler]);

  return domNode;
}

export default useClickOutside;
