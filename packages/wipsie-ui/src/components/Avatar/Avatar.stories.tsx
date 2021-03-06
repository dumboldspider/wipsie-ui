// Generated with util/create-component.js
import React, { useState } from "react";
import { Avatar } from "./Avatar";
import responsive from "../../utils/responsive";
import { Badge } from "../Badge";
import { Spacing } from "../Spacing";
import {
  ShopFilled,
  ClockCircleOutlined,
  SyncOutlined,
  CheckOutlined,
} from "@ant-design/icons";
export default {
  title: "Prototypes/Avatar",
};

export const Default = () => (
  <>
    <Avatar
      src="https://c.tenor.com/_0TzMJZezjkAAAAd/caze-dan%C3%A7ando-caze.gif"
      xs="mini"
    />
    <Avatar
      src="https://c.tenor.com/_0TzMJZezjkAAAAd/caze-dan%C3%A7ando-caze.gif"
      xs="small"
    />
    <Avatar
      src="https://c.tenor.com/_0TzMJZezjkAAAAd/caze-dan%C3%A7ando-caze.gif"
      xs="medium"
    />
    <Avatar
      src="https://c.tenor.com/_0TzMJZezjkAAAAd/caze-dan%C3%A7ando-caze.gif"
      xs="large"
    />
    <Avatar
      src="https://c.tenor.com/_0TzMJZezjkAAAAd/caze-dan%C3%A7ando-caze.gif"
      xs="xlarge"
    />
    <Avatar
      src="https://c.tenor.com/_0TzMJZezjkAAAAd/caze-dan%C3%A7ando-caze.gif"
      xs="200px"
    />
  </>
);
export const WithAdaptiveSizes = () => (
  <>
    <Avatar
      src="https://c.tenor.com/_0TzMJZezjkAAAAd/caze-dan%C3%A7ando-caze.gif"
      xs="mini"
      sm="large"
    />
    <Avatar
      src="https://c.tenor.com/_0TzMJZezjkAAAAd/caze-dan%C3%A7ando-caze.gif"
      xs="mini"
      md="large"
    />
    <Avatar
      src="https://c.tenor.com/_0TzMJZezjkAAAAd/caze-dan%C3%A7ando-caze.gif"
      xs="mini"
      lg="large"
    />
    <Avatar
      src="https://c.tenor.com/_0TzMJZezjkAAAAd/caze-dan%C3%A7ando-caze.gif"
      xs="mini"
      xl="large"
    />
  </>
);

export const Responsive = () => (
  <>
    <Avatar
      src="https://c.tenor.com/_0TzMJZezjkAAAAd/caze-dan%C3%A7ando-caze.gif"
      xs={responsive(20, 200)}
    />
  </>
);
export const ContentVariants = () => (
  <>
    <Avatar xs="mini" />
    <Avatar
      alt="Daniel Brown"
      xs="xlarge"
      href="https://google.com"
      target="_blank"
    />
    <Avatar icon={<ShopFilled />} xs="mini" />
    <Avatar xs="small" />
    <Avatar alt="Daniel Brown" xs="small" />
    <Avatar icon={<ShopFilled />} xs="small" />
    <Avatar xs="medium" />
    <Avatar alt="Daniel" xs="medium" />
    <Avatar icon={<ShopFilled />} xs="medium" />
    <Avatar xs="large" />
    <Avatar alt="Daniel Brown" xs="large" />
    <Avatar icon={<ShopFilled />} xs="large" />
    <Avatar xs="xlarge" />
    <Avatar alt="Daniel Brown" xs="xlarge" />
    <Avatar icon={<ShopFilled />} xs="xlarge" backgroundColor="primary" />
  </>
);

export const WithBadge = () => (
  <>
    <Badge
      icon={<ClockCircleOutlined />}
      bordered
      tolerance={3}
      color="info"
      position="top right"
    >
      <Avatar
        alt="Daniel Brown"
        xs="medium"
        href="https://google.com"
        target="_blank"
      />
    </Badge>
    <Spacing height={20} />
    <Badge
      icon={<SyncOutlined spin />}
      bordered
      tolerance={3}
      color="info"
      position="top right"
    >
      <Avatar
        alt="Daniel Brown"
        xs="medium"
        href="https://google.com"
        target="_blank"
      />
    </Badge>
    <Spacing height={20} />
    <Badge dot bordered tolerance={-2} color="gray" position="bottom right">
      <Avatar
        alt="Daniel Brown"
        xs="medium"
        href="https://google.com"
        target="_blank"
      />
    </Badge>
    <Spacing height={20} />
    <Badge dot bordered tolerance={-2} color="success" position="bottom right">
      <Avatar
        alt="Daniel Brown"
        xs="medium"
        href="https://google.com"
        target="_blank"
      />
    </Badge>
  </>
);

export const LoadingExample = () => {
  const [loading, setLoading] = useState(false);

  function handleLoading() {
    setLoading(true);
    !loading &&
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  }
  return (
    <Badge
      icon={loading ? <SyncOutlined spin /> : <CheckOutlined />}
      bordered
      tolerance={3}
      color={loading ? "info" : "success"}
      position="top right"
      // invisible={!loading}
    >
      <Avatar
        alt="Daniel Brown"
        xs="medium"
        clickable
        target="_blank"
        onClick={handleLoading}
        backgroundColor={loading ? "silver" : "primary"}
        textColor="white"
        icon={loading ? <SyncOutlined spin /> : <CheckOutlined />}
      />
    </Badge>
  );
};
