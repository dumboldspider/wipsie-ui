import { BaseEditor } from "slate";
import { isMod } from "../../utils/isMod";
import { toggleMark } from "../../utils/toggleMark";

// Bold plugin
export const BoldPlugin = (...options: any) => ({
  onKeyDown(event: React.KeyboardEvent<HTMLDivElement>, editor: BaseEditor) {
    if (isMod(event) && event.key === "b") {
      event.preventDefault();
      return toggleMark(editor, "bold");
    }
    return;
  },
});
