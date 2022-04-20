import React, { useState } from "react";
import { Button, CssBaseline, Flex, Page, ThemeProvider } from "@wipsie/ui";
import { RichTextExample } from "../RichTextExample";

export default {
  title: "Rich Editor/HTML Editor",
  component: RichTextExample,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const WipsieSlateEditorTesting = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "cosmic">("light");

  const handleThemeChange = () => {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      } else if (prev === "dark") {
        return "cosmic";
      } else {
        return "light";
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Page
        className="App"
        backgroundColor="shade"
        display="flex"
        direction="column"
        align="center"
        justify="center"
        p={2}
      >
        <Button backgroundColor="primary" onClick={handleThemeChange}>
          {theme}
        </Button>

        <Flex fullWidth maxWidth="700px">
          <RichTextExample />
        </Flex>
      </Page>
    </ThemeProvider>
  );
};
