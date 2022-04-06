import { create } from "@storybook/theming";
import darkDefault from "../../packages/wipsie-ui/src/theme/variants/dark";

export default create({
  base: "dark",

  colorPrimary: darkDefault.palette.secondary[500],
  colorSecondary: darkDefault.palette.primary[500],

  // UI
  appBg: darkDefault.palette.background,
  appContentBg: darkDefault.palette.highlight,
  appBorderColor: darkDefault.palette.shade,
  appBorderRadius: 4,

  // Typography
  fontBase: darkDefault.font.body1.fontFamily,
  fontCode: "monospace",

  // Text colors
  textColor: darkDefault.palette.text,
  textInverseColor: darkDefault.palette.background,

  // Toolbar default and active colors
  barTextColor: darkDefault.palette.background,
  barSelectedColor: darkDefault.palette.secondary[500],
  barBg: darkDefault.palette.primary[500],

  // Form colors
  inputBg: darkDefault.palette.background,
  inputBorder: darkDefault.palette.shade,
  inputTextColor: darkDefault.palette.text,
  inputBorderRadius: 4,

  brandTitle: "Wipsie",
  brandUrl: "https://wipsie.com",
  brandImage: "wipsie-logo.svg",
});
