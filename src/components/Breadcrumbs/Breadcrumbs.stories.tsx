// Generated with util/create-component.js
import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import {
  HomeOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "../Link";

export default {
  title: "Prototypes/Breadcrumbs",
};

export const WithBreadcrumbs = () => {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
      inactive: false,
    },
    {
      label: "Contact",
      href: "/contact",
      inactive: true,
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={breadcrumbs}
        linkComponent={Link}
        activeColor="info"
      />
    </>
  );
};
