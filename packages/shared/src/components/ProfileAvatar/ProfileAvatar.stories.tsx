import React from "react";

import { ProfileAvatar } from ".";

export default {
  title: "Shared Components/Profile Avatar",
  component: ProfileAvatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = () => (
  <>
    <ProfileAvatar>teste</ProfileAvatar>
  </>
);
