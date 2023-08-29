//object
const person = {
    name: 'Unnz',
    age: 21,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
const {name, age} = person;
console.log(name, age);

//array
const hobbies = ['Sports', 'Cooking', 'Singing', 'Programming'];
const [a, b, c, d] = hobbies;
console.log(a, b);
