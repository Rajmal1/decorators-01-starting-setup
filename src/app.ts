function Logger(logString: string) {
  return function name(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
    console.log(logString);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name: String;

  constructor() {
    this.name = "Max";
    console.log("Creating person object...");
  }
}

const pers = new Person();
console.log(pers);
