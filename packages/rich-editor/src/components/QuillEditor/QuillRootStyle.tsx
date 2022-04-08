import { Box, useTheme } from "@wipsie/ui";
import styled from "styled-components";

const QuillRootStyle = styled(Box)(({ ...props }) => {
  const theme = useTheme();

  const { editorBackgroundColor } = props as any;

  return {
    "& .ql-container.ql-snow": {
      borderColor: "transparent",
      border: "none",
      lineHeight: 1.5,
      fontSize: "1rem",
      fontFamily: theme.font.h1.fontFamily,
    },
    "& .ql-editor": {
      minHeight: 200,
      backgroundColor: editorBackgroundColor,

      // image components
      "& img": {
        width: "100%",
        height: "auto",
      },

      "&.ql-blank::before": {
        fontStyle: "normal",
        color: theme.palette.text,
      },
      "& pre.ql-syntax": {
        lineHeight: 22 / 14,
        fontSize: `${14 / 16}rem`,
        padding: theme.layout.spacingUnit * 2 + "px",
        borderRadius: theme.layout.radius,
        backgroundColor: theme.palette.subtext,
      },
    },
  };
});

export default QuillRootStyle;
