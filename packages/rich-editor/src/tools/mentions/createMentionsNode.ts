/**
 * It takes an array of children and returns a paragraph node with those children
 * @param children - An array of inline nodes.
 */
export const createMentionsNode = (children = [{ text: "@" }]) => ({
  type: "mention",
  children,
});
