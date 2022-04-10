import { ReactNode } from "react";

export type ToolbarItemProps = {
  id: string;
  command: string;
  value: string | object | (() => string | object);
  icon: ReactNode;
  action?: (value: string) => void;
  keyEvent?: (event: React.KeyboardEvent<HTMLDivElement>) => boolean;
  format: "button" | "select" | "custom";
  component?: React.FC<any>;
  metadata?: { [key: string]: any };
  visible?: boolean;
};

export type ToolBarType = ToolbarItemProps[][] | ToolbarItemProps[];
