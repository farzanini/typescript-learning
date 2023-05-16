export function maximum(items: number[]) {
  let tempNumb = 0;
  items.map((item) => item > tempNumb && (tempNumb = item));
  return tempNumb;
}
