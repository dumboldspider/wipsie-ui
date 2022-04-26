import { CloseOutlined } from "@ant-design/icons";
import {
  Button,
  CheckBox,
  Container,
  Fixed,
  Flex,
  Grid,
  IconButton,
  Input,
  Modal,
  responsive,
  Spacing,
  Typography,
} from "@wipsie/ui";
import React, { useState } from "react";
import { useSlate } from "slate-react";
import { isValidHttpUrl } from "../../utils/isValidHttpUrl";
import { isLinkActive } from "./isLinkActive";
import { LinkState } from "./LinkState";

const invalidUrlMessage =
  'Please enter a valid URL, e.g., "http://google.com".';

export interface LinkEditorProps {
  linkState: LinkState;
  onSave: (url: string, openInNewTab: boolean) => void;
  onRemove: () => void;
  onCancel: () => void;
  open: boolean;
  handleToggle: () => void;
}

export function LinkEditor({
  linkState,
  onSave,
  onRemove,
  onCancel,
  open = false,
  handleToggle,
}: LinkEditorProps) {
  const [url, setUrl] = useState(linkState?.url || "");
  const [isUrlTouched, setUrlTouched] = useState(false);
  const [isUrlValid, setUrlValid] = useState(true);
  const [openInNewTab, setOpenInNewTab] = useState<boolean>(
    linkState?.openInNewTab || true
  );
  const editor = useSlate();

  function handleOpenInNewTab() {
    setOpenInNewTab(!openInNewTab);
  }

  const handleSave = () => {
    if (isValidHttpUrl(url)) {
      onSave(url, openInNewTab);
    }
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    setUrl(newUrl);
    setUrlValid(isValidHttpUrl(newUrl));
  };

  const handleUrlBlur = () => {
    setUrlTouched(true);
  };

  /**
   * React to special keys:
   *   Enter: create link
   *   Esc: cancel
   */
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setUrlTouched(true);
      setUrlValid(isValidHttpUrl(url));
      handleSave();
    } else if (event.key === "Escape") {
      event.preventDefault();
      onCancel();
    }
  };

  return (
    <Modal id="modal" open={open} duration={200} onBackdropClick={handleToggle}>
      <Container maxWidth={responsive(300, 450)} width="100%">
        <Fixed type="absolute" position="top right" spacing={1}>
          <IconButton backgroundColor="text" onClick={() => handleToggle()}>
            <CloseOutlined />
          </IconButton>
        </Fixed>
        <Typography variant="h3">
          {isLinkActive(editor) ? "Edit Link" : " Insert Link"}
        </Typography>
        <Spacing height={2} />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Input
              id="url"
              label="URL"
              type="url"
              value={url}
              placeholder="Paste or type a link..."
              size="small"
              fullWidth
              autoFocus
              error={isUrlTouched && !isUrlValid}
              helperText={
                isUrlTouched && !isUrlValid ? invalidUrlMessage : undefined
              }
              onChange={handleUrlChange}
              onBlur={handleUrlBlur}
              onKeyDown={handleKeyDown}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Flex align="center" fullHeight>
              <CheckBox
                checked={openInNewTab}
                name="openInNewTab"
                color="primary"
                label="Open in new tab"
                onClick={handleOpenInNewTab}
              />
            </Flex>
          </Grid>
          {isLinkActive(editor) && (
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                onClick={onRemove}
                size="small"
                backgroundColor="danger"
                variant="ghost"
              >
                Remove Link
              </Button>
            </Grid>
          )}
          <Grid item xs={12} sm={6}>
            <Button fullWidth onClick={onCancel} size="small" variant="ghost">
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={handleSave}
              fullWidth
              size="small"
              disabled={url.length === 0 || !isUrlValid}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
}
