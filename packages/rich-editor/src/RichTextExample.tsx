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
// import { MentionsPlugin } from "./tools/mentions";

import { ImageAttachments } from "./ImageAttachments";
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

          <ImageAttachments onUpdate={() => {}} />

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
      </Container>
    </>
  );
};
