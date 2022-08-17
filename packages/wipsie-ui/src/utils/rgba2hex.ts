export default function rgba2hex(rgba: string) {
  if (typeof rgba === "string") {
    let match = rgba.match(
      /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    );
    console.log(match);

    return match && match.length === 4
      ? "#" +
          ("0" + parseInt(match[1], 10).toString(16)).slice(-2) +
          ("0" + parseInt(match[2], 10).toString(16)).slice(-2) +
          ("0" + parseInt(match[3], 10).toString(16)).slice(-2)
      : "";
  } else {
    return rgba;
  }
}
