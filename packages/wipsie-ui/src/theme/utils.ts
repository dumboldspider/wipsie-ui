import { WipsieThemes } from "./index";
import useWarning from "../hooks/useWarning";
import { DeepPartial } from "../types/deepPartial";
import { deepMergeObject } from "../utils/object";
import darkTheme from "./variants/dark";
import lightTheme from "./variants/light";
import cosmicTheme from "./variants/cosmic";

export type PartialTheme = DeepPartial<WipsieThemes>;

export type ThemeParam =
  | PartialTheme
  | ((theme: PartialTheme) => PartialTheme)
  | undefined;

export const mergeTheme = (
  current: WipsieThemes,
  custom: ThemeParam
): WipsieThemes => {
  if (!custom) return current;
  if (typeof custom === "function") {
    const merged = custom(current);
    if (!merged || typeof merged !== "object") {
      useWarning("The theme function must return object value.");
    }
    return merged as WipsieThemes;
  }
  return deepMergeObject<WipsieThemes>(current, custom as WipsieThemes);
};

export const getThemeByType = (type: WipsieThemes["type"]) => {
  const themes: { [key in WipsieThemes["type"]]: WipsieThemes } = {
    light: lightTheme,
    dark: darkTheme,
    cosmic: cosmicTheme,
  };
  return themes[type];
};

export const switchTheme = (mergedTheme: WipsieThemes): WipsieThemes => {
  return { ...getThemeByType(mergedTheme.type), ...mergedTheme };
};
