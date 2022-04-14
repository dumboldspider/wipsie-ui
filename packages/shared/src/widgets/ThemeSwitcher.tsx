import React from "react";
import { ButtonGroup, Typography, IconButton, Spacing } from "@wipsie/ui";

export function ThemeSwitcher({
  title = true,
  theme = "light",
  setThemeCallback,
}) {
  return (
    <>
      {title && (
        <>
          <Typography variant="h4">Theme Color</Typography>
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
