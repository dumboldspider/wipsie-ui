// Generated with util/create-component.js
import React from "react";
import { Hidden } from "./Hidden";
import { Button } from "../Button";

export default {
  title: "Prototypes/Hidden",
};

export const WithBaz = () => (
  <>
    <Hidden>
      <Button>Always Visible</Button>
    </Hidden>
    <Hidden xl>
      <Button>Hidden in xlarge Up</Button>
    </Hidden>
    <Hidden lg>
      <Button>Hidden in large Up</Button>
    </Hidden>
    <Hidden md lg={false} xl>
      <Button>Hidden in medium Up visible in large up</Button>
    </Hidden>
    <Hidden sm>
      <Button>Hidden in small Up</Button>
    </Hidden>
  </>
);
