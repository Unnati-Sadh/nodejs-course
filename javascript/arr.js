const hobbies = ['Sports', 'Cooking'];

/* for(let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby)); */

hobbies.push('Programming');
console.log(hobbies);

//spread operator
const copiedHobbies = [...[hobbies]];
console.log(copiedHobbies);

//rest operator
const rest = (...args) => {
    return args;
}
console.log(rest(1,2,3,4,6,4,3));