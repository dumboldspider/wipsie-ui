// Generated with util/create-component.js
import React from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
import opacity from "../../utils/opacity";
import { CheckBoxProps } from "./CheckBox.types";

export const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const theme = useTheme();
  const {
    label = "",
    checked = true,
    disabled = false,
    icon = null,
    groupSize = null,
    groupShape = null,
    groupColor = null,
    groupTextColor = null,
    children,
    className,
    inputProps = null,
    ...otherProps
  } = props;

  // background color for the button or group  of buttons
  const color = props.color ? props.color : groupColor ? groupColor : "primary";

  // text color for the button or group of buttons
  const textColor = props.textColor
    ? props.textColor
    : groupTextColor
    ? groupTextColor
    : null;

  // size for the button or group of buttons
  const size = props.size ? props.size : groupSize ? groupSize : "medium";

  // shape for the button or group of buttons
  const shape = props.shape
    ? props.shape
    : groupShape
    ? groupShape
    : theme.layout.defaultShape;

  function handleBackgroundColor() {
    return `background: ${
      isThemePalette(color) ? theme.palette[color][500] : color
    };`;
  }

  function handleHoverColor() {
    return `background: ${
      isThemePalette(color) ? theme.palette[color][300] : opacity(color, 50)
    };`;
  }

  function handleTextColor() {
    if (disabled) return `color: ${theme.palette.subtext};`;
    if (textColor) {
      return `color: ${
        isThemePalette(textColor) ? theme.palette[textColor][500] : textColor
      };`; // if value is defined by props
    } else {
      return `color: ${theme.palette.text};`;
    }
  }

  function handleDefaultColor() {
    return `background: ${theme.palette.basic[700]};`;
  }

  function handleBorderColor() {
    if (disabled) return `border-color: ${theme.palette.subtext};`;
    return `border: 1px solid ${
      isThemePalette(color) ? theme.palette[color][500] : color
    };`;
  }

  function handleDefaultHoverColor() {
    return `background: ${theme.palette.basic[900]};`;
  }

  function handleDisabledColor() {
    return `background: ${theme.palette.basic[700]}; color: ${theme.palette.text};`;
  }

  function handleIconColor() {
    if (disabled) return `color: ${theme.palette.basic[100]};`;
    return `color: ${contrast(
      isThemePalette(color) ? theme.palette[color][500] : color
    )};`;
  }
  function handleIndicatorColor() {
    if (icon) return `border-color: transparent;`;
    if (disabled) return `border-color:  ${theme.palette.basic[100]};`;
    return `border-color: ${contrast(
      isThemePalette(color) ? theme.palette[color][500] : color
    )};`;
  }
  function handleIndicatorSize() {
    switch (size) {
      case "xlarge":
        return "min-height: 32px; min-width: 32px; margin-right: 8px;";
      case "large":
        return "min-height: 26px; min-width: 26px; margin-right: 8px;";
      case "small":
        return "min-height: 16px; min-width: 16px; margin-right: 6px;";
      case "mini":
        return "min-height: 14px; min-width: 14px; margin-right: 4px;";
      case "medium":
      default:
        return "min-height: 20px; min-width: 20px; margin-right: 8px;";
    }
  }
  function handleIndicatorIconSize() {
    switch (size) {
      case "xlarge":
        return "width: 6px; height: 12px;";
      case "large":
        return "width: 5px; height: 10px;";
      case "small":
        return "width: 3px; height: 6px;";
      case "mini":
        return "width: 2px; height: 5px;";
      case "medium":
      default:
        return "width: 4px; height: 9px;";
    }
  }
  function handleIconSize() {
    switch (size) {
      case "xlarge":
        return "font-size: 18px;";
      case "large":
        return "font-size: 16px;";
      case "small":
        return "font-size: 10px;";
      case "mini":
        return "font-size: 8px;";
      case "medium":
      default:
        return "font-size: 12px;";
    }
  }
  function handleFontSize() {
    switch (size) {
      case "xlarge":
        return "font-size: 20px;";
      case "large":
        return "font-size: 16px;";
      case "small":
        return "font-size: 12px;";
      case "mini":
        return "font-size: 10px;";
      case "medium":
      default:
        return "font-size: 14px;";
    }
  }

  function handleShape() {
    switch (shape) {
      case "round":
        return "border-radius: 10em;";
      case "rounded":
        return "border-radius: 6px;";
      case "square":
        return "border-radius: 0em;";
      default:
        return "border-radius: 0.7em;";
    }
  }

  return (
    <div
      data-testid="Wps-CheckBox"
      className={classnames("Wps-CheckBox", className)}
      {...(otherProps as any)}
    >
      <style jsx>{`
        .Wps-CheckBox {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row-reverse;
          position: relative;
          ${disabled ? `cursor: not-allowed;` : `cursor: pointer;`}
          pointer-events: ${disabled ? "none" : "auto"};
          ${handleIconSize()}
        }
        .Wps-CheckBox label {
          ${disabled ? `cursor: not-allowed;` : `cursor: pointer;`}
          font-size: 16px;
          ${handleFontSize()}
          user-select: none;
          ${handleTextColor()}
        }
        .Wps-CheckBox input {
          position: absolute;
          z-index: -1;
          opacity: 0;
        }
        .Wps-CheckBox input:checked ~ .Wps-CheckBoxIndicator {
          ${handleBackgroundColor()}
        }
        .Wps-CheckBox input:checked ~ .Wps-CheckBoxIndicator:after {
          display: block;
        }
        .Wps-CheckBox input:disabled ~ .Wps-CheckBoxIndicator {
          ${handleDisabledColor()}
          opacity: 0.6;
          pointer-events: none;
        }

        .Wps-CheckBox .Wps-CheckBoxIndicator {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          ${handleIndicatorSize()}
          transition: all 0.2s ease-in-out;
          ${handleShape()}
          ${handleDefaultColor()}
          ${handleBorderColor()}
          ${handleIconColor()}
        }
        .Wps-CheckBox .Wps-CheckBoxIndicator:after {
          content: "";
          position: absolute;
          display: none;
        }

        .Wps-CheckBox :hover input ~ .Wps-CheckBoxIndicator,
        .Wps-CheckBox input:focus ~ .Wps-CheckBoxIndicator {
          ${handleDefaultHoverColor()}
        }
        .Wps-CheckBox
          :hover
          input:not([disabled]):checked
          ~ .Wps-CheckBoxIndicator,
        .Wps-CheckBox input:checked:focus ~ .Wps-CheckBoxIndicator {
          ${handleHoverColor()}
        }

        .Wps-CheckBox .Wps-CheckBoxIndicator:after {
          ${handleIndicatorIconSize()}
          border: solid;
          border-width: 0 2px 2px 0;
          ${handleIndicatorColor()}
          transform: rotate(45deg);
        }
        .Wps-CheckBox input:disabled ~ .Wps-CheckBoxIndicator:after {
          ${handleIndicatorColor()}
        }
        .Wps-CheckBox input:disabled ~ .Wps-CheckBoxIndicator {
          ${handleIconColor()}
        }
      `}</style>

      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        {...inputProps}
      />
      <label className="Wps-CheckBoxLabel">{label}</label>
      <div className="Wps-CheckBoxIndicator">{checked && icon}</div>
    </div>
  );
};

// export const CheckBox: React.FC<CheckBoxProps> = (props) => {
//   const theme = useTheme();
//   const {
//     label = "",
//     checked = true,
//     disabled = false,
//     icon = null,
//     groupSize = null,
//     groupShape = null,
//     groupColor = null,
//     children,
//     className,
//     inputProps = null,
//     ...otherProps
//   } = props;

//   // background color for the button or group  of buttons
//   const color = props.color ? props.color : groupColor ? groupColor : "primary";

//   // size for the button or group of buttons
//   const size = props.size ? props.size : groupSize ? groupSize : "medium";

//   // shape for the button or group of buttons
//   const shape = props.shape ? props.shape : groupShape ? groupShape : "rounded";

//   function handleBackgroundColor() {
//     return `background: ${theme.palette.primary[500]};`;
//   }

//   function handleHoverColor() {
//     return `background: ${theme.palette.primary[300]};`;
//   }

//   function handleTextColor() {
//     return `color: ${theme.palette.text};`;
//   }

//   function handleDefaultColor() {
//     return `background: ${theme.palette.basic[700]};`;
//   }

//   function handleDefaultHoverColor() {
//     return `background: ${theme.palette.basic[900]};`;
//   }

//   function handleDisabledColor() {
//     return `background: ${theme.palette.basic[700]}; color: ${theme.palette.text};`;
//   }

//   function handleIconColor() {
//     return `color: ${contrast(theme.palette.primary[500])};`;
//   }
//   function handleIndicatorColor() {
//     if (icon) return `border-color:  transparent;`;
//     return `border-color: ${contrast(theme.palette.primary[500])};`;
//   }
//   function handleIndicatorSize() {
//     switch (size) {
//       case "xlarge":
//         return "height: 32px; width: 32px; margin-right: 8px;";
//       case "large":
//         return "height: 26px; width: 26px; margin-right: 8px;";
//       case "small":
//         return "height: 16px; width: 16px; margin-right: 6px;";
//       case "mini":
//         return "height: 14px; width: 14px; margin-right: 4px;";
//       case "medium":
//       default:
//         return "height: 20px; width: 20px; margin-right: 8px;";
//     }
//   }
//   function handleIndicatorIconSize() {
//     switch (size) {
//       case "xlarge":
//         return "width: 6px; height: 12px;";
//       case "large":
//         return "width: 5px; height: 10px;";
//       case "small":
//         return "width: 3px; height: 6px;";
//       case "mini":
//         return "width: 2px; height: 5px;";
//       case "medium":
//       default:
//         return "width: 4px; height: 9px;";
//     }
//   }
//   function handleIconSize() {
//     switch (size) {
//       case "xlarge":
//         return "font-size: 18px;";
//       case "large":
//         return "font-size: 16px;";
//       case "small":
//         return "font-size: 12px;";
//       case "mini":
//         return "font-size: 10px;";
//       case "medium":
//       default:
//         return "font-size: 14px;";
//     }
//   }
//   function handleFontSize() {
//     switch (size) {
//       case "xlarge":
//         return "font-size: 18px;";
//       case "large":
//         return "font-size: 16px;";
//       case "small":
//         return "font-size: 12px;";
//       case "mini":
//         return "font-size: 10px;";
//       case "medium":
//       default:
//         return "font-size: 14px;";
//     }
//   }

//   function handleShape() {
//     switch (shape) {
//       case "round":
//         return "border-radius: 10em;";
//       case "rounded":
//         return "border-radius: 6px;";
//       case "square":
//         return "border-radius: 0em;";
//       default:
//         return "border-radius: 0.7em;";
//     }
//   }

//   return (
//     <div
//       data-testid="Wps-CheckBox"
//       className={classnames("Wps-CheckBox", className)}
//       {...(otherProps as any)}
//     >
//       <style jsx>{`
//         .Wpsw-CheckBox {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-direction: row-reverse;
//           position: relative;
//           ${disabled ? `cursor: not-allowed;` : `cursor: pointer;`}
//           ${handleIconSize()}
//           ${handleTextColor()}
//         }
//         .Wps-CheckBox label {
//           ${disabled ? `cursor: not-allowed;` : `cursor: pointer;`}
//           font-size: 16px;
//           ${handleFontSize()}
//           user-select: none;
//         }
//         .Wps-CheckBox input {
//           position: absolute;
//           z-index: -1;
//           opacity: 0;
//         }
//         .Wps-CheckBox input:checked ~ .Wps-CheckBoxIndicator {
//           ${handleBackgroundColor()}
//         }
//         .Wps-CheckBox input:checked ~ .Wps-CheckBoxIndicator:after {
//           display: block;
//         }
//         .Wps-CheckBox input:disabled ~ .Wps-CheckBoxIndicator {
//           ${handleDisabledColor()}
//           opacity: 0.6;
//           pointer-events: none;
//         }

//         .Wps-CheckBox .Wps-CheckBoxIndicator {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           ${handleIndicatorSize()}
//           transition: all 0.2s ease-in-out;
//           ${handleShape()}
//           ${handleDefaultColor()}
//           ${handleIconColor()}
//         }
//         .Wps-CheckBox .Wps-CheckBoxIndicator:after {
//           content: "";
//           position: absolute;
//           display: none;
//         }

//         .Wps-CheckBox :hover input ~ .Wps-CheckBoxIndicator,
//         .Wps-CheckBox input:focus ~ .Wps-CheckBoxIndicator {
//           ${handleDefaultHoverColor()}
//         }
//         .Wps-CheckBox
//           :hover
//           input:not([disabled]):checked
//           ~ .Wps-CheckBoxIndicator,
//         .Wps-CheckBox input:checked:focus ~ .Wps-CheckBoxIndicator {
//           ${handleHoverColor()}
//         }

//         .Wps-CheckBox .Wps-CheckBoxIndicator:after {
//           ${handleIndicatorIconSize()}
//           border: solid;
//           border-width: 0 2px 2px 0;
//           ${handleIndicatorColor()}
//           transform: rotate(45deg);
//         }
//         .Wps-CheckBox input:disabled ~ .Wps-CheckBoxIndicator:after {
//           border-color: #7b7b7b;
//         }
//       `}</style>

//       <input
//         type="checkbox"
//         checked={checked}
//         disabled={disabled}
//         {...inputProps}
//       />
//       <label className="Wps-CheckBoxLabel">{label}</label>
//       <div className="Wps-CheckBoxIndicator">{checked && icon}</div>
//     </div>
//   );
// };
