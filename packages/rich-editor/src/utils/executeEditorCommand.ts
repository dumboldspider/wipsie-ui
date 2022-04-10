// execute action
export function executeEditorCommand(
  editor: HTMLElement,
  cmd: string,
  value: string
) {
  document.execCommand(cmd, false, value);
  editor.focus();
}
