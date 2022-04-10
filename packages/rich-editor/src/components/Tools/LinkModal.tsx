import {
  Button,
  CheckBox,
  Container,
  Fixed,
  Grid,
  IconButton,
  Input,
  Modal,
  Spacing,
  Typography,
} from "@wipsie/ui";
import React, { useEffect, useState } from "react";
import { useWipsieEditor } from "../../hooks/useWipsieEditor";

export const LinkModal = ({ metadata, icon }) => {
  const [visible, setVisible] = useState(false);

  const [link, setLink] = useState("https://");
  const [target, setTarget] = useState("_blank");
  const [text, setText] = useState("");
  const [currentSelect, setCurrentSelect] = useState<Range>(null);

  const { editorId, updateContent } = metadata;
  const { editorField } = useWipsieEditor(editorId);

  useEffect(() => {
    if (currentSelect) {
      setText(currentSelect.toString());
    }
  }, [currentSelect]);

  const handleVisibility = () => {
    setVisible(!visible);

    // get current selection
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      setCurrentSelect(range);
    }
  };

  const handleSubmit = () => {
    if (
      currentSelect &&
      editorField &&
      editorField.contains(currentSelect.startContainer)
    ) {
      const element = document.createElement("a");
      element.href = link;
      element.target = target;
      element.textContent = text;

      currentSelect.deleteContents();
      currentSelect.insertNode(element);
    }

    updateContent();
    setVisible(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        shape="rounded"
        size="small"
        onClick={handleVisibility}
      >
        {icon}
      </Button>

      <Modal
        id="modal"
        open={visible}
        duration={200}
        onBackdropClick={() => setVisible(false)}
        onEscapeKeyDown={() => setVisible(false)}
      >
        <Container maxWidth="500px" width="100%" variant="neumorphic">
          <Fixed type="absolute" position="top right" spacing={1}>
            <IconButton
              backgroundColor="text"
              onClick={() => handleVisibility()}
            >
              X
            </IconButton>
          </Fixed>
          <Typography variant="h2">Insert Url</Typography>
          <Spacing height={1} />
          <Typography variant="body1">
            Some explanation about what this modal does.
          </Typography>
          <Spacing height={2} />
          <Grid container spacing={0.5}>
            <Grid item xs={12} md={6}>
              <Input
                type="text"
                value={link}
                onChange={(e) => {
                  setLink(e.currentTarget.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CheckBox
                label="Open in new tab"
                checked={target === "_blank"}
                onClick={(e: any) => {
                  setTarget(target === "_blank" ? "_self" : "_blank");
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                type="text"
                value={text}
                placeholder="The text to display"
                onChange={(e) => {
                  setText(e.currentTarget.value);
                }}
              />
            </Grid>
          </Grid>
          <Spacing height={1} />
          <Button onClick={handleSubmit}>Insert Link</Button>
        </Container>
      </Modal>
    </>
  );
};
