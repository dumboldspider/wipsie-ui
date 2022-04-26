import { Transforms } from "slate";
import { MentionElementType } from "./Mentions.types";

export const insertMention = (editor, character) => {
  const mention: MentionElementType = {
    type: "mention",
    character,
    children: [{ text: "" }],
  };
  Transforms.insertNodes(editor, mention);
  Transforms.move(editor);
};
