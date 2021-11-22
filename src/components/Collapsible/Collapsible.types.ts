// Generated with util/create-component.js
import { Modify } from "../../types/modify";
import { ContainerProps } from "../Container";

export type CollapsibleProps = Modify<
  ContainerProps,
  {
    /**
     * Prop description
     */
    open?: boolean;
    header: string | React.ReactNode;
    headerClassName?: string;
    titleClassName?: string;
    contentStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    as?: string | React.FC<any>;
    /**
     * Button Icon to add on right
     */
    icon?: any | undefined;
  }
>;
