import { Button, Link } from "@wipsie/ui";
import { serviceLinks } from "../configs/serviceLinks";
import React from "react";

const Logout = () => {
  return (
    <Link href={`${serviceLinks.auth}/logout?to=${window.location.href}`}>
      <Button>Logout</Button>
    </Link>
  );
};

export default Logout;
