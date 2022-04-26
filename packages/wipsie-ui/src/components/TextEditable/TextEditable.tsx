// Generated with util/create-component.js
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { TextEditableProps } from "./TextEditable.types";

// ATOMS COMPONENTS START
import { IconButton } from "../IconButton/IconButton";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { Input } from "../Input/Input";
import { Typography } from "../Typography/Typography";
// ATOMS COMOPONENTS END

//  HOOKS START
import useEditing from "./useEditing";

export const useValue = () => {
  const [value, setValue] = useState("");
  return { value, setValue };
};
// HOOKS END

export const TextEditable: React.FC<TextEditableProps> = (props) => {
  const {
    isLarge,
    content,
    setStore,
    setParent,
    isFocus,
    maxLength = 100,
    children,
    className,
  } = props;
  const { isEditing, setIsEditing } = useEditing();
  const { value, setValue } = useValue();

  const handleSetEditing = (bool) => {
    setIsEditing(bool);
    if (setParent) setParent(bool);
  };

  const handleClose = (e) => {
    e.preventDefault();
    handleSetEditing(false);
    setValue(content);
  };
  const handleSave = () => {
    if (isLarge) {
      setStore(value);
    } else {
      // setStore({ title: value, index });
      setStore(value);
    }
    handleSetEditing(false);
  };

  const textRender = () => {
    if (isLarge) {
      return (
        <h1
          data-testid="editable"
          className="editable"
          onClick={() => handleSetEditing(true)}
        >
          <span className="simple_content">{value}</span>
        </h1>
      );
    }
    return (
      <Typography onClick={() => handleSetEditing(true)}>{value}</Typography>
    );
  };

  useEffect(() => {
    setValue(content);
    if (isFocus) setIsEditing(isFocus);
  }, [setValue, isFocus]);

  return (
    <div
      data-testid="Wps-TextEditable"
      className={classnames("Wps-TextEditable", className)}
    >
      {!isEditing && textRender()}
      {isEditing && (
        <AddForm
          value={value}
          setValue={setValue}
          handleClose={handleClose}
          handleSave={handleSave}
          maxLength={maxLength}
        />
      )}
      <style jsx>{`
        .Wps-TextEditable {
          color: black;
        }
      `}</style>
      {children}
    </div>
  );
};

// Add Form
function AddForm(props) {
  const { value, setValue, handleSave, handleClose, placeholder, maxLength } =
    props;

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };
  const handleClick = () => {
    handleSave();
  };

  return (
    <>
      <div className="small_form">
        <Input
          data-testid="input"
          ref={(input) => input && input.focus()}
          className={"editable_field"}
          onKeyPress={handleKeypress}
          variant="ghost"
          value={value}
          color="basic"
          maxLength={maxLength}
          placeholder={placeholder}
          aria-label={placeholder}
          onChange={(e: any) => setValue(e.target.value)}
          endAdornment={
            <ButtonGroup size="small" shape="square">
              <IconButton backgroundColor="warning" onClick={handleClick}>
                V
              </IconButton>
              <IconButton
                variant="outlined"
                backgroundColor="#bdbdbd"
                onClick={handleClose}
              >
                X
              </IconButton>
            </ButtonGroup>
          }
        />
      </div>
    </>
  );
}
