// Generated with util/create-component.js
import React from "react";
import { Avatar } from "./Avatar";
import responsive from "../../utils/responsive";
import { ShopFilled } from "@ant-design/icons";

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
    <Avatar alt="Daniel Brown" xs="mini" />
    <Avatar icon={<ShopFilled />} xs="mini" />
    <Avatar xs="small" />
    <Avatar alt="Daniel Brown" xs="small" />
    <Avatar icon={<ShopFilled />} xs="small" />
    <Avatar xs="medium" />
    <Avatar alt="Daniel Brown" xs="medium" />
    <Avatar icon={<ShopFilled />} xs="medium" />
    <Avatar xs="large" />
    <Avatar alt="Daniel Brown" xs="large" />
    <Avatar icon={<ShopFilled />} xs="large" />
    <Avatar xs="xlarge" />
    <Avatar alt="Daniel Brown" xs="xlarge" />
    <Avatar icon={<ShopFilled />} xs="xlarge" backgroundColor="primary" />
  </>
);
