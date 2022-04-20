export type MentionElementType = {
  type: "mention";
  character: string;
  children: CustomText[];
};
export type CustomText = {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  text: string;
};
