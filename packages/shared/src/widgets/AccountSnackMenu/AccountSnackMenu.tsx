import React, { useState } from "react";
import { Avatar, IconButton, useScrollBlock, useTheme, Link } from "@wipsie/ui";
import { AccountSnackSideBar } from "./AccountSnackSideBar";
import { NotLogged } from "../../";

export default function AccountSnackMenu({
  color = null,
  authenticated = false,
  user = null,
  themeTitle = true,
  theme = "light",
  setThemeCallback,
  LinkComponent = Link,
  menuItems = null,
}) {
  const wipsieTheme = useTheme();
  const [, setLocked] = useScrollBlock();

  // Config Sidebar
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
    setLocked(!visible);
  };

  if (!authenticated) {
    return <NotLogged color={color} />;
  }

  return (
    <>
      <IconButton onClick={handleToggle} size="large">
        <Avatar
          src={user?.profile?.avatar}
          alt={user?.name}
          xs="small"
          md="medium"
          backgroundColor={wipsieTheme.palette.highlight}
        />
      </IconButton>

      <AccountSnackSideBar
        visible={visible}
        handleChange={handleToggle}
        user={user}
        setThemeCallback={setThemeCallback}
        LinkComponent={LinkComponent}
        themeTitle={themeTitle}
        theme={theme}
        menuItems={menuItems}
      />
    </>
  );
}
