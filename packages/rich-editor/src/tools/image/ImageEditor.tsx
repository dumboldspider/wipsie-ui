import { CloseOutlined } from "@ant-design/icons";
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
import React, { useEffect, useState } from "react";
import { saveToServer } from "../../utils/saveToServer";
import { Transforms } from "slate";
import { ReactEditor, useSlate } from "slate-react";
import { ImageState } from "./ImageState";
import { getImage } from "./getImage";
import { insertImage, updateImage } from "./insertImage";

// const invalidUrlMessage =
//   'Please enter a valid URL, e.g., "http://example.com/test.png".';

export interface ImageEditorProps {
  open: boolean;
  handleToggle: () => void;
  uploadUrl: string;
  accessKey: string;
  acceptedFormats: string;
  maxFileSize: number;
}

export function ImageEditor({
  open = false,
  handleToggle,
  uploadUrl,
  // accessKey,
  acceptedFormats,
  maxFileSize,
}: ImageEditorProps) {
  const [imageState, setImageState] = useState<ImageState | undefined>();
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState<File>(null);

  const handleSave = () => {
    if (!uploadUrl) {
      alert("No upload url provided");
      return;
    }
    setIsUploading(true);
    saveToServer(file, uploadUrl)
      .then((result: any) => {
        const imageUrl = result?.formats?.large?.url; // get large compressed image

        setFile(null);
        setIsUploading(false);

        handleImageSave(imageUrl, "");
      })
      .catch(() => {
        setFile(null);
        setIsUploading(false);

        handleImageCancel();
      });
  };

  const editor = useSlate();
  const { selection } = editor;

  useEffect(() => {
    if (selection !== null) {
      const image = getImage(editor);
      const isNew = image === undefined;
      setImageState({
        isNew,
        selection,
        url: isNew ? "" : (image?.url as string),
        alt: isNew ? "" : (image?.alt as string),
      });
    }
  }, [editor, selection]);

  const handleImageCancel = () => {
    if (imageState !== undefined) {
      // reselect in editor because dialog takes away focus
      ReactEditor.focus(editor as ReactEditor);
      Transforms.select(editor, imageState.selection);
    }

    setFile(null);
    setImageState(undefined);
    setIsUploading(false);

    handleToggle();
  };

  // const handleImageRemove = () => {
  //   if (imageState !== undefined) {
  //     // reselect in editor because dialog takes away focus
  //     ReactEditor.focus(editor as ReactEditor);
  //     Transforms.select(editor, imageState.selection);

  //     // remove image
  //     removeImage(editor);
  //   }
  //   handleToggle();
  // };

  const handleImageSave = (url: string, alt: string) => {
    if (imageState !== undefined) {
      // reselect in editor because dialog takes away focus
      ReactEditor.focus(editor as ReactEditor);
      Transforms.select(editor, imageState.selection);

      // insert image
      imageState.isNew
        ? insertImage(editor, url, alt)
        : updateImage(editor, url, alt);
    }
    handleToggle();
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // max file size is 5mb
    if (event.target.files[0].size > maxFileSize) {
      alert("File size is too big");
      return;
    }
    setFile(event.target.files[0]);
  };

  /**
   * React to special keys:
   *   Enter: create image
   *   Esc: cancel
   */
  const handleUrlKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSave();
    } else if (event.key === "Escape") {
      event.preventDefault();
      handleImageCancel();
    }
  };

  return (
    <Modal
      id="modal"
      open={open}
      duration={200}
      onBackdropClick={handleImageCancel}
    >
      <Container maxWidth="350px" width="100%">
        <Fixed type="absolute" position="top right" spacing={1}>
          <IconButton
            backgroundColor="text"
            onClick={() => handleImageCancel()}
          >
            <CloseOutlined />
          </IconButton>
        </Fixed>
        <Typography variant="h3">
          {imageState?.isNew ? "Insert Image" : "Edit Image"}
        </Typography>
        <Spacing height={2} />
        <Grid container>
          <Grid item xs={12}>
            <Input
              type="file"
              accept={acceptedFormats}
              size="small"
              fullWidth
              placeholder="Paste or type an image URL..."
              autoFocus
              onChange={handleUrlChange}
              onKeyDown={handleUrlKeyDown}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button size="small" fullWidth onClick={handleImageCancel}>
              CANCEL
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              size="small"
              fullWidth
              onClick={handleSave}
              disabled={isUploading || !file}
            >
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
}
