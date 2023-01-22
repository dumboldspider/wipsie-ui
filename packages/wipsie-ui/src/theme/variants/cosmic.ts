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
    500: "#310144",
    700: "#230037",
    900: "#19002D",
    shadow: "#0000003D",
  },
  neutral: {
    100: "#FFFFFF",
    300: "#F7F9FC",
    500: "#EEF1F6",
    700: "#C4CDD5",
    900: "#919EAB",
    shadow: "#818B9F3D",
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
    100: "#E3FBD3",
    300: "#93EB7B",
    500: "#2FBF28",
    700: "#148922",
    900: "#075B20",
    shadow: "#1489223D",
  },
  info: {
    100: "#C7F8EA",
    300: "#56D9CA",
    500: "#007B82",
    700: "#00485D",
    900: "#00263E",
    shadow: "#00485D3D",
  },
  warning: {
    100: "#FBF3C9",
    300: "#E7CB5D",
    500: "#AF8401",
    700: "#7D5800",
    900: "#533600",
    shadow: "#7D58003D",
  },
  danger: {
    100: "#FAE5CF",
    300: "#E2976D",
    500: "#A03416",
    700: "#73120B",
    900: "#4C0409",
    shadow: "#73120B3D",
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
