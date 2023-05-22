type NumberFilter = (num: number) => boolean;

function evenNumberFilter(num: number): boolean {
  return num % 2 === 0;
}
function oddNumberFilter(num: number): boolean {
  return num % 2 !== 0;
}

function filter(fn: NumberFilter): number[] {
  return Array.from(Array(15).keys()).filter(fn);
}

export { filter, evenNumberFilter, oddNumberFilter };

console.log(filter(evenNumberFilter));
