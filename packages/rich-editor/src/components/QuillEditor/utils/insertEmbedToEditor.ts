import useQuill from "./useQuill";

// Insert Image(selected by user) to quill
const insertEmbedToEditor = (value: string, type: string = "image") => {
  const quill = useQuill();
  const range = quill.getSelection();

  const content = quill.insertEmbed(range.index, type, value);

  return content;
};

export default insertEmbedToEditor;
