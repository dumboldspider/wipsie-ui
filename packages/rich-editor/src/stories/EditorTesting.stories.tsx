import React, { useMemo } from "react";
import { BoldButton, BoldPlugin } from "../tools/bold";
import { ItalicButton, ItalicPlugin } from "../tools/italic";
import { UnderlineButton, UnderlinePlugin } from "../tools/underline";
import {
  StrikethroughButton,
  StrikethroughPlugin,
} from "../tools/strikethrough";
import {
  Button,
  Container,
  Spacing,
  Typography,
  Popover,
  ThemeProvider,
  Grid,
  useTheme,
  Box,
} from "@wipsie/ui";
import { WipsieSlateEditor } from "../WipsieSlateEditor";
import { WipsieSlateToolbar } from "../WipsieSlateToolbar";
import { WipsieSlateContent } from "../WipsieSlateContent";
import { HeadingsPlugin, HeadingDropdown } from "../tools/heading";
import { HoveringToolbar } from "../HoveringToolbar";
import { LinkButton } from "../tools/link";
import { ImageButton } from "../tools/image";
import { useEditorFirstNode, useEditorNodes } from "../hooks/useEditorNodes";
import { MentionsPlugin } from "../tools/mentions";
import { ImagePlugin } from "../tools/image";

export default {
  title: "Rich Editor/HTML Editor",
  component: WipsieSlateEditor,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const WipsieSlateEditorTesting = () => {
  const initialValue = [
    {
      type: "paragraph",
      children: [
        {
          text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "awdawddwawdawdawdawd",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "",
        },
      ],
    },
    {
      type: "image",
      url: "https://env.staging.files.library.wipsie.com/other/7cf73111-6ce8-4792-b2f2-dfd7efbe660c_8cea1930-1756-4102-90c9-c9ddbc616c81-large.jpg",
      alt: "",
      children: [
        {
          text: "",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "awdawdaw",
          bold: true,
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          bold: true,
          text: "",
        },
      ],
    },
    {
      type: "heading",
      children: [
        {
          bold: true,
          text: "awdawdawd",
        },
      ],
      level: "h1",
    },
    {
      type: "paragraph",
      children: [
        {
          text: "",
        },
      ],
    },
  ];

  const plugins = useMemo(
    () => [
      new BoldPlugin(),
      new ItalicPlugin(),
      new UnderlinePlugin(),
      new StrikethroughPlugin(),
      new HeadingsPlugin(),
      new ImagePlugin({
        mediaUrl: `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/media/file`,
      }),
      new MentionsPlugin({
        getUserUrl: "https://env.staging.api.wipsie.com/auth/users/",
        searchUrl:
          "https://env.staging.api.wipsie.com/auth/users/search?terms=",
      }),
    ],
    []
  );
  const [value, setValue] = React.useState(initialValue);

  const images = useEditorNodes(value, {
    type: "image",
  });

  const title = useEditorFirstNode(value, {
    type: "heading",
    level: "h1",
  });

  const onChange = (newValue: any[]) => {
    setValue(newValue);
  };

  const [activeTheme, setActiveTheme] =
    React.useState<ThemeVariantsType>("light");

  type ThemeVariantsType = "dark" | "light" | "cosmic";

  const wipsieTheme = useTheme();

  const handleThemeChange = () => {
    switch (activeTheme) {
      case "light":
        setActiveTheme("dark");
        break;
      case "dark":
        setActiveTheme("cosmic");
        break;
      case "cosmic":
        setActiveTheme("light");
        break;
    }
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <Box fullWidth m={2} backgroundColor="shade">
        <Grid container>
          <Grid item xs={12}>
            <Popover
              position="top"
              content={
                <Typography variant="body1" color="subtext">
                  {activeTheme}
                </Typography>
              }
            >
              <Button
                variant="contained"
                backgroundColor="primary"
                onClick={handleThemeChange}
              >
                Theme
              </Button>
            </Popover>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container maxWidth="900px" fullWidth>
              <Typography variant="h3">Editor:</Typography>
              <Spacing height={1} />
              <WipsieSlateEditor
                value={value}
                onChange={onChange}
                plugins={plugins}
              >
                <HoveringToolbar>
                  <BoldButton />
                  <ItalicButton />
                  <UnderlineButton />
                </HoveringToolbar>

                <WipsieSlateToolbar>
                  <BoldButton />
                  <ItalicButton />
                  <UnderlineButton />
                  <StrikethroughButton />
                  {/* <HeadingsDropdown /> */}
                  <HeadingDropdown icon={"H"} />

                  <LinkButton />
                  <ImageButton
                    uploadUrl="https://env.staging.api.wipsie.com/media/upload"
                    accessKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhbmJyb3duIiwic3ViIjoiNDlkZDc4YTQtNGVkMi00Njg2LTg0ODItNmFkMmI0YmExZGFjIiwiaWF0IjoxNjY1Njk4NTgxLCJleHAiOjE2NjgyOTA1ODF9.LIWJllYqfX35ktGSgCo5j3xQBeegkVqLpRFfLDNK8Vk"
                  />
                </WipsieSlateToolbar>

                <WipsieSlateContent
                  placeholder="Enter some amazing text..."
                  spellCheck
                  autoFocus
                  readOnly={false}
                />
              </WipsieSlateEditor>
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container maxWidth="900px" fullWidth>
              <Typography variant="h3">Render:</Typography>
              <Spacing height={1} />
              <WipsieSlateEditor value={value}>
                <WipsieSlateContent readOnly />
              </WipsieSlateEditor>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container maxWidth="900px" fullWidth>
              <Typography variant="h3">Render:</Typography>
              <Spacing height={1} />
              <code style={{ color: wipsieTheme.palette.basic[900] }}>
                {JSON.stringify(value, null, 2)}
              </code>
              <Spacing height={1} />
              <Typography variant="h3">Images:</Typography>
              <Spacing height={1} />
              <code>{JSON.stringify(images, null, 2)}</code>
              <Spacing height={1} />
              <Typography variant="h3">Title:</Typography>
              <Spacing height={1} />
              <code>{JSON.stringify(title, null, 2)}</code>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
