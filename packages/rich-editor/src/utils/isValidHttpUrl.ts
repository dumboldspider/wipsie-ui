/**
 * It returns true if the given string is a valid HTTP or HTTPS URL, and false
 * otherwise
 * @param {string} str - The string to validate.
 * @returns the value of the variable url.
 */
export function isValidHttpUrl(str: string) {
  let url;

  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
