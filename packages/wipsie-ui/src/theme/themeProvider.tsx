import React, { PropsWithChildren } from "react";
import useTheme from "../hooks/useTheme";
import ThemeContext from "../contexts/themeContext";
import { WipsieThemes } from "./index";
import lightTheme from "./variants/light";
import darkTheme from "./variants/dark";
import cosmicTheme from "./variants/cosmic";
import { ThemeParam, getThemeByType, mergeTheme, switchTheme } from "./utils";
import { CssBaseline } from "../components/CssBaseline";

export interface Props {
  theme?: ThemeParam | string;
  baseline?: boolean;
}

const ThemeProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
  theme,
  baseline = true,
}) => {
  //  Case of theme being different from defaults
  let userTheme = lightTheme; // default theme

  if (typeof theme !== "string") {
    const customTheme = theme as WipsieThemes;
    const currentTheme = useTheme();
    const baseTheme = customTheme.type
      ? getThemeByType(customTheme.type)
      : currentTheme;
    const merged = mergeTheme(baseTheme, customTheme);

    // Case of theme being different from defaults
    userTheme =
      currentTheme.type !== merged.type ? switchTheme(merged) : merged;
  }
  return (
    <ThemeContext.Provider
      value={
        typeof theme === "string"
          ? theme === "light"
            ? lightTheme
            : theme === "dark"
            ? darkTheme
            : theme === "cosmic"
            ? cosmicTheme
            : userTheme // default
          : userTheme
      }
    >
      {baseline && <CssBaseline />}
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
