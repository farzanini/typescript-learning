export function and(items: boolean[]): boolean {
  let tempBool = true;
  items.map((item) => (tempBool = tempBool && item));
  return tempBool;
}
