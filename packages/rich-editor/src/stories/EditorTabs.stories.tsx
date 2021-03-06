import React from "react";
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
  TabPanel,
  Tabs,
  Grid,
  useTheme,
  Box,
} from "@wipsie/ui";
import { WipsieSlateEditor } from "../WipsieSlateEditor";
import { WipsieSlateToolbar } from "../WipsieSlateToolbar";
import { WipsieSlateContent } from "../WipsieSlateContent";
import { HeadingsPlugin, HeadingDropdown } from "../tools/heading";
import { AlignmentGroup } from "../tools/alignment";
import { ListGroup } from "../tools/list";
import { HoveringToolbar } from "../HoveringToolbar";
import { LinkButton, LinkPlugin } from "../tools/link";
import { ImageButton, ImagePlugin } from "../tools/image";
import { useEditorFirstNode, useEditorNodes } from "../hooks/useEditorNodes";
import { MentionsPlugin } from "../tools/mentions";
import { useMemo } from "react";
import { SpoilerPlugin, SpoilerButton } from "../tools/spoiler";

export default {
  title: "Rich Editor/Editor Preview Tab",
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
          text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. ",
        },
        {
          type: "mention",
          key: "danbrown",
          id: "49dd78a4-4ed2-4686-8482-6ad2b4ba1dac",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          text: ", ",
        },
        {
          type: "mention",
          key: "notdanbrown",
          id: "fdc17e3b-256b-4b5c-a76b-3f5b52c6ab30",
          children: [
            {
              text: "",
            },
          ],
        },
        {
          text: " ",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "awdawddwawdawdawdawd",
          bold: true,
        },
      ],
      align: "center",
    },
    {
      type: "paragraph",
      align: "center",
      children: [
        {
          text: "",
        },
        {
          type: "link",
          url: "https://danielbrown.com.br",
          openInNewTab: true,
          children: [
            {
              text: "https://danielbrown.com.br",
            },
          ],
        },
        {
          text: "",
        },
      ],
    },
    {
      type: "paragraph",
      align: "center",
      children: [
        {
          text: "",
        },
      ],
    },
    {
      type: "image",
      url: "https://env.staging.files.library.wipsie.com/other/6619d443-2193-4160-9f30-4b0d6a1d44a3_7ca9307b-4c95-40e1-b9ea-8ecf0730e8e8-large.jpg",
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
          text: "awdawdaw ",
          bold: true,
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          spoiler: true,
          text: "this is hidden because is a spoiler",
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
    {
      type: "image",
      url: "https://env.staging.files.library.wipsie.com/other/d9056fe8-600c-4516-8385-9c4cb3d8e736_52e27f61-f31a-43c1-93dc-14fdbf67058f-large.png",
      alt: "",
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
      new SpoilerPlugin(),
      new LinkPlugin(),
      new ImagePlugin(),
      new MentionsPlugin({
        getUserUrl: "https://env.staging.api.wipsie.com/auth/users/",
        searchUrl:
          "https://env.staging.api.wipsie.com/auth/users/search?limit=5&terms=",
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

  const mentions = useEditorNodes(value, {
    type: "mention",
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

  // Tab management
  const tabs = [
    {
      label: "Editor",
      icon: "",
    },
    {
      label: "Preview",
      icon: "",
    },
    {
      label: "Output",
      icon: "",
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = React.useState<number>(0);
  const handleTabChange = (newValue: number) => {
    setActiveTabIndex(newValue);
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <Box fullWidth m={2} backgroundColor="shade">
        <Grid container>
          <Grid item xs={12}>
            <Popover position="right" content={activeTheme} arrow>
              <Button
                variant="contained"
                backgroundColor="primary"
                onClick={handleThemeChange}
              >
                Theme
              </Button>
            </Popover>
          </Grid>
          <Grid item xs={12}>
            <Tabs
              value={activeTabIndex}
              onChange={handleTabChange}
              items={tabs}
            />

            {/* EditorPanel */}
            <Container fullWidth maxWidth="500px">
              <TabPanel value={activeTabIndex} index={0}>
                <WipsieSlateEditor
                  value={value}
                  onChange={onChange}
                  plugins={plugins}
                >
                  <HoveringToolbar>
                    <BoldButton />
                    <ItalicButton />
                    <UnderlineButton />
                    <SpoilerButton />
                  </HoveringToolbar>

                  <WipsieSlateToolbar>
                    <BoldButton />
                    <ItalicButton />
                    <UnderlineButton />
                    <StrikethroughButton />
                    <SpoilerButton />
                    <HeadingDropdown icon={"H"} />

                    <ListGroup />
                    <AlignmentGroup />

                    <LinkButton />
                    <ImageButton
                      uploadUrl="https://env.staging.api.wipsie.com/posts/upload"
                      accessKey=""
                    />
                  </WipsieSlateToolbar>

                  <WipsieSlateContent
                    placeholder="Enter some amazing text..."
                    spellCheck
                    autoFocus
                    readOnly={false}
                  />
                </WipsieSlateEditor>
              </TabPanel>

              {/* Preview Panel */}
              <TabPanel value={activeTabIndex} index={1}>
                <WipsieSlateEditor value={value} plugins={plugins}>
                  <WipsieSlateContent readOnly />
                </WipsieSlateEditor>
              </TabPanel>

              {/* Output Panel */}
              <TabPanel value={activeTabIndex} index={2}>
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
                <Typography variant="h3">Mentions:</Typography>
                <Spacing height={1} />
                <code>{JSON.stringify(mentions, null, 2)}</code>
              </TabPanel>
            </Container>
          </Grid>
        </Grid>

        <Spacing height={5} />
      </Box>
    </ThemeProvider>
  );
};
