import styled from "styled-components";
import { useTheme } from "@wipsie/ui";
// theme

// ----------------------------------------------------------------------

const QuillEditorToolbarStyle = styled("div")(({ ...props }) => {
  const theme = useTheme();

  const { toolbarBackgroundColor } = props as any;

  return {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: toolbarBackgroundColor,

    "& a": {
      color: theme.palette.text,
    },

    "& .ql-snow.ql-toolbar button:hover .ql-fill, .ql-snow .ql-toolbar button:hover .ql-fill, .ql-snow.ql-toolbar button:focus .ql-fill, .ql-snow .ql-toolbar button:focus .ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill":
      {
        fill: theme.palette.primary[500],
      },
    "& .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected":
      {
        color: theme.palette.primary[500],
      },
    "& .ql-snow.ql-toolbar button:hover .ql-stroke, .ql-snow .ql-toolbar button:hover .ql-stroke, .ql-snow.ql-toolbar button:focus .ql-stroke, .ql-snow .ql-toolbar button:focus .ql-stroke, .ql-snow.ql-toolbar button.ql-active .ql-stroke, .ql-snow .ql-toolbar button.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow.ql-toolbar button:hover .ql-stroke-miter, .ql-snow .ql-toolbar button:hover .ql-stroke-miter, .ql-snow.ql-toolbar button:focus .ql-stroke-miter, .ql-snow .ql-toolbar button:focus .ql-stroke-miter, .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter":
      {
        stroke: theme.palette.primary[500],
      },
    "& .ql-stroke": {
      stroke: theme.palette.text,
    },
    "& .ql-fill, .ql-stroke.ql-fill": {
      fill: theme.palette.text,
    },
    "& .ql-picker, .ql-picker-options, .ql-picker-item, .ql-picker-label, button":
      {
        "&:focus": { outline: "none" },
      },

    // // Image, Link, Video tooltips
    // ".ql-snow .ql-tooltip": {
    //   backgroundColor: theme.palette.primary[100],
    // },

    "& .ql-toolbar.ql-snow": {
      border: "none",
      padding: 0,
      // borderBottom: `solid 1px ${theme.palette.subtext}`,
      "& .ql-formats": {
        "&:not(:last-child)": {
          marginRight: theme.layout.spacingUnit * 2 + "px",
        },
      },

      // Button
      "& button": {
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        color: theme.palette.text,
      },

      // Select
      "& .ql-picker-label": {
        fontFamily: theme.font.h4.fontFamily,
        fontSize: theme.font.h4.fontSize,
        color: theme.palette.text,
      },
      "& .ql-picker-label svg": {},
      "& .ql-color,& .ql-background,& .ql-align ": {
        "& .ql-picker-label": {
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      "& .ql-expanded": {
        "& .ql-picker-label": {
          borderRadius: 4,
          color: theme.palette.text,
          borderColor: "transparent !important",
          backgroundColor: theme.palette.primary[100],
          "& .ql-stroke": { stroke: theme.palette.secondary[500] },
        },
        "& .ql-picker-options": {
          padding: 0,
          marginTop: 4,
          border: "none",
          maxHeight: 200,
          overflow: "auto",
          borderRadius: theme.layout.radius,
          backgroundColor: theme.palette.background,
        },
        "& .ql-picker-item": {
          color: theme.palette.text,
        },

        // Align
        "&.ql-align": {
          "& .ql-picker-options": { padding: 0, display: "flex" },
          "& .ql-picker-item": {
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        },
        // Color & Background
        "&.ql-color, &.ql-background": {
          "& .ql-picker-options": { padding: 8 },
          "& .ql-picker-item": {
            margin: 3,
            borderRadius: 4,
            "&.ql-selected": { border: "solid 1px black" },
          },
        },
        // Font, Size, Header
        "&.ql-font, &.ql-size, &.ql-header": {
          "& .ql-picker-options": {
            padding: theme.layout.spacingUnit * 0.5 + "px",
          },
          "& .ql-picker-item": {
            padding: theme.layout.spacingUnit * 0.5 + "px",
          },
        },
      },
    },
  };
}) as any;

export default QuillEditorToolbarStyle;
