import React from "react";
import { Typography } from "@wipsie/ui";

const customComponents = {
  h1: (props) => (
    <Typography variant="h1" style={{ marginBottom: 20 }} {...props} />
  ),
  h2: (props) => (
    <Typography
      variant="h2"
      style={{ marginBottom: 20, marginTop: 0 }}
      {...props}
    />
  ),
  h3: (props) => (
    <Typography
      variant="h3"
      style={{ marginBottom: 20, marginTop: 0 }}
      {...props}
    />
  ),
  h4: (props) => (
    <Typography
      variant="h4"
      style={{ marginBottom: 20, marginTop: 0 }}
      {...props}
    />
  ),
  h5: (props) => (
    <Typography
      variant="h5"
      style={{ marginBottom: 20, marginTop: 0 }}
      {...props}
    />
  ),
  h6: (props) => (
    <Typography
      variant="h6"
      style={{ marginBottom: 20, marginTop: 0 }}
      {...props}
    />
  ),
};

export default customComponents;
