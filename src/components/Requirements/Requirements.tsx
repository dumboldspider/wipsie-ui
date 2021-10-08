import { Requirement } from "./Requirement";
import React, { useCallback, useEffect } from "react";

export const Requirements = ({ value, requirements, onValidChange }: any) => {
  const validChangeCb = useCallback(onValidChange, []);

  useEffect(() => {
    validChangeCb(requirements.every((r: any) => r.validator(value)));
  }, [value, requirements, validChangeCb]);

  return requirements.map((r: any, index: any) => (
    // <p>aa</p>
    <Requirement
      key={index}
      value={value}
      requirement={r}
      onValidChange={onValidChange}
    />
  ));
};
