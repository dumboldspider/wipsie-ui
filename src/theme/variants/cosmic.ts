import {
  WipsieThemes,
  WipsieThemesPalette,
  WipsieThemesExpressiveness,
} from "../index";
import {
  defaultFont,
  defaultBreakpoints,
  defaultLayout,
  commonPalette,
} from "../shared";

export const palette: WipsieThemesPalette = {
  ...commonPalette,

  highlight: "#62186D",
  background: "#53025F",
  shade: "#3A0042",
  subtext: "#C5C5C5",
  text: "#FFFFFF",

  basic: {
    100: "#62186D",
    300: "#53025F",
    500: "#3A0042",
    700: "#3A0042",
    900: "#3A0042",
    shadow: "#0000003D",
  },
  primary: {
    100: "#FDE2DB",
    300: "#F79494",
    500: "#E64C68",
    700: "#A52655",
    900: "#6E0E44",
    shadow: "#E64C683D",
  },
  secondary: {
    100: "#FFF9D4",
    300: "#FFE67E",
    500: "#FFCC29",
    700: "#B78814",
    900: "#7A5307",
    shadow: "#FFCC293D",
  },
  success: {
    100: "#DDF7ED",
    300: "#6ADFB0",
    500: "#04CB7B",
    700: "#027B4A",
    900: "#004E2F",
    shadow: "#04CB7B3D",
  },
  info: {
    100: "#D6E4FF",
    300: "#84A9FF",
    500: "#3366FF",
    700: "#1939B7",
    900: "#091A7A",
    shadow: "#3366FF3D",
  },
  warning: {
    100: "#FFF7CC",
    300: "#FFE266",
    500: "#FFC300",
    700: "#B78300",
    900: "#7A5100",
    shadow: "#FFC3003D",
  },
  danger: {
    100: "#FEE7DA",
    300: "#FCA491",
    500: "#F54949",
    700: "#B0243C",
    900: "#750E31",
    shadow: "#F549493D",
  },
};

export const expressiveness: WipsieThemesExpressiveness = {
  linkStyle: "none",
  linkHoverStyle: "none",
  dropdownBoxShadow: "0 0 0 1px #333",
  scrollerStart: "rgba(255, 255, 255, 1)",
  scrollerEnd: "rgba(255, 255, 255, 0)",
  shadowSmall: "0 10px 20px -10px rgba(255, 255, 255, .15)",
  shadowMedium: "0 15px 22px -10px rgba(255, 255, 255, 0.15)",
  shadowLarge: "0 20px 24px -10px rgba(255, 255, 255, 0.15)",
  portalOpacity: 0.75,
};

export const font = defaultFont;

export const breakpoints = defaultBreakpoints;

export const layout = defaultLayout;

export const themes: WipsieThemes = {
  type: "cosmic",
  font,
  layout,
  palette,
  breakpoints,
  expressiveness,
};

export default themes;
