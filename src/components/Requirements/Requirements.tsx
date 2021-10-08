import { Requirement } from "./Requirement";
import React, { useCallback, useEffect } from "react";

export const Requirements = (props: any) => {
  const { value, requirements, onValidChange } = props;
  const validChangeCb = useCallback(onValidChange, []);

  useEffect(() => {
    validChangeCb(requirements.every((r: any) => r.validator(value)));
  }, [value, requirements, validChangeCb]);

  return requirements.map((r: any, index: any) => (
    <Requirement
      key={index}
      value={value}
      requirement={r}
      onValidChange={onValidChange}
    />
  ));
};
