class Person {
  private name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet() {
    console.log(`Hello im ${this.name} and im ${this.age} years old`);
  }

  private getSecret() {
    console.log("This is a secret");
  }
}
export default Person;
