import React from "react";
import {
  Container,
  Spacing,
  Snackbar,
  IconButton,
  Fixed,
  Button,
  useTheme,
  Box,
  Link,
} from "@wipsie/ui";
import {
  BookOutlined,
  CloseOutlined,
  HomeOutlined,
  ProjectOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { LogoutBox, UserBox, serviceLinks, ThemeSwitcher } from "../../";

export type AccountSnackMenuItemType = {
  label: string;
  icon: React.ReactElement;
  onClick?: () => void;
  link?: string;
  external?: boolean;
};

export type AccountSnackSideBarProps = any;

export const AccountSnackSideBar = ({
  linkComponent = Link,
  visible,
  handleChange,
  user,
  menuItems,
  themeTitle = true,
  theme = "light",
  setThemeCallback,
}: AccountSnackSideBarProps) => {
  const wipsieTheme = useTheme();

  const LinkComponent = linkComponent;

  const MENU_OPTIONS = [
    {
      label: "Home",
      icon: <HomeOutlined />,
      link: `${serviceLinks.main}`,
      external: false,
    },
    {
      label: "My Profile",
      icon: <UserOutlined />,
      link: `${serviceLinks.main}/u/${user?.username}`,
      external: false,
    },
    {
      label: "My Projects",
      icon: <ProjectOutlined />,
      link: `${serviceLinks.dashboard}`,
      external: false,
    },
    {
      label: "My Orders",
      icon: <BookOutlined />,
      link: `${serviceLinks.shop}/orders`,
      external: false,
    },
    {
      label: "Account Settings",
      icon: <SettingOutlined />,
      link: `${serviceLinks.auth}/profile`,
      external: false,
    },
  ];

  return (
    <Snackbar
      id="sidebar"
      open={visible}
      position="center right"
      spacing={0}
      animation="slideInRight"
      backdrop
      fullHeight
      onBackdropClick={handleChange}
      portalProps={{
        style: {
          zIndex: 99,
          position: "fixed",
        },
      }}
    >
      <Container
        shape="square"
        fullHeight
        width="280px"
        style={{ overflow: "auto" }}
        p={0}
      >
        <Fixed type="absolute" position="top right" spacing={1.5}>
          <IconButton
            onClick={handleChange}
            icon={<CloseOutlined />}
            size="medium"
            color="basic"
          />
        </Fixed>

        <Spacing height={4} />

        <Box>
          <UserBox user={user} linkComponent={LinkComponent} />
          <Spacing height={1} />
        </Box>

        {MENU_OPTIONS.map((item) => (
          <LinkComponent
            href={item.link}
            target={item?.external ? "_blank" : ""}
          >
            <Button
              key={item.label}
              fullWidth
              align="left"
              shape="square"
              variant="contained"
              size="medium"
              color={wipsieTheme.palette.text}
              backgroundColor={wipsieTheme.palette.background}
              hoverBackgroundColor={wipsieTheme.palette.basic.shadow}
              label={item.label}
              startIcon={item.icon}
              style={{
                textTransform: "capitalize",
                padding: 12,
                paddingLeft: 18,
                paddingRight: 18,
              }}
            />
          </LinkComponent>
        ))}

        <Spacing height={3} />
        <Box>
          <ThemeSwitcher
            title={themeTitle}
            setThemeCallback={setThemeCallback}
            theme={theme}
          />
        </Box>

        <Spacing height={3} />
        <LogoutBox />
      </Container>
    </Snackbar>
  );
};
