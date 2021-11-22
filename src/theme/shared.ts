import {
  WipsieThemesBreakpoints,
  WipsieThemesFonts,
  WipsieThemesLayout,
  WipsieThemesCommonPalette,
} from "./index";

export const defaultFont: WipsieThemesFonts = {
  h1: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "2em",
    fontWeight: 700,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  h2: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "1.5em",
    fontWeight: 700,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  h3: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "1.17em",
    fontWeight: 700,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  h4: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "1em",
    fontWeight: 700,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  h5: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "0.85em",
    fontWeight: 700,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  h6: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "0.75em",
    fontWeight: 700,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  subtitle1: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "1em",
    fontWeight: 700,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  subtitle2: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "1em",
    fontWeight: 500,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  body1: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "1em",
    fontWeight: 500,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  body2: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  caption1: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  caption2: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  code: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
    letterSpacing: "",
  },
  label: {
    fontFamily:
      '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "0.8em",
    fontWeight: 700,
    textTransform: "uppercase",
    lineHeight: 1,
    letterSpacing: "",
  },
};

export const defaultBreakpoints: WipsieThemesBreakpoints = {
  xs: {
    min: "0",
    max: "650px",
  },
  sm: {
    min: "650px",
    max: "960px",
  },
  md: {
    min: "960px",
    max: "1280px",
  },
  lg: {
    min: "1280px",
    max: "1400px",
  },
  xl: {
    min: "1400px",
    max: "1920px",
  },
};

export const defaultLayout: WipsieThemesLayout = {
  spacingUnit: 8,
  radius: "15px",
  padding: "1em",
  gap: "16pt",
  gapNegative: "-16pt",
  gapHalf: "8pt",
  gapHalfNegative: "-8pt",
  gapQuarter: "4pt",
  gapQuarterNegative: "-4pt",
  pageMargin: "16pt",
  pageWidth: "750pt",
  pageWidthWithMargin: "782pt",
  breakpointMobile: defaultBreakpoints.xs.max,
  breakpointTablet: defaultBreakpoints.sm.max,
  stroke: "2px",
  modalIndex: 1000,
};

export const commonPalette: WipsieThemesCommonPalette = {
  white: "#ffffff",
  black: "#000000",
  cyanLighter: "#aaffec",
  cyanLight: "#79ffe1",
  cyan: "#50e3c2",
  cyanDark: "#29bc9b",
  violetLighter: "#e3d7fc",
  violetLight: "#8a63d2",
  violet: "#7928ca",
  violetDark: "#4c2889",
  purple: "#f81ce5",
  magenta: "#eb367f",
};
