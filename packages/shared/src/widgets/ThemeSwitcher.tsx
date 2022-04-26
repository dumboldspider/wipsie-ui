import React from "react";
import { ButtonGroup, Typography, IconButton, Spacing } from "@wipsie/ui";
import { WipsieBaseThemes } from "../types/Theme.types";

export type ThemeSwitcherProps = {
  title?: string;
  theme: WipsieBaseThemes;
  setThemeCallback: (theme: string) => void;
};

export function ThemeSwitcher({
  title = "Theme Color",
  theme = "light",
  setThemeCallback,
}: ThemeSwitcherProps) {
  return (
    <>
      {title && (
        <>
          <Typography variant="h4">{title}</Typography>
          <Spacing height={1} />
        </>
      )}
      <ButtonGroup size="small" fullWidth>
        <IconButton
          variant={theme === "light" ? "outlined" : "contained"}
          style={{ borderWidth: 2 }}
          onClick={() => setThemeCallback && setThemeCallback("light")}
        >
          Light
        </IconButton>
        <IconButton
          variant={theme === "dark" ? "outlined" : "contained"}
          style={{ borderWidth: 2 }}
          onClick={() => setThemeCallback && setThemeCallback("dark")}
        >
          Dark
        </IconButton>
        <IconButton
          variant={theme === "cosmic" ? "outlined" : "contained"}
          style={{ borderWidth: 2 }}
          onClick={() => {
            setThemeCallback && setThemeCallback("cosmic");
          }}
        >
          Cosmic
        </IconButton>
      </ButtonGroup>
    </>
  );
}
