export function getCaretPosition(editorRef: HTMLElement) {
  var caretPos: number = 0;

  if (document.getSelection()) {
    let range = document.getSelection().getRangeAt(0);
    let tempEl = document.createElement("span");
    let tempRange = range.cloneRange();

    editorRef.insertBefore(tempEl, editorRef.firstChild);
    tempRange.selectNodeContents(tempEl);
    tempRange.setEnd(range.endContainer, range.endOffset);
    caretPos = tempRange.toString().length;
    tempEl.parentNode.removeChild(tempEl);
  }

  return caretPos;
}
