import { create } from "@storybook/theming";
import lightDefault from "../../src/theme/variants/light";

export default create({
  base: "light",

  colorPrimary: lightDefault.palette.secondary[500],
  colorSecondary: lightDefault.palette.primary[500],

  // UI
  appBg: lightDefault.palette.background,
  appContentBg: lightDefault.palette.highlight,
  appBorderColor: lightDefault.palette.shade,
  appBorderRadius: 4,

  // Typography
  fontBase: lightDefault.font.body1.fontFamily,
  fontCode: "monospace",

  // Text colors
  textColor: lightDefault.palette.text,
  textInverseColor: lightDefault.palette.background,

  // Toolbar default and active colors
  barTextColor: lightDefault.palette.background,
  barSelectedColor: lightDefault.palette.secondary[500],
  barBg: lightDefault.palette.primary[500],

  // Form colors
  inputBg: lightDefault.palette.background,
  inputBorder: lightDefault.palette.shade,
  inputTextColor: lightDefault.palette.text,
  inputBorderRadius: 4,

  brandTitle: "Wipsie",
  brandUrl: "https://wipsie.com",
  brandImage: "wipsie-logo.svg",
});
