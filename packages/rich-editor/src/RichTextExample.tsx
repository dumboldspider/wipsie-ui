import React from "react";
import { BoldButton, BoldPlugin } from "./tools/bold";
import { ItalicButton, ItalicPlugin } from "./tools/italic";
import { UnderlineButton, UnderlinePlugin } from "./tools/underline";
import {
  StrikethroughButton,
  StrikethroughPlugin,
} from "./tools/strikethrough";
import { Container, Spacing, Typography } from "@wipsie/ui";
import { WipsieSlateEditor } from "./WipsieSlateEditor";
import { WipsieSlateToolbar } from "./WipsieSlateToolbar";
import { WipsieSlateContent } from "./WipsieSlateContent";
import { HeadingsPlugin, HeadingDropdown } from "./tools/heading";
import { AlignmentGroup } from "./tools/alignment";
import { ListGroup } from "./tools/list";
import { HoveringToolbar } from "./HoveringToolbar";
import { LinkButton } from "./tools/link";
import { ImageButton } from "./tools/image";
import { useEditorFirstNode, useEditorNodes } from "./hooks/useEditorNodes";
// import { MentionsRecommendations } from "./tools/mentions";
// import { TypingCompanion } from "./TypingCompanion";

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
  {
    type: "paragraph",
    children: [
      {
        text: "",
      },
      {
        type: "link",
        url: "https://lamparinas.com.br",
        openInNewTab: true,
        children: [
          {
            text: "https://lamparinas.com.br",
          },
        ],
      },
      {
        text: "",
      },
    ],
  },
];

const plugins = [
  BoldPlugin(),
  ItalicPlugin(),
  UnderlinePlugin(),
  StrikethroughPlugin(),
  HeadingsPlugin(),
];

export const RichTextExample = () => {
  const [value, setValue] = React.useState(initialValue);

  const images = useEditorNodes(value, {
    type: "image",
  });

  const title = useEditorFirstNode(value, {
    type: "heading",
    level: "h1",
  });

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <>
      <Container maxWidth="900px" fullWidth>
        <Typography variant="h3">Editor:</Typography>
        <Spacing height={1} />
        <WipsieSlateEditor value={value} onChange={onChange} plugins={plugins}>
          <HoveringToolbar>
            <BoldButton />
            <ItalicButton />
            <UnderlineButton />
          </HoveringToolbar>

          {/* <TypingCompanion>
            <Loading size="mini" type="rings" />
          </TypingCompanion> */}

          {/* <MentionsRecommendations /> */}

          <WipsieSlateToolbar>
            <BoldButton />
            <ItalicButton />
            <UnderlineButton />
            <StrikethroughButton />
            {/* <HeadingsDropdown /> */}
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
      </Container>

      <Spacing height={4} />

      <Container maxWidth="900px" fullWidth>
        <Typography variant="h3">Render:</Typography>
        <Spacing height={1} />
        <WipsieSlateEditor value={value}>
          <WipsieSlateContent readOnly />
        </WipsieSlateEditor>
      </Container>

      <Spacing height={4} />

      <Container maxWidth="900px" fullWidth>
        <Typography variant="h3">Render:</Typography>
        <Spacing height={1} />
        <code>{JSON.stringify(value, null, 2)}</code>
        awdawdawdawd aqui seu idiiota lost deu
        <code>{JSON.stringify(images, null, 2)}</code>
        awdawdawdawd aqui seu idiiota lost deu
        <code>{JSON.stringify(title, null, 2)}</code>
      </Container>
    </>
  );
};
