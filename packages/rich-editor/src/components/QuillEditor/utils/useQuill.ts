import { Quill as DefaultQuill } from "quill";

const useQuill = () => {
  const editor = document.querySelector(".ql-container") as any;
  const quill = editor.__quill as DefaultQuill;
  return quill;
};

export default useQuill;
