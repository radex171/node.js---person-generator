const fs = require('fs');

const genders = ['f', 'm',];
const maleNames = [
    'Krzysztof',
    'Adam',
    'Michał',
    'Maciej',
    'Grzegorz',
    'Wojciech',
    'Rafał',
    'Bartłomiej',
];

const femaleNames = [
    'Katarzyna',
    'Monika',
    'Małgorzata',
    'Sylwia',
    'Barbara',
    'Ewelina',
    'Oliwia',
];

const lastNames = [
    'Iks',
    'igrek',
    'Nowak',
    'Wu',
    'Em',
    'Zet',
];

randChoice = arr => arr[Math.floor(Math.random() * arr.length)];

const people = [];

for (let i = 1; i <= 20; i++) {

    let person = {};

    person.gender = randChoice(genders);

    let name = () => {
        if (person.gender == 'f') {
            return randChoice(femaleNames);
        }
        else if (person.gender == 'm') {
            return randChoice(maleNames);
        }
    };

    person.name = name();

    person.surname = lastNames[Math.floor(Math.random() * lastNames.length)];

    person.age = Math.floor(Math.random() * (50 - 18)) + 18;
    console.log(person.age)
    people.push(person);
}
console.log(people)

const data = JSON.stringify(people)
fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
console.log(data);
