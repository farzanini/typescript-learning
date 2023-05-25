type Person = {
  id: string;
  name: string;
  age: number;
};

function excludeYoungPersons(value: readonly Person[]): readonly Person[] {
  let result: Person[] = [];
  for (let i: number = 0; i < value.length; i++) {
    if (value[i].age >= 30) {
      result.push(value[i]);
    }
  }
  return result;
}

export { excludeYoungPersons };
