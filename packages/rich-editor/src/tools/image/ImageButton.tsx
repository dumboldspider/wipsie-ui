import React, { useState } from "react";

import { ImageEditor } from "./ImageEditor";
import { PictureOutlined } from "@ant-design/icons";
import { Button } from "@wipsie/ui";
import { ImageButtonProps } from "./Image.types";

export function ImageButton({
  accessKey = null,
  uploadUrl = null,
  acceptedFormats = "image/jpeg, image/png, image/gif",
  maxFileSize = 1024 * 1024 * 20,
  content,
  startIcon,
  endIcon,
  shape = "rounded",
  size = "small",
  backgroundColor = "primary",
  variant = "ghost",
  color,
  editorProps,
}: ImageButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Button
        onClick={handleToggleModal}
        size={size}
        variant={variant}
        shape={shape}
        color={color}
        startIcon={startIcon}
        endIcon={endIcon}
        backgroundColor={backgroundColor}
      >
        {content || <PictureOutlined />}
      </Button>

      <ImageEditor
        open={modalOpen}
        handleToggle={handleToggleModal}
        uploadUrl={uploadUrl}
        accessKey={accessKey}
        acceptedFormats={acceptedFormats}
        maxFileSize={maxFileSize}
        editorProps={editorProps}
      />
    </>
  );
}
