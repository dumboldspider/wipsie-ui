import { Transforms } from "slate";
import { getNodes } from "../../queries/getNodes";

export const HEADING_TYPE = "heading";

export const HEADING_LEVELS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "body1",
  "body2",
  "label",
] as ReadonlyArray<any>;

export const PARAGRAPH_TYPE = "paragraph";

export const HEADING_COMPONENTS = {
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
  body1: "Paragraph",
  body2: "Whisper",
  label: "Label",
};

export const getHeadingNodes = (editor, level, options = {}) => {
  return getNodes(editor, {
    ...options,
    match: (node) =>
      node.type === (HEADING_TYPE as any) && node.level === level,
  });
};

export const getAnyHeadingNodes = (editor, options = {}) => {
  return getNodes(editor, {
    ...options,
    match: (node) => node.type === (HEADING_TYPE as any),
  });
};

export const isSelectionInHeading = (editor, level, options = {}) => {
  const [match] = getHeadingNodes(editor, level, options);
  return !!match;
};

export const isSelectionAnyInHeading = (editor, options = {}) => {
  const [match] = getAnyHeadingNodes(editor, options);
  return !!match;
};

export const toggleHeadingNodes = (
  editor,
  level,
  defaultType = PARAGRAPH_TYPE
) => {
  if (HEADING_LEVELS.includes(level)) {
    const isActive = isSelectionInHeading(editor, level);

    const defaultNode = { type: defaultType, level: null };

    const heading = {
      type: HEADING_TYPE,
      level: level,
      children: [],
    };

    const node = isActive ? defaultNode : heading;

    Transforms.setNodes(editor, node as any);
  } else {
    throw new Error(`Only ${HEADING_LEVELS} levels are enabled.`);
  }
};
