// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Typography from "./Typography";
import TypographyProps from "./Typography.types";

describe("Test Component", () => {
  let props: TypographyProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<Typography {...props} />);

  it("should render foo text correctly", () => {
    // props.foo = "Daniel was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Typography");

    // expect(component).toHaveTextContent("Daniel was here");
  });
});
