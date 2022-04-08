import useQuill from "./useQuill";

const insertTextToEditor = (value: string) => {
  const quill = useQuill();
  const range = quill.getSelection();

  const content = quill.insertText(range.index, value);

  return content;
};

export default insertTextToEditor;
