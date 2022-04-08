import useQuill from "../utils/useQuill";

const quillEditorUndoHandler = () => {
  const quill = useQuill() as any;

  quill.history.undo();
};

export default quillEditorUndoHandler;
