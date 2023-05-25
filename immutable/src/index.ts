type Person = {
  id: string;
  name: string;
  age: number;
};

function excludeYoungPersons(persons: readonly Person[]): Person[] {
  interface newPerson {
    readonly id: string;
    name: string;
    age: number;
  }

  const newPersons: newPerson[] = persons
    .filter((obj) => obj.age > 30)
    .map((obj) => ({ ...obj, id: obj.id } as const));

  return newPersons;
}

export { excludeYoungPersons };
