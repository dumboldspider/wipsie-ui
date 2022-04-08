import useQuill from "../utils/useQuill";

const quillEditorLinkHandler = () => {
  const quill = useQuill();

  // prompt user for link
  const link = prompt("Enter a URL to insert");

  // if user entered a link
  if (link) {
    quill.format("link", link);
  }
};

export default quillEditorLinkHandler;
