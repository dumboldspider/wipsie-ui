export function setCaretPosition(editorRef: HTMLElement, pos: number) {
  if (document.getSelection()) {
    let range = document.getSelection().getRangeAt(0);
    let tempEl = document.createElement("span");
    let tempRange = range.cloneRange();

    editorRef.insertBefore(tempEl, editorRef.firstChild);
    tempRange.selectNodeContents(tempEl);
    tempRange.setEnd(range.endContainer, range.endOffset);
    tempRange.setStart(range.endContainer, range.endOffset);
    tempRange.setStart(tempEl.firstChild, pos);
    range.deleteContents();
    range.insertNode(tempRange.extractContents());
    range.selectNodeContents(tempEl);
    range.collapse(false);
    tempEl.parentNode.removeChild(tempEl);
  }
}
