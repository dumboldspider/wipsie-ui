import { getCurrentMentionText } from "./getCurrentMentionText";

export function clearCurrentMention(state, trigger, key) {
  try {
    const currentMention = getCurrentMentionText(state.endText.text, trigger);

    return state.transform().selectAll().removeMark(key).collapseToEnd();
    // eslint-disable-next-line no-empty
  } catch (e) {}
}
