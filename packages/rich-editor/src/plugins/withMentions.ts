export const withMentions = (editor) => {
  try {
    const { isInline, isVoid } = editor;

    editor.isInline = (element) => {
      return element.type === "mention" ? true : isInline(element);
    };

    editor.isVoid = (element) => {
      return element.type === "mention" ? true : isVoid(element);
    };

    return editor;
    // eslint-disable-next-line no-empty
  } catch (e) {}
};
