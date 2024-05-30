"use client";

import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import { Button } from "@nextui-org/react";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onPress={toggleTheme} className=" px-[22px] py-[22px] text-sm">
      {theme === "default" ? "Default" : "Light"} theme
    </Button>
  );
};

export default ThemeToggleButton;
