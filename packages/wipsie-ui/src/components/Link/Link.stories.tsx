// Generated with util/create-component.js
import React from "react";
import { Link } from "./Link";
import { Typography } from "../Typography";
import { Breadcrumbs } from "../Breadcrumbs";
import {
  HomeOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

export default {
  title: "Prototypes/Link",
};

export const WithBar = () => (
  <>
    <Link href="https://www.google.com" target="_blank" color="primary">
      Link
    </Link>
    <Link href="https://www.google.com" target="_blank" color="secondary">
      Link
    </Link>
    <Link href="https://www.google.com" target="_blank" color="success">
      Link
    </Link>
    <Link href="https://www.google.com" target="_blank" color="info">
      Link
    </Link>
    <Link href="https://www.google.com" target="_blank" color="warning">
      Link
    </Link>
    <Link href="https://www.google.com" target="_blank" color="danger">
      Link
    </Link>
    <Link href="https://www.google.com" target="_blank" color="basic">
      Link
    </Link>
  </>
);

export const WithBreadcrumbs = () => {
  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
      icon: <HomeOutlined />,
    },
    {
      label: "About",
      href: "/about",
      icon: <InfoCircleOutlined />,
      inactive: true,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <PhoneOutlined />,
      inactive: true,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
    </>
  );
};
