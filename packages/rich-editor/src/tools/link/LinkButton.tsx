import React, { useEffect, useState } from "react";
import { Button } from "@wipsie/ui";
import { LinkOutlined } from "@ant-design/icons";
import { LinkEditor } from "./LinkEditor";
import { ReactEditor, useSlate } from "slate-react";
import { Transforms } from "slate";
import { getLink, insertLink, isLinkActive, unwrapLink } from "./LinkUtils";
import { LinkState } from "./Link.types";

export const LinkButton = () => {
  const editor = useSlate();

  const { selection } = editor;
  const [linkState, setLinkState] = useState<LinkState | undefined>(null);

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (modalOpen) {
      const link = getLink(editor);
      const isNew = link === undefined;
      setLinkState({
        isNew,
        selection,
        url: isNew ? "" : (link?.url as string),
        openInNewTab: isNew ? true : (link?.openInNewTab as boolean),
      });
    }
  }, [modalOpen]);

  const handleLinkCancel = () => {
    if (linkState !== undefined) {
      // reselect in editor because dialog takes away focus
      ReactEditor.focus(editor as ReactEditor);
      Transforms.select(editor, linkState.selection);
    }
    handleToggleModal();
  };

  const handleLinkRemove = () => {
    if (linkState !== undefined) {
      // reselect in editor because dialog takes away focus
      ReactEditor.focus(editor as ReactEditor);
      Transforms.select(editor, linkState.selection);

      // remove link
      unwrapLink(editor);
    }
    handleToggleModal();
  };

  const handleLinkSave = (url: string, openInNewTab: boolean) => {
    if (linkState !== undefined) {
      // reselect in editor because dialog takes away focus
      ReactEditor.focus(editor as ReactEditor);
      Transforms.select(editor, linkState.selection);

      // insert link
      insertLink(editor, url, openInNewTab);
    }
    handleToggleModal();
  };

  return (
    <>
      <Button
        onClick={handleToggleModal}
        active={isLinkActive(editor)}
        size="small"
        variant="ghost"
        shape="rounded"
      >
        <LinkOutlined />
      </Button>

      <LinkEditor
        open={modalOpen}
        onCancel={handleLinkCancel}
        onRemove={handleLinkRemove}
        onSave={handleLinkSave}
        linkState={linkState}
        handleToggle={handleToggleModal}
      />
    </>
  );
};
