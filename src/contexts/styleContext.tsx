"use client";

import React, { ReactNode, useContext, useEffect, useState } from "react";

interface IStyleContext {
  isDark: boolean;
  changeTheme: () => void;
}

const StyleContext = React.createContext<IStyleContext>({
  isDark: false,
  changeTheme: () => {},
});

export const StyleProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => { 
    setIsDark((prevState) => !prevState);
    document.documentElement.classList.toggle("dark-mode");
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(preferDark);
      document.documentElement.classList.toggle("dark-mode", preferDark);
    }
  }, []);

  return (
    <StyleContext.Provider value={{ isDark, changeTheme }}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyleContext = () => {
  const ctx = useContext(StyleContext);
  if (ctx === null) {
    throw Error("Missing StyleContextProvider");
  }
  return ctx;
};

export default StyleContext;
