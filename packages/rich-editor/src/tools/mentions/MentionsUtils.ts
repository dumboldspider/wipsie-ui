import { Transforms } from "slate";
import { MentionDataType, MentionElementType } from "./Mentions.types";

/**
 * It inserts a mention element into the editor, and then moves the cursor to the
 * end of the mention
 * @param editor - The editor object
 * @param {MentionDataType} data - MentionDataType
 */
export const insertMention = (editor, data: MentionDataType) => {
  const mention: MentionElementType = {
    type: "mention",
    key: data.key,
    id: data.id,
    children: [{ text: "" }],
  };
  Transforms.insertNodes(editor, mention);
  Transforms.move(editor);
};

/**
 * It takes an array of children and returns a paragraph node with those children
 * @param children - An array of inline nodes.
 */
export const createMentionsNode = (children = [{ text: "@" }]) => ({
  type: "mention",
  children,
});
