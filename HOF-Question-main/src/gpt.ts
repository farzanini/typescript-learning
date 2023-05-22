function evenNumberFilter(num: number): boolean {
  return num % 2 === 0;
}

function oddNumberFilter(num: number): boolean {
  return num % 2 !== 0;
}
function filter(filterFunc: (num: number) => boolean): number[] {
  const filteredNumbers: number[] = [];

  for (let i = 0; i < 15; i++) {
    if (filterFunc(i)) {
      filteredNumbers.push(i);
    }
  }

  return filteredNumbers;
}
export { filter, evenNumberFilter, oddNumberFilter };
