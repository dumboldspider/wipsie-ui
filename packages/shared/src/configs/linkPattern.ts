import { serviceLinks } from "./serviceLinks";

export const linkPattern = ({ type, data }: LinkPatternProps) => {
  switch (type) {
    case "homePage":
      return `${serviceLinks.main}`;
    case "loginPage":
      return `${serviceLinks.auth}`;
    case "loginPageRedirect":
      return `${serviceLinks.auth}/?to=${
        data.redirectTo || window?.location?.href
      }`;
    case "logoutPage":
      return `${serviceLinks.auth}/logout?to=${
        data.redirectTo || window?.location?.href
      }`;

    case "userProfilePage":
      return `${serviceLinks.main}/u/${data.username}`;
    case "projectProfilePage":
      return `${serviceLinks.main}/p/${data.projectSlug}`;

    default:
      throw new Error(`Unknown link pattern type: ${type}`);
  }
};

// Base type
export type LinkPatternProps =
  | Link_UserProfilePage
  | Link_ProjectProfilePage
  | Link_HomePage
  | Link_LoginPage
  | Link_LoginPageRedirect
  | Link_RegisterPage
  | Link_LogoutPage;

// Login page
export type Link_LoginPage = {
  type: "loginPage";
  data?: undefined;
};

// Login page
export type Link_LoginPageRedirect = {
  type: "loginPageRedirect";
  data: {
    redirectTo: string;
  };
};

// Logout page
export type Link_LogoutPage = {
  type: "logoutPage";
  data?: {
    redirectTo?: string;
  };
};

// Register page
export type Link_RegisterPage = {
  type: "registerPage";
  data?: {
    redirectTo?: string;
  };
};

// User profile page variant
export type Link_UserProfilePage = {
  type: "userProfilePage";
  data: { username: string };
};

// Project profile page variant
export type Link_ProjectProfilePage = {
  type: "projectProfilePage";
  data: { projectSlug: string };
};

// Wipsie homepage
export type Link_HomePage = {
  type: "homePage";
  data?: undefined;
};
