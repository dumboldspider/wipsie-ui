// Generated with util/create-component.js
import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import useTheme from "../../hooks/useTheme";
import isThemePalette from "../../utils/isThemePalette";
import contrast from "../../utils/contrast";
import opacity from "../../utils/opacity";
import { SelectWithFilterProps } from "./SelectWithFilter.types";

export const SelectWithFilter: React.FC<SelectWithFilterProps> = (props) => {
  const theme = useTheme();
  const {
    startAdornment = null,
    endAdornment = "▾",
    fullWidth = false,
    color = "basic",
    textColor = null,
    borderColor = null,
    size = "medium",
    shape = "round",
    variant = "contained",
    required = false,
    disabled = false,
    error = false,
    success = false,
    helperText = null,
    wrapperProps = null,
    children,
    className,
    list,
    onChange,
    selected,
    defaultValue,
    placeholder = "Select...",
    filterPlaceholder = "Filter...",
    ...otherProps
  } = props;

  // START PROCESSING
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event) {
      // Se o usuário clicar fora da select fechar
      if (ref.current && !ref.current.contains(event.target) && show) {
        setShow(false);
      }
    }

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [show]);

  useEffect(() => {
    // Resetar o filtro se a select for fechada
    if (show == false) {
      setFilter("");
    }
  }, [show]);

  // Pegar o item selecionado
  function getSelected() {
    if (Array.isArray(list)) {
      for (let item of list) {
        if (item.id == selected) {
          return item;
        }
      }
    }
    return null;
  }
  // END PROCESSING

  function handleBackgroundColor() {
    if (error) {
      switch (variant) {
        case "ghost":
          return `background: ${opacity(theme.palette.danger[500], 20)};`;
      }
    }
    if (success) {
      switch (variant) {
        case "ghost":
          return `background: ${opacity(theme.palette.success[500], 20)};`;
      }
    }

    switch (variant) {
      case "contained":
        return `background: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
      case "outlined":
        return `background: ${"transparent"};`;
      case "ghost":
        return `background: ${
          isThemePalette(color)
            ? opacity(theme.palette[color][500], 8)
            : opacity(color, 8)
        };`;
      default:
        return "";
    }
  }

  function handleDisabledColors() {
    if (!disabled) return "";
    switch (variant) {
      case "contained":
        return `background: ${opacity(theme.palette.shade, 100)};
        color: ${opacity(theme.palette.text, 40)};
        border-color: ${opacity(theme.palette.shade, 100)};
        `;
      case "outlined":
        return `background: ${opacity(theme.palette.shade, 100)};
        color: ${opacity(theme.palette.text, 40)};
        border-color: ${opacity(theme.palette.text, 40)};`;
      case "ghost":
        return `background: ${"transparent"};
        color: ${opacity(theme.palette.text, 50)};
        border-color: ${"transparent"};`;
      default:
        return "";
    }
  }

  function handleBorderColor() {
    if (error) {
      switch (variant) {
        case "contained":
          return `border-color: ${theme.palette.danger[500]};`;
        case "outlined":
          return `border-color: ${theme.palette.danger[500]};`;
      }
    }
    if (success) {
      switch (variant) {
        case "contained":
          return `border-color: ${theme.palette.success[500]};`;
        case "outlined":
          return `border-color: ${theme.palette.success[500]};`;
      }
    }

    switch (variant) {
      case "contained":
        return `border-color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
      case "outlined":
        return `border-color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
      case "ghost":
        return "border-color: transparent;";
      default:
        return "";
    }
  }

  function handleTextColor() {
    if (textColor) return `color: ${textColor};`; // if value is defined by props
    if (color === "basic") return `color: ${theme.palette.text};`; // if value is basic

    switch (variant) {
      case "contained":
        return `color: ${contrast(
          isThemePalette(color) ? theme.palette[color][500] : color
        )};`;
      case "outlined":
      case "ghost":
      default:
        return `color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
    }
  }

  function handlePlaceholderColor() {
    if (textColor) return `color: ${opacity(textColor, 80)};`; // if value is defined by props
    if (color === "basic" || disabled)
      return `color: ${theme.palette.subtext};`; // if value is basic

    switch (variant) {
      case "contained":
        return `color: ${contrast(
          isThemePalette(color) ? theme.palette[color][500] : color
        )};`;
      case "outlined":
      case "ghost":
      default:
        return `color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
    }
  }
  function handleHelperColor() {
    if (success) return `color: ${theme.palette.success[500]};`; // if value is basic
    if (error) return `color: ${theme.palette.danger[500]};`; // if value is basic
    if (color === "basic") return `color: ${theme.palette.subtext};`; // if value is basic
    switch (variant) {
      case "contained":
        return `color: ${contrast(
          isThemePalette(color) ? theme.palette[color][500] : color
        )};`;
      case "outlined":
      case "ghost":
      default:
        return `color: ${
          isThemePalette(color) ? theme.palette[color][500] : color
        };`;
    }
  }

  function handleFontSize() {
    switch (size) {
      case "xlarge":
        return "font-size: 18px;";
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

  function handlePadding() {
    switch (size) {
      case "xlarge":
        return "padding: 12px 0px;";
      case "large":
        return "padding: 10px 0px;";
      case "small":
        return "padding: 6px 0px;";
      case "mini":
        return "padding: 4px 0px;";
      case "medium":
      default:
        return "padding: 8px 0px;";
    }
  }
  function handlePaddingWrapper() {
    switch (size) {
      case "xlarge":
        return "padding: 0px 16px;";
      case "large":
        return "padding: 0px 14px;";
      case "small":
        return "padding: 0px 8px;";
      case "mini":
        return "padding: 0px 6px;";
      case "medium":
      default:
        return "padding: 0px 10px;";
    }
  }

  function handleShape() {
    switch (shape) {
      case "round":
        return "border-radius: 2em;";
      case "rounded":
        return "border-radius: 0.7em;";
      case "square":
        return "border-radius: 0em;";
      default:
        return "border-radius: 0.7em;";
    }
  }

  return (
    <div
      ref={ref}
      data-testid="Wps-SelectWithFilterWrapper"
      className={classnames("Wps-SelectWithFilterWrapper", show ? "open" : "")}
      onClick={() => {
        if (show == false) {
          setShow(true);
        }
      }}
      {...wrapperProps}
    >
      <style jsx>{`
        .Wps-SelectWithFilterWrapper {
          ${handleBorderColor()}
          ${handleShape()}
          ${handleBackgroundColor()}
          border-style: solid;
          border-width: 2px;
          position: relative;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          height: fit-content;
          width: ${fullWidth ? "100%" : "max-content"};
          transition: all 250ms ease 0ms;
          ${handleTextColor()}
          ${handleDisabledColors()}
          ${handleFontSize()}
          ${handlePaddingWrapper()}
        }

        .Wps-SelectWithFilterWrapper.open {
        }

        .Wps-SelectedWithFilterInput {
          font-size: 1rem;
          width: 100%;
          ${handleShape()}
          border-width: 0px;
          ${handleBackgroundColor()}
          ${handlePlaceholderColor()}
          border-style: solid;
        }

        .Wps-SelectWithFilterWrapper .items {
          position: absolute;
          top: 100%;
          left: 0;
          display: flex;
          flex-direction: column;
          width: 100%;
          border-radius: 0 0 0.3rem 0.3rem;
          z-index: 100000;
          max-height: 15rem;
          overflow-y: auto;
          border-width: 2px;
          ${handleBackgroundColor()}
          ${handleBorderColor()}
        }

        .Wps-SelectWithFilterWrapper .items .item {
          padding: 0.5rem;
          cursor: pointer;
          font-size: 1rem;
          font-weight: normal;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }

        .Wps-SelectWithFilterWrapper .items .item:hover {
          background-color: ${opacity(handleTextColor(), 80)};
        }

        .Wps-SelectWithFilterWrapper .items .item:first-child {
          border-radius: 0;
        }

        .Wps-SelectWithFilterWrapper .items .item.selected {
        }
      `}</style>
      {startAdornment && (
        <span style={{ paddingRight: 5 }}>{startAdornment}</span>
      )}
      {/* Item selecionado */}
      <div className="Wps-SelectedWithFilterSelected">
        {/* Exibir o nome do item selecionado, caso não haja exibir o titulo padrão */}
        {show ? (
          <input
            className="Wps-SelectedWithFilterInput"
            autoFocus={true}
            type="text"
            placeholder={filterPlaceholder}
            value={filter ? filter : ""}
            onChange={(event) => setFilter(event.target.value)}
          />
        ) : (
          <div>
            {getSelected()
              ? getSelected()?.name
              : defaultValue
              ? defaultValue
              : placeholder}
          </div>
        )}
      </div>
      <style jsx>{`
        .Wps-SelectedWithFilterSelected {
          cursor: pointer;
          width: 100%;
          height: 100%;
          /* padding: 0.3rem; */
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
      {endAdornment && <span style={{ paddingLeft: 5 }}>{endAdornment}</span>}

      {/* Se a select estiver aberta */}
      {show ? (
        <>
          {/* Itens da select */}
          <div className="items">
            {Array.isArray(list) ? (
              <>
                {/* Exibir o item padrão (Selecionar ou titulo padrão) */}
                {defaultValue && (
                  <div
                    className={"item " + (selected === null ? "selected" : "")}
                    onClick={() => {
                      setShow(false);
                      onChange && onChange(null);
                    }}
                  >
                    <div>{defaultValue}</div>
                  </div>
                )}

                {/* Exibir todos os itens */}
                {list.map((value, index) => {
                  // Filtro de itens por ID e por Nome
                  if (
                    value?.id == filter ||
                    value?.name?.toLowerCase().includes(filter?.toLowerCase())
                  ) {
                    // Se o item atual for o selecionado exibir uma classe diferente
                    return (
                      <div
                        key={index}
                        className={
                          "item " + (value.id == selected ? "selected" : "")
                        }
                        onClick={() => {
                          setShow(false);
                          onChange && onChange(value);
                        }}
                      >
                        {/* Nome do item */}
                        <div>{value.name}</div>
                      </div>
                    );
                  }
                  return null;
                })}
              </>
            ) : null}
          </div>
        </>
      ) : null}
      {helperText && <div className="Wps-Helper">{helperText}</div>}
      <style jsx>{`
        .Wps-Helper {
          position: absolute;
          top: 100%;
          left: 0;
          font-size: 12px;
          margin-top: 4px;
          z-index: 1;
          ${handleHelperColor()}s
        }
      `}</style>
    </div>
  );
};
