import React, { PropsWithChildren } from "react";
import useTheme from "../hooks/useTheme";
import ThemeContext from "../contexts/themeContext";
import { WipsieThemes } from "./index";
import lightTheme from "./variants/light";
import darkTheme from "./variants/dark";
import cosmicTheme from "./variants/cosmic";
import { ThemeParam, getThemeByType, mergeTheme, switchTheme } from "./utils";

export interface Props {
  theme?: ThemeParam | string;
}

const ThemeProvider: React.FC<PropsWithChildren<Props>> = ({
  children,
  theme,
}) => {
  if (typeof theme === "string") {
    switch (theme) {
      case "dark":
        return (
          <ThemeContext.Provider value={darkTheme}>
            {children}
          </ThemeContext.Provider>
        );
      case "cosmic":
        return (
          <ThemeContext.Provider value={cosmicTheme}>
            {children}
          </ThemeContext.Provider>
        );
      case "light":
      default:
        return (
          <ThemeContext.Provider value={lightTheme}>
            {children}
          </ThemeContext.Provider>
        );
    }
  } else {
    //  Case of theme being different from defaults

    const customTheme = theme as WipsieThemes;
    const currentTheme = useTheme();
    const baseTheme = customTheme.type
      ? getThemeByType(customTheme.type)
      : currentTheme;
    const merged = mergeTheme(baseTheme, customTheme);
    const userTheme =
      currentTheme.type !== merged.type ? switchTheme(merged) : merged;

    return (
      <ThemeContext.Provider value={userTheme}>
        {children}
      </ThemeContext.Provider>
    );
  }
};

export default ThemeProvider;
