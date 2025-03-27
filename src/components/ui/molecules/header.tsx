"use client";
import Link from "next/link";
import lib from "@/helpers/lib";
import Headroom from "react-headroom";
import React, { useState } from "react";
import Moon from "@/components/ui/atoms/moon";
import Sunlight from "@/components/ui/atoms/sunlight";
import { useStyleContext } from "@/contexts/styleContext";
import Hamburger from "@/components/ui/molecules/hamburger";
import MenuDropDown from "@/components/ui/molecules/menuDropDown";
import {
  greeting,
  workExperiences,
  navbarList,
} from "@/constants/portfolio.data";

function Header() {
  const exp = workExperiences.viewExperiences;
  const { isDark, changeTheme } = useStyleContext();
  const [openMenu, setOpenMenu] = useState(false);

  const onClick = () => setOpenMenu((prev) => !prev);

  return (
    <Headroom className="w-full fixed z-50">
      <header className={lib.cn([isDark ? "bg-gray-900" : "bg-slate-100", "flex fixed w-full items-center min-w-max overflow-auto shadow-md md:text-clip border-b border-b-gray-500/50 gap-8 justify-between py-4 px-5 sm:px-10 md:px-16 mx-auto"])}>
        <Link href="/" className="mt-2">
          <span className="md:text-4xl text-2xl sm:text-3xl text-center font-extrabold text-nowrap">
            {greeting.username}
          </span>
        </Link>
        <ul className="sm:flex md:text-[16px] text-sm text-center items-center justify-between gap-x-5 hidden sm:visible">
          {navbarList.map((list, key) => {
            if (list.name === "experience" && exp === false) return null;
            return (
              <li key={key} className="hover:text-blue-300 text-nowrap">
                <a className="" href={list.url}>
                  {list.label}
                </a>
              </li>
            );
          })}
        </ul>
        {isDark ? (
          <Sunlight onClick={changeTheme} className="cursor-pointer" />
        ) : (
          <Moon className="cursor-pointer" onClick={changeTheme} />
        )}
        <Hamburger onClick={onClick} />
        {openMenu && <MenuDropDown setOpenMenu={setOpenMenu} />}
      </header>
    </Headroom>
  );
}
export default Header;
