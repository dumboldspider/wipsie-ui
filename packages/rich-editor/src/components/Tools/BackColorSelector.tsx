import { Button, Container, Popover, useTheme } from "@wipsie/ui";
import React, { useEffect, useState } from "react";
import { useWipsieEditor } from "../../hooks/useWipsieEditor";

export const BackColorSelector: React.FC<any> = ({ metadata, icon }) => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const { updateContent, editorId } = metadata;
  const { editorField } = useWipsieEditor(editorId);

  const handleVisible = () => {
    setVisible(!visible);
    editorField && editorField.focus();
  };

  const [currentSelect, setCurrentSelect] = useState<Range>(null);

  useEffect(() => {
    // get current selection
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      setCurrentSelect(range);
    }
  }, [visible]);

  const handleSubmit = (selectedColor) => {
    if (
      currentSelect &&
      editorField &&
      editorField.contains(currentSelect.startContainer)
    ) {
      const element = document.createElement("span");
      element.classList.add(selectedColor.className);

      // currentSelect.deleteContents();
      currentSelect.surroundContents(element);

      updateContent();
      setVisible(false);
    }
  };

  const wipsieColorClasses = [
    {
      name: "Default",
      className: "wuire-background-bg",
      color: theme.palette.text,
    },
    {
      name: "Subtext",
      className: "wuire-subtext-bg",
      color: theme.palette.subtext,
    },
    {
      name: "Danger",
      className: "wuire-danger-bg",
      color: theme.palette.danger[500],
    },
    {
      name: "Success",
      className: "wuire-success-bg",
      color: theme.palette.success[500],
    },
    {
      name: "Warning",
      className: "wuire-warning-bg",
      color: theme.palette.warning[500],
    },
    {
      name: "Info",
      className: "wuire-info-bg",
      color: theme.palette.info[500],
    },
    {
      name: "Primary",
      className: "wuire-primary-bg",
      color: theme.palette.primary[500],
    },
    {
      name: "Secondary",
      className: "wuire-secondary-bg",
      color: theme.palette.secondary[500],
    },
  ];
  return (
    <Popover
      content={
        <Container p={1} tabIndex={-1}>
          {wipsieColorClasses.map((option) => {
            return (
              <Popover content={option.name} arrow position="top" spacing={0.3}>
                <Container
                  key={option.className}
                  shape="round"
                  backgroundColor={option.color}
                  tabIndex={-1}
                  clickable
                  p={0}
                  width={"20px"}
                  height={"20px"}
                  m={0.5}
                  onClick={() => {
                    handleSubmit(option);
                  }}
                >
                  &nbsp;
                </Container>
              </Popover>
            );
          })}
        </Container>
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
      }}
      arrow
    >
      <Button
        onClick={handleVisible}
        tabIndex={-1}
        variant="ghost"
        shape="rounded"
        size="small"
      >
        {icon}
      </Button>
    </Popover>
  );
};
