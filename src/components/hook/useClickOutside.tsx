"use client";
import { useCallback, useEffect, useRef } from "react";

function useClickOutside<T extends Node>(cb: () => void) {
  const domNode = useRef<T | null>(null);
  
  const outSideHandler = useCallback((event: MouseEvent) => {
    const targetNode = event.target as unknown as HTMLElement;
    if (
      targetNode &&
      !domNode.current?.contains(targetNode) &&
      targetNode?.id !== "menu-dialog"
    )
      cb();
  }, [domNode.current, cb]);

  useEffect(() => {
    document.addEventListener("click", outSideHandler);
    return () => document.removeEventListener("click", outSideHandler);
  }, [outSideHandler]);

  return domNode;
}

export default useClickOutside;
