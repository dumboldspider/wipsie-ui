import { BaseEditor } from "slate";
import { isMod } from "../../utils/isMod";
import { toggleMark } from "../../utils/toggleMark";

// Strikethrough plugin
export const StrikethroughPlugin = (...options: any) => ({
  onKeyDown(event: React.KeyboardEvent<HTMLDivElement>, editor: BaseEditor) {
    if (isMod(event) && event.key === "s") {
      event.preventDefault();
      return toggleMark(editor, "strikethrough");
    }
    return;
  },
});
