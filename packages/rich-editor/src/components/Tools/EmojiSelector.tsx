import {
  Box,
  Button,
  Container,
  IconButton,
  Popover,
  Typography,
} from "@wipsie/ui";
import React, { useState } from "react";
import { useWipsieEditor } from "../../hooks/useWipsieEditor";
import { executeEditorCommand } from "../../utils/executeEditorCommand";

export const EmojiSelector: React.FC<any> = ({ metadata, icon }) => {
  const [visible, setVisible] = useState(false);
  const { updateContent, editorId, emojiCatalog = [] } = metadata;
  const { editorField } = useWipsieEditor(editorId);

  const handleVisible = () => {
    setVisible(!visible);
    editorField && editorField.focus();
  };

  const handleSubmit = (emoji) => {
    const element = document.createElement("span");
    element.classList.add("wuire-emoji");
    element.innerHTML = emoji;

    executeEditorCommand(editorField, "insertHTML", element.outerHTML);

    updateContent();
  };

  return (
    <Popover
      content={
        <div tabIndex={-1}>
          {Object.keys(emojiCatalog).map((key) => {
            const emojis = emojiCatalog[key];
            return (
              <Container variant="neumorphic" key={key} tabIndex={-1}>
                <Typography variant="h5" color="primary" tabIndex={-1}>
                  {key}
                </Typography>
                {emojis.map((emoji) => {
                  return (
                    <IconButton
                      size="small"
                      key={emoji}
                      tabIndex={-1}
                      onClick={() => {
                        handleSubmit(emoji);
                      }}
                    >
                      <span dangerouslySetInnerHTML={{ __html: emoji }} />
                    </IconButton>
                  );
                })}
              </Container>
            );
          })}
        </div>
      }
      width={30}
      position="bottom right"
      visible={visible}
      spacing={0.2}
      backgroundColor="background"
      backdrop
      onBackdropClick={handleVisible}
      backdropProps={{
        duration: 100,
        noPortal: true,
      }}
      arrow
    >
      <Button
        variant="ghost"
        shape="rounded"
        size="small"
        onClick={handleVisible}
        tabIndex={-1}
      >
        {icon}
      </Button>
    </Popover>
  );
};
