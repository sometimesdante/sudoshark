"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <span onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <a>Switch Theme</a>
      {/* {theme === "light" ? "Light" : "Dark"} */}
    </span>
  );
};
