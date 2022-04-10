export function getStringSizeInKB(str: string) {
  return new TextEncoder().encode(str).length / 1024;
}
