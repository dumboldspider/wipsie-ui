import { ThemeTypes } from "../config/propTypes";

export interface WipsieThemesPalette {
  highlight: string;
  background: string;
  shade: string;
  subtext: string;
  text: string;

  basic: WipsieThemeItem;
  primary: WipsieThemeItem;
  secondary: WipsieThemeItem;

  success: WipsieThemeItem;
  info: WipsieThemeItem;
  warning: WipsieThemeItem;
  danger: WipsieThemeItem;

  white: string;
  black: string;
  cyan: string;
  cyanLighter: string;
  cyanLight: string;
  cyanDark: string;
  violet: string;
  violetLighter: string;
  violetLight: string;
  violetDark: string;
  purple: string;
  magenta: string;
}

export interface WipsieThemeItem {
  100: string;
  300: string;
  500: string;
  700: string;
  900: string;
  shadow: string;
}

export interface WipsieThemesExpressiveness {
  linkStyle: string;
  linkHoverStyle: string;
  dropdownBoxShadow: string;
  scrollerStart: string;
  scrollerEnd: string;
  shadowSmall: string;
  shadowMedium: string;
  shadowLarge: string;
  portalOpacity: number;
}

export interface WipsieThemesLayout {
  gap: string;
  gapNegative: string;
  gapHalf: string;
  gapHalfNegative: string;
  gapQuarter: string;
  gapQuarterNegative: string;
  pageMargin: string;
  pageWidth: string;
  pageWidthWithMargin: string;
  breakpointMobile: string;
  breakpointTablet: string;
  radius: string;
  stroke: string;
}

export interface WipsieThemesFonts {
  h1: WipsieThemesFontItem;
  h2: WipsieThemesFontItem;
  h3: WipsieThemesFontItem;
  h4: WipsieThemesFontItem;
  h5: WipsieThemesFontItem;
  h6: WipsieThemesFontItem;
  subtitle1: WipsieThemesFontItem;
  subtitle2: WipsieThemesFontItem;
  body1: WipsieThemesFontItem;
  body2: WipsieThemesFontItem;
  caption1: WipsieThemesFontItem;
  caption2: WipsieThemesFontItem;
  code: WipsieThemesFontItem;
  label: WipsieThemesFontItem;
}

export interface WipsieThemesFontItem {
  fontFamily: string;
  fontSize: string;
  fontWeight: string | number;
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
  lineHeight?: string | number;
  letterSpacing?: string | number;
}

export interface WipsieThemesBreakpoints {
  xs: BreakpointsItem;
  sm: BreakpointsItem;
  md: BreakpointsItem;
  lg: BreakpointsItem;
  xl: BreakpointsItem;
}

export interface BreakpointsItem {
  min: string;
  max: string;
}

export interface WipsieThemesCommonPalette {
  white: string;
  black: string;
  cyan: string;
  cyanLighter: string;
  cyanLight: string;
  cyanDark: string;
  violet: string;
  violetLighter: string;
  violetLight: string;
  violetDark: string;
  purple: string;
  magenta: string;
}

export interface WipsieThemes {
  type: ThemeTypes;
  font: WipsieThemesFonts;
  layout: WipsieThemesLayout;
  palette: WipsieThemesPalette;
  breakpoints: WipsieThemesBreakpoints;
  expressiveness: WipsieThemesExpressiveness;
}
