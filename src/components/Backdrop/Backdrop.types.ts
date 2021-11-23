import { PortalProps } from "../Portal";
import { FixedTypes } from "../Fixed";
// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { AnimationTransitions } from "../Animated";

export type BackdropProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    type?: FixedTypes;
    duration?: number;
    visible: boolean;
    transition?: AnimationTransitions;
    noPortal?: boolean;
    portalProps?: PortalProps;
  }
>;
