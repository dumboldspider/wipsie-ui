const warningStack: { [key: string]: boolean } = {};

const useWarning = (message: string, component?: string) => {
  const tag = component ? ` [${component}]` : " ";
  const log = `[Wipsie UI]${tag}: ${message}`;
  if (typeof console === "undefined") return;
  if (warningStack[log]) return;
  warningStack[log] = true;

  return console.error(log);

  // console.warn(log);
};

export default useWarning;
