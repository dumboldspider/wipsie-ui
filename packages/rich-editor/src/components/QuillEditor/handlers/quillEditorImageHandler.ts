import useQuill from "../utils/useQuill";
import saveToServer from "../utils/saveToServer";
import selectLocalImage from "../utils/selectLocalImage";

const quillEditorImageHandler = () => {
  const quill = useQuill();
  const uploadUrl = quill.getModule("toolbar")?.options?.uploader?.url;

  //  get a unique local file
  selectLocalImage((file) => {
    const placeholderString = "<b><i>[loading image...]</i></b>";
    const range = quill.getSelection();

    const currentquill = quill.getContents();

    quill.clipboard.dangerouslyPasteHTML(range.index, placeholderString);

    quill.disable();

    // upload to server
    saveToServer(file, uploadUrl)
      .then((result: any) => {
        // return to default quill
        quill.setContents(currentquill);

        quill.insertEmbed(range.index, "image", result?.url);
        quill.setSelection(range.index, 0);

        quill.enable();
      })
      .catch((error) => {
        quill.setContents(currentquill);

        quill.insertText(range.index, error.message);

        quill.setSelection(range.index, 0);
        quill.enable();
      });
  });
};

export default quillEditorImageHandler;
