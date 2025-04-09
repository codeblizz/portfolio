"use client";
import React from "react";
import lib from "@/helpers/lib";
import { navbarList } from "@/constants";
import { useStyleContext } from "@/contexts/styleContext";
import useClickOutside from "@/components/hook/useClickOutside";

function MenuDropDown({
  setOpenMenu,
}: {
  setOpenMenu: (data: boolean) => void;
}) {
  const { isDark } = useStyleContext();
  const domNode = useClickOutside<HTMLElement>(() => setOpenMenu(false));

  return (
    <nav
      ref={domNode}
      id="menu-dialog"
      className={lib.cn([
        isDark ? "bg-slate-600" : "bg-white",
        "absolute flex flex-col justify-center h-auto items-center border border-blue-300/10 sm:hidden top-[4.5rem] z-50 right-0 w-40",
      ])}
    >
      <ul className="w-full flex flex-col justify-center items-center gap-y-1">
        {navbarList.map((list, idx) => (
          <li
            key={idx}
            className="inline-flex text-sm justify-center h-auto items-center text-center w-full border-b border-b-blue-300/40"
            onClick={() => setOpenMenu(false)}
          >
            <a
              className="w-full h-full hover:transition hover:font-semibold hover:scale-120"
              href={list.url}
            >
              {list.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuDropDown;
