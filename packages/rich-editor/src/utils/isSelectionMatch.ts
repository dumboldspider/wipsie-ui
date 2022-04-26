import { getNodes } from "../queries/getNodes";

export const isSelectionMatch = (editor, type, options = {}) => {
  try {
    const [match] = getNodes(editor, {
      ...options,
      match: (node: any) => node.type === (type as any),
    });
    return !!match;
    // eslint-disable-next-line no-empty
  } catch (e) {}
};
