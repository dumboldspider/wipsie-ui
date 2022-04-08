import { Container, useTheme, Spacing, Flex } from "@wipsie/ui";
import React from "react";
import { QuillEditor, defaultToolbar } from ".";

export default {
  title: "Rich Editor/SAMPLE1",
  component: QuillEditor,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const WithBar = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState("<b>Hello world!!!</b>");

  const handleChange = async (value: string) => {
    setValue(value);
  };

  return (
    <Flex fullWidth maxWidth="700px">
      <Container p={"0px"} variant="neumorphic" elevation={5} fullWidth>
        <QuillEditor
          value={value}
          onChange={handleChange}
          toolbar={{ ...defaultToolbar, color: false, background: false }}
          editorBackgroundColor={theme.palette.shade}
          toolbarBackgroundColor={theme.palette.background}
        />
      </Container>

      <Spacing height={2} />

      <Container
        variant="neumorphic"
        elevation={5}
        fullWidth
        dangerouslySetInnerHTML={{
          __html: value,
        }}
      ></Container>
    </Flex>
  );
};
