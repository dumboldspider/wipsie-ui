import { alignCenterTool } from "./controllers/alignCenter.tool";
import { alignLeftTool } from "./controllers/alignLeft.tool";
import { alignRightTool } from "./controllers/alignRight.tool";
import { backColorTool } from "./controllers/backColor.tool";
import { boldTool } from "./controllers/bold.tool";
import { clearTool } from "./controllers/clear.tool";
import { codeTool } from "./controllers/code.tool";
import { emojiTool } from "./controllers/emoji.tool";
import { fontsTool } from "./controllers/fonts.tool";
import { fontSizesTool } from "./controllers/fontSizes.tool";
import { foreColorTool } from "./controllers/foreColor.tool";
import { headingsTool } from "./controllers/headings.tool";
import { imageTool } from "./controllers/image.tool";
import { italicTool } from "./controllers/italic.tool";
import { orderedListTool } from "./controllers/orderedList.tool";
import { quoteTool } from "./controllers/quote.tool";
import { redoTool } from "./controllers/redo.tool";
import { rgbTool } from "./controllers/rgb.tool";
import { spoilerTool } from "./controllers/spoiler.tool";
import { underlineTool } from "./controllers/underline.tool";
import { undoTool } from "./controllers/undo.tool";
import { unorderedListTool } from "./controllers/unorderedList.tool";

export const defaultToolbar = [
  [boldTool, italicTool, underlineTool],
  [headingsTool],
  [fontsTool],
  [fontSizesTool],
  [unorderedListTool, orderedListTool],
  [alignLeftTool, alignCenterTool, alignRightTool],
  [quoteTool, codeTool],
  [imageTool],
  [undoTool, redoTool, clearTool],
  [foreColorTool, backColorTool],
  [spoilerTool, rgbTool, emojiTool],
];
