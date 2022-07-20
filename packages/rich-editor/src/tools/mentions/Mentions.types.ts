export type MentionDataType = {
  key: string;
  id: string;
};

export type MentionElementType = {
  type: "mention";
  children: CustomText[];
} & MentionDataType;

export type CustomText = {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  text: string;
};

export type MentionsPluginConstructor = {
  searchUrl: string;
  getUserUrl: string;
  accessToken?: string;
  matchRegex?: RegExp;
  matchPrefix?: string;
  renderElement?: (props: any) => JSX.Element;
};
