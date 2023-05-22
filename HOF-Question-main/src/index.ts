function evenNumberFilter(num: number): boolean {
  return num % 2 === 0;
}
function oddNumberFilter(num: number): boolean {
  return num % 2 !== 0;
}
function filter(fn: Function): number[] {
  let array: number[] = [];
  for (let i: number = 0; i < 15; i++) {
    fn(i) && array.push(i);
  }

  return array;
}
export { evenNumberFilter, oddNumberFilter, filter };

console.log(filter(evenNumberFilter));
