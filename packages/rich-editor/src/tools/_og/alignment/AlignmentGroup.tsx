import React from "react";
import { BaseGroupWrapper } from "../../components/BaseGroupWrapper";
import { AlignCenterButton } from "./AlignCenterButton";
import { AlignLeftButton } from "./AlignLeftButton";
import { AlignRightButton } from "./AlignRightButton";

export const AlignmentGroup = () => {
  return (
    <BaseGroupWrapper>
      <AlignLeftButton />
      <AlignCenterButton />
      <AlignRightButton />
    </BaseGroupWrapper>
  );
};
