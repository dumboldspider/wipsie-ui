export function getSearchText(currentMentionText, lastCharacter) {
  return `${currentMentionText}${lastCharacter}`.substring(1);
}
