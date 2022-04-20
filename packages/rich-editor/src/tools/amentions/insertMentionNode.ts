import { getCurrentMentionText } from "./getCurrentMentionText";
import { isInsideMention } from "./isInsideMention";

export function insertMentionNode(data, state, trigger, type) {
  let transform = state.transform();

  if (isInsideMention(state, type)) {
    const currentMention = getCurrentMentionText(state.endText.text, trigger);
    transform = transform.deleteBackward(currentMention.length);
  }

  const mention = { isVoid: true, type, data };

  return transform.insertInline(mention).collapseToStartOfNextText();
}
