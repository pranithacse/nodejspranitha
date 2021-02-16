function greet() {
  const string = `My name is ${this.firstName} ${this.secondName}. I am ${this.age} years old.`;
  console.log(string);
}

const human = {
  firstName: "Pranitha",
  lastName: "Ravi",
  age: 20,
};

greet.call(human); // My name is Judah undefined. I am 26 years old.