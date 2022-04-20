import { getCurrentMentionText } from "./getCurrentMentionText";

export function clearCurrentMention(state, trigger, key) {
  const currentMention = getCurrentMentionText(state.endText.text, trigger);

  return state.transform().selectAll().removeMark(key).collapseToEnd();
}
