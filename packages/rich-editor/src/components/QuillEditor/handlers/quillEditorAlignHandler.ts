import useQuill from "../utils/useQuill";

type AlignTypes = "left" | "center" | "right" | "justify";

const quillEditorAlignHandler = (value: AlignTypes) => {
  const quill = useQuill();

  const range = quill.getSelection();

  if (range) {
    quill.formatText(range.index, range.length, "align", value);
  }
};

export default quillEditorAlignHandler;
