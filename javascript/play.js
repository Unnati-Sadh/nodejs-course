//var names = 'Unnz';
//var age = 21;
//var hasHobbies = true;
const names = 'Unnz';
let age = 21;
const hasHobbies = true;

const summary = (userName, userAge, userHasHobby) => {
    return('Name of student is ' + userName + ', age is ' + userAge + ', any hobbies? ' + userHasHobby);
}

console.log(summary(names, age, hasHobbies));
//-------------------------------------------------------------------------------------------------------------//
const person = {
    name: 'Unnz',
    age: 21,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();

//spread operator
const copiedPerson = {...person};
console.log(copiedPerson);