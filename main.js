const name = "Tomek";
const age = "29";

console.log(name);
console.log(age);
console.log(`ELO ELO 3210, jestem ${name} i mam ${age} lat.`);

const heading = document.querySelector('.week-description__title--js');
heading.innerHTML = `Notatki z pierwszego tygodnia.`;


const allDom = document.querySelector('body');

console.log(allDom)

function greet(name, age) {
    return `Witam Cię przyjacielu jestem ${name} i liczę sobie ${age} wiosen`
}

console.log(greet(name, age));