// program to create JavaScript object using object literal
const person = { 
    name: 'Pranitha',
    age: 20,
    hobbies: ['reading', 'Keyboard', 'Singing', 'coding'],
    greet: function() {
        console.log('Hey You?.');
    },
    score: {
        maths: 99,
        science: 85
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);