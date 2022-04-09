import React from "react";
import { Button } from "@wipsie/ui";
import styled from "styled-components";

const Test = styled(Button)(({ ...props }: any) => {
  return {
    backgroundColor: "red",
  };
});

/**
 * Primary UI component for user interaction
 */
export const Button2 = ({
  backgroundColor = "primary",
  label = "test",
  ...props
}) => {
  return (
    <Button backgroundColor={backgroundColor} {...props}>
      <Test>
        <Test>
          <Test>
            <Test>
              <Test>
                <Test>
                  <Test>
                    <Test>
                      <Test>
                        <Test>{label}</Test>
                      </Test>
                    </Test>
                  </Test>
                </Test>
              </Test>
            </Test>
          </Test>
        </Test>
      </Test>
    </Button>
  );
};
