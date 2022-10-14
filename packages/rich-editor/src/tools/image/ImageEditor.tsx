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
import { getImage, insertImage } from "./ImageUtils";
import { ImageState } from "./Image.types";
import { UseWipsieEditorReturn } from "../../hooks/useWipsieEditor";
// import { getBase64 } from "../../utils/getBase64";

// const invalidUrlMessage =
//   'Please enter a valid URL, e.g., "http://example.com/test.png".';

export interface ImageEditorProps {
  open: boolean;
  handleToggle: () => void;
  uploadUrl: string;
  accessKey: string;
  acceptedFormats: string;
  maxFileSize: number;
  editorProps: UseWipsieEditorReturn;
}

export function ImageEditor({
  open = false,
  handleToggle,
  uploadUrl,
  accessKey,
  acceptedFormats,
  maxFileSize,
  editorProps,
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
    saveToServer(file, uploadUrl, accessKey)
      .then(async (result: any) => {
        const { formats, id, url } = result;

        const imageUrl = formats ? result?.formats?.large?.url : id ? id : url; // get large compressed image

        setFile(null);
        setIsUploading(false);

        handleImageSave({
          url: imageUrl,
          alt: "",
        });
      })
      .catch(() => {
        setFile(null);
        setIsUploading(false);

        handleImageCancel();
      });
  };

  const {
    editor,
    classes: { Transforms },
  } = editorProps;

  // set selection after editor is loaded
  let selection = null;
  if (editor) {
    selection = editor.selection;
  }

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
      editorProps.options.editorFocus();
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

  const handleImageSave = async ({
    url,
    alt,
  }: {
    url: string;
    alt: string;
  }) => {
    let newSelection = selection;
    if (newSelection === null) {
      newSelection = {
        anchor: { path: [0], offset: 0 },
        focus: { path: [0], offset: 0 },
      };
    }

    // get file base64
    // let base64 = file ? await getBase64(file) : null;

    if (url) {
      editorProps.options.editorFocus();
      Transforms.select(editor, newSelection);

      insertImage(editor, url, alt); // insert image
      // imageState.isNew
      //   ? insertImage(editor, url, alt)
      //   : updateImage(editor, url, alt);
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
