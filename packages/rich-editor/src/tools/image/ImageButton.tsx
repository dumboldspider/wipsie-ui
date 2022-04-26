import React, { useState } from "react";

import { ImageEditor } from "./ImageEditor";
import { PictureOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "@wipsie/ui";

export interface ImageButtonProps {
  uploadUrl: string;
  accessKey: string;
  acceptedFormats?: string;
  maxFileSize?: number;
  content?: string | Element;
  startIcon?: ButtonProps["startIcon"];
  endIcon?: ButtonProps["endIcon"];
  shape?: ButtonProps["shape"];
  size?: ButtonProps["size"];
  backgroundColor?: ButtonProps["backgroundColor"];
  variant?: ButtonProps["variant"];
  color?: ButtonProps["color"];
}

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
      />
    </>
  );
}
