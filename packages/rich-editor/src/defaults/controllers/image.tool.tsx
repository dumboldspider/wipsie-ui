import { PictureOutlined } from "@ant-design/icons";
import { ImageUploadModal } from "../../components/Tools/ImageUploadModal";
import React from "react";
import { ToolbarItemProps } from "../../components/Toolbar.types";

export const imageTool: ToolbarItemProps = {
  id: "image",
  command: "insertImage",
  format: "custom",
  value: null,
  icon: <PictureOutlined />,
  component: ImageUploadModal,
  metadata: {
    uploadUrl: "https://env.staging.api.wipsie.com/posts/upload",
    acceptedFormats: "image/jpeg, image/png, image/gif",
    maxFileSize: 1024 * 1024 * 20, // 20MB
  },
};
