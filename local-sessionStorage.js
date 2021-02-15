
const person = {
    id:1,
    name:'shakil',
    age: 25,
    district: 'tangail',
    selary:2298848
}

// localStorage.setItem('userid' ,233)
localStorage.setItem('person' , JSON.stringify(person))
const storedData = localStorage.getItem('person');
const parsePerson = JSON.parse(storedData);
console.log(parsePerson.name)
const key = Object.keys(person);
console.log(key);
const value = Object.values(person);
console.log(value)