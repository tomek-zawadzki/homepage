const name = "Tomek";
const age = "29";

console.log(name);
console.log(age);
console.log(`ELO ELO 3210, jestem ${name} i mam ${age} lat.`);

const heading = document.querySelector('.week-description__title--js');
heading.innerHTML = `Notatki z pierwszego tygodnia.`;


const allDom = document.querySelector('body');

console.log(allDom);

function greetOlder(name, age) {
    return `Witam Cię przyjacielu w stylu fat arrow, jestem ${name} i liczę sobie ${age} wiosen`;
};

console.log(greetOlder(name, age));

const greetOld = (name, age) => {
    return `Witam Cię przyjacielu w stylu fat arrow, jestem ${name} i liczę sobie ${age} wiosen`;
};


console.log(greetOld(name, age));
console.log(greetOld('joachimek', 13));

const greet = (name, age) => `Witam Cię przyjacielu w stylu skróconego fat arrow, jestem ${name} i liczę sobie ${age} wiosen`;

console.log(greet('Patrynio', 100));