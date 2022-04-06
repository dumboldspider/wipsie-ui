// Generated with util/create-component.js
import React from "react";
import { TextArea } from "./TextArea";

export default {
  title: "Prototypes/TextArea",
};

export const WithBar = () => <TextArea />;

export const WithBaz = () => (
  <>
    <TextArea placeholder="baz" size="mini" rows={5} />
    <TextArea placeholder="baz" size="small" rows={5} />
    <TextArea placeholder="baz" size="medium" rows={5} variant="ghost" />
    <TextArea placeholder="baz" size="large" rows={5} variant="outlined" />
    <TextArea placeholder="baz" size="xlarge" rows={5} />
  </>
);
