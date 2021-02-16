// program to create JavaScript object using instance of an object

function Person() {
    this.name = 'pranitha',
    this.age = 18,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello to my fantasy.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);