import React, { useState } from "react";

import { ImageEditor } from "./ImageEditor";
import { PictureOutlined } from "@ant-design/icons";
import { Button } from "@wipsie/ui";

export interface ImageButtonProps {
  uploadUrl: string;
  accessKey: string;
  acceptedFormats?: string;
  maxFileSize?: number;
}

export function ImageButton({
  accessKey = null,
  uploadUrl = null,
  acceptedFormats = "image/jpeg, image/png, image/gif",
  maxFileSize = 1024 * 1024 * 20,
}: ImageButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Button
        onClick={handleToggleModal}
        size="small"
        variant="ghost"
        shape="rounded"
      >
        <PictureOutlined />
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
