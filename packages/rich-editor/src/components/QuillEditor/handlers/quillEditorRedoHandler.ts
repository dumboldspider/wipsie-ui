import useQuill from "../utils/useQuill";

const quillEditorRedoHandler = () => {
  const quill = useQuill() as any;

  quill.history.redo();
};

export default quillEditorRedoHandler;
