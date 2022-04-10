import React, { useState } from "react";
import {
  Button,
  Container,
  CssBaseline,
  Flex,
  Page,
  Spacing,
  Typography,
  ThemeProvider,
} from "@wipsie/ui";
import {
  boldTool,
  italicTool,
  underlineTool,
  OutputContainer,
  WipsieEditor,
} from "../index";

export default {
  title: "Rich Editor/SAMPLE",
  component: WipsieEditor,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const WithBar = () => {
  const initialValue = `
  <h1 align="center">Hello World</h1>
  <p>This is a simple <span class="wuire-rgb">example</span><b></b> of a React component.</p><p><br></p>
  <p>Click on the box to: <span class="wuire-spoiler" onclick="this.classList.toggle('wuire-spoiler-open');">See the Spoiler</span></p>
`;

  const [value, setValue] = useState(initialValue);
  const [theme, setTheme] = useState<"light" | "dark" | "cosmic">("light");
  const onChange = (value: string) => {
    setValue(value);
  };

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

  const toolbar = [[boldTool, italicTool, underlineTool]];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Page
        className="App"
        backgroundColor="primary"
        display="flex"
        direction="column"
        align="center"
        justify="center"
        p={2}
      >
        <Button backgroundColor="secondary" onClick={handleThemeChange}>
          {theme}
        </Button>

        <Flex fullWidth maxWidth="700px">
          <Spacing height={5} />

          <Typography variant="h2" color="white">
            Editor
            <Typography variant="body1" color="white">
              (What you See is What you Get)
            </Typography>
          </Typography>
          <Spacing height={1} />
          <WipsieEditor
            id="editor-test"
            initialValue={initialValue}
            value={value}
            onChange={onChange}
            debug={false}
            toolbar={toolbar}
          />

          <Spacing height={5} />

          <Typography variant="h2" color="white">
            Output HTML
          </Typography>
          <Spacing height={1} />
          <Container fullWidth>
            <code>{value}</code>
          </Container>

          <Spacing height={5} />

          <Typography variant="h2" color="white">
            Output Render
            <Typography variant="body1" color="white">
              (intended to be the same as you see in the editor)
            </Typography>
          </Typography>
          <Spacing height={1} />
          <Container fullWidth>
            <OutputContainer dangerouslySetInnerHTML={{ __html: value }} />
          </Container>
          <Spacing height={5} />

          <Typography variant="h2" color="white">
            Commands
          </Typography>
          <Spacing height={1} />
          <Container fullWidth>
            Ctrl + B = Bold
            <br />
            Ctrl + I = Italic
            <br />
            Ctrl + U = Underline
            <br />
            Ctrl + Z = Undo
            <br />
            Ctrl + Y = Redo
            <br />
            Ctrl + A = Select All
            <br />
            Ctrl + C = Copy
            <br />
            Ctrl + V = Paste
            <br />
            Ctrl + X = Cut
            <br />
            Esc = Clear Format
          </Container>

          <Spacing height={5} />
        </Flex>
      </Page>
    </ThemeProvider>
  );
};
