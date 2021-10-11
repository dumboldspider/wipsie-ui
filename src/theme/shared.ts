import {
  WipsieThemesBreakpoints,
  WipsieThemesFonts,
  WipsieThemesLayout,
  WipsieThemesCommonPalette,
} from "./index";

export const defaultFont: WipsieThemesFonts = {
  h1: {
    fontFamily: "Open Sans",
    fontSize: "3em",
    fontWeight: 700,
    textTransform: "none",
    lineHeight: 1.1,
  },
  h2: {
    fontFamily: "Open Sans",
    fontSize: "2em",
    fontWeight: 700,
    textTransform: "none",
    lineHeight: 1.1,
  },
  h3: {
    fontFamily: "Open Sans",
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
  },
  h4: {
    fontFamily: "Open Sans",
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
  },
  h5: {
    fontFamily: "Open Sans",
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
  },
  h6: {
    fontFamily: "Open Sans",
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
  },
  subtitle1: {
    fontFamily: "Open Sans",
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
  },
  subtitle2: {
    fontFamily: "Open Sans",
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
  },
  body1: {
    fontFamily: "Open Sans",
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
  },
  body2: {
    fontFamily: "Open Sans",
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
  },
  caption1: {
    fontFamily: "Open Sans",
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
  },
  caption2: {
    fontFamily: "Open Sans",
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
  },
  code: {
    fontFamily: "Open Sans",
    fontSize: "1em",
    fontWeight: 300,
    textTransform: "none",
    lineHeight: 1.1,
  },
  label: {
    fontFamily: "Open Sans",
    fontSize: "1em",
    fontWeight: 700,
    textTransform: "uppercase",
    lineHeight: 1.1,
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
  radius: "14px",
  stroke: "2px",
};

export const commonPalette: WipsieThemesCommonPalette = {
  white: "#fff",
  black: "#fff",
  cyan: "#50e3c2",
  cyanLighter: "#aaffec",
  cyanLight: "#79ffe1",
  cyanDark: "#29bc9b",
  violet: "#7928ca",
  violetLighter: "#e3d7fc",
  violetLight: "#8a63d2",
  violetDark: "#4c2889",
  purple: "#f81ce5",
  magenta: "#eb367f",
};
