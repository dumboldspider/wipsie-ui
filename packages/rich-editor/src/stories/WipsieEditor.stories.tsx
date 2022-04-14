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
  HTMLOutputContainer,
  WipsieHTMLEditor,
  headingsTool,
  fontsTool,
  fontSizesTool,
  unorderedListTool,
  orderedListTool,
  alignRightTool,
  alignCenterTool,
  alignLeftTool,
  codeTool,
  quoteTool,
  imageTool,
  undoTool,
  redoTool,
  clearTool,
  backColorTool,
  emojiTool,
  rgbTool,
  spoilerTool,
  foreColorTool,
  linkTool,
  defaultToolbar,
  basicToolbar,
  fullToolbar,
  ToolBarType,
} from "../index";
import "../components/wipsie-editor.css";

export default {
  title: "Rich Editor/HTML Editor",
  component: WipsieHTMLEditor,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const HTMLEditorWithBasicToolbar = () => {
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
          <Spacing height={5} />

          <Typography variant="h2" color="text">
            Editor
            <Typography variant="body1" color="text">
              (What you See is What you Get)
            </Typography>
          </Typography>
          <Spacing height={1} />

          <Typography variant="h4" color="text">
            Basic Toolbar
          </Typography>
          <WipsieHTMLEditor
            id="editor-test-2"
            initialValue={initialValue}
            value={value}
            onChange={onChange}
            debug={false}
            toolbar={basicToolbar}
          />

          <Spacing height={5} />

          <Typography variant="h2" color="text">
            Output HTML
          </Typography>
          <Spacing height={1} />
          <Container fullWidth>
            <code>{value}</code>
          </Container>

          <Spacing height={5} />

          <Typography variant="h2" color="text">
            Output Render
            <Typography variant="body1" color="text">
              (intended to be the same as you see in the editor)
            </Typography>
          </Typography>
          <Spacing height={1} />
          <Container fullWidth>
            <HTMLOutputContainer dangerouslySetInnerHTML={{ __html: value }} />
          </Container>
          <Spacing height={5} />

          <Typography variant="h2" color="text">
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

export const HTMLEditorWithDefaultToolbar = () => {
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
          <Spacing height={5} />

          <Typography variant="h2" color="text">
            Editor
            <Typography variant="body1" color="text">
              (What you See is What you Get)
            </Typography>
          </Typography>
          <Spacing height={1} />

          <Typography variant="h4" color="text">
            Default Toolbar
          </Typography>
          <WipsieHTMLEditor
            id="editor-test-2"
            initialValue={initialValue}
            value={value}
            onChange={onChange}
            debug={false}
            toolbar={defaultToolbar}
          />

          <Spacing height={5} />

          <Typography variant="h2" color="text">
            Output HTML
          </Typography>
          <Spacing height={1} />
          <Container fullWidth>
            <code>{value}</code>
          </Container>

          <Spacing height={5} />

          <Typography variant="h2" color="text">
            Output Render
            <Typography variant="body1" color="text">
              (intended to be the same as you see in the editor)
            </Typography>
          </Typography>
          <Spacing height={1} />
          <Container fullWidth>
            <HTMLOutputContainer dangerouslySetInnerHTML={{ __html: value }} />
          </Container>
          <Spacing height={5} />

          <Typography variant="h2" color="text">
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

export const HTMLEditorWithFullToolbar = () => {
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
          <Spacing height={5} />

          <Typography variant="h2" color="text">
            Editor
            <Typography variant="body1" color="text">
              (What you See is What you Get)
            </Typography>
          </Typography>
          <Spacing height={1} />

          <Typography variant="h4" color="text">
            Full Toolbar
          </Typography>
          <WipsieHTMLEditor
            id="editor-test-2"
            initialValue={initialValue}
            value={value}
            onChange={onChange}
            debug={false}
            toolbar={fullToolbar}
          />

          <Spacing height={5} />

          <Typography variant="h2" color="text">
            Output HTML
          </Typography>
          <Spacing height={1} />
          <Container fullWidth>
            <code>{value}</code>
          </Container>

          <Spacing height={5} />

          <Typography variant="h2" color="text">
            Output Render
            <Typography variant="body1" color="text">
              (intended to be the same as you see in the editor)
            </Typography>
          </Typography>
          <Spacing height={1} />
          <Container fullWidth>
            <HTMLOutputContainer dangerouslySetInnerHTML={{ __html: value }} />
          </Container>
          <Spacing height={5} />

          <Typography variant="h2" color="text">
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

export const HTMLEditorWithCustomToolbar = () => {
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

  const toolbar: ToolBarType = [
    [imageTool, boldTool, emojiTool],
    [italicTool, linkTool],
  ];

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
          <Spacing height={5} />

          <Typography variant="h2" color="text">
            Editor
            <Typography variant="body1" color="text">
              (What you See is What you Get)
            </Typography>
          </Typography>
          <Spacing height={1} />

          <Typography variant="h4" color="text">
            Custom Toolbar
          </Typography>
          <WipsieHTMLEditor
            id="editor-test-2"
            initialValue={initialValue}
            value={value}
            onChange={onChange}
            debug={false}
            toolbar={toolbar}
          />

          <Spacing height={5} />

          <Typography variant="h2" color="text">
            Output HTML
          </Typography>
          <Spacing height={1} />
          <Container fullWidth>
            <code>{value}</code>
          </Container>

          <Spacing height={5} />

          <Typography variant="h2" color="text">
            Output Render
            <Typography variant="body1" color="text">
              (intended to be the same as you see in the editor)
            </Typography>
          </Typography>
          <Spacing height={1} />
          <Container fullWidth>
            <HTMLOutputContainer dangerouslySetInnerHTML={{ __html: value }} />
          </Container>
          <Spacing height={5} />

          <Typography variant="h2" color="text">
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
