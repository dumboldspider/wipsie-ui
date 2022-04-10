import React from "react";
import ThemeContext from "../contexts/themeContext";
import { WipsieThemes } from "../theme";

const useTheme = (): WipsieThemes =>
  React.useContext<WipsieThemes>(ThemeContext);

export default useTheme;
