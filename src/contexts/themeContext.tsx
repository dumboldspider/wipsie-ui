import React from "react";
import { WipsieThemes, mainTheme } from "../theme";

const ThemeContext: React.Context<WipsieThemes> = React.createContext<WipsieThemes>(
  mainTheme
);

export default ThemeContext;
