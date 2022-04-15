import {
  Button,
  Container,
  Fixed,
  Grid,
  IconButton,
  Input,
  Modal,
  Spacing,
  Typography,
} from "@wipsie/ui";
import React, { useState } from "react";
import saveToServer from "../../utils/saveToServer";
import { useWipsieEditor } from "../../hooks/useWipsieEditor";

export const ImageUploadModal = ({ metadata, icon }) => {
  const [visible, setVisible] = useState(false);

  const [currentSelect, setCurrentSelect] = useState<Range>(null);

  const { editorId, updateContent, uploadUrl, acceptedFormats, maxFileSize } =
    metadata;
  const { editorField } = useWipsieEditor(editorId);

  const handleVisibility = () => {
    setVisible(!visible);

    // get current selection
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      setCurrentSelect(range);
    }
  };

  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File>(null);

  const handleSubmit = async () => {
    if (!uploadUrl) {
      alert("No upload url provided");
      return;
    }

    if (
      currentSelect &&
      editorField &&
      editorField.contains(currentSelect.startContainer)
    ) {
      setIsUploading(true);

      saveToServer(file, uploadUrl)
        .then((result: any) => {
          const element = document.createElement("img");
          element.src = result?.formats?.large?.url;

          currentSelect.deleteContents();
          currentSelect.insertNode(element);

          updateContent();
          setFile(null);
          setIsUploading(false);
          setVisible(false);
        })
        .catch(() => {
          const element = document.createElement("span");
          element.textContent = "[Error uploading image]";

          currentSelect.deleteContents();
          currentSelect.insertNode(element);

          updateContent();
          setFile(null);
          setIsUploading(false);
          setVisible(false);
        });
    } else {
      setVisible(false);
    }
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
          <Typography variant="h2">Insert Image</Typography>
          <Spacing height={1} />
          <Typography variant="body1">
            Some explanation about what this modal does.
          </Typography>
          <Spacing height={2} />
          <Grid container spacing={0.5}>
            <Grid item xs={12} md={6}>
              <Input
                type="file"
                accept={acceptedFormats}
                size="mini"
                fullWidth
                onChange={(e: any) => {
                  // max file size is 5mb
                  if (e.target.files[0].size > maxFileSize) {
                    alert("File size is too big");
                    return;
                  }
                  setFile(e.target.files[0]);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                disabled={isUploading || !file}
                onClick={handleSubmit}
                fullWidth
              >
                {isUploading ? "Uploading..." : "Upload"}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </>
  );
};
