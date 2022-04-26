import React from "react";
import { BaseGroupWrapper } from "../../components/BaseGroupWrapper";
import { OrderedListButton } from "./OrderedListButton";
import { UnorderedListButton } from "./UnorderedListButton";

export const ListGroup = () => {
  return (
    <BaseGroupWrapper>
      <OrderedListButton />
      <UnorderedListButton />
    </BaseGroupWrapper>
  );
};
