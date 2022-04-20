import { getNodes } from "../queries/getNodes";

export const isSelectionMatch = (editor, type, options = {}) => {
  const [match] = getNodes(editor, {
    ...options,
    match: (node: any) => node.type === (type as any),
  });
  return !!match;
};
