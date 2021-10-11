// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Container from "./Container";
import { ContainerProps } from "./Container.types";

describe("Test Component", () => {
  let props: ContainerProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Container {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "Daniel was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Container");

    // expect(component).toHaveTextContent("Daniel was here");
  });
});
