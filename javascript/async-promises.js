//promises
const fetch = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 500);
    });
    return promise;
};
//asynchronous timer
setTimeout(() => {
    console.log('Timer is out!');
    fetch()
    .then(text => {
        console.log(text);
        return fetch();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 700);

console.log('Hello!');
console.log('Hi!');


