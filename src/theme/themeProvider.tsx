import React, { PropsWithChildren } from "react";
import useTheme from "../hooks/useTheme";
import ThemeContext from "../contexts/themeContext";
import { WipsieThemes } from "./index";
import { ThemeParam, getThemeByType, mergeTheme, switchTheme } from "./utils";

export interface Props {
  theme?: ThemeParam;
}

const ThemeProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
  theme,
}) => {
  const customTheme = theme as WipsieThemes;
  const currentTheme = useTheme();
  const baseTheme = customTheme.type
    ? getThemeByType(customTheme.type)
    : currentTheme;
  const merged = mergeTheme(baseTheme, customTheme);
  const userTheme =
    currentTheme.type !== merged.type ? switchTheme(merged) : merged;

  return (
    <ThemeContext.Provider value={userTheme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
