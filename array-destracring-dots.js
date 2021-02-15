
// array destruching
// const numbers = [55,45];
// const [x,y] = numbers;
// console.log(x,y)

// function add (num){
//     return [num ,num+5];
// }
// const [one , two] = add(5)
// console.log(one,two)

// object distruing
// const person= { id:1,name:'sakil', age:12 }
// console.log(person.id)
// const {name, age, id}= { id:1,name:'sakil', age:12 }
// console.log(name)
// console.log(age)
// console.log(id)
// const person = {name, age, id}= { id:1,name:'sakil', age:12 };
// const {name, age,id} = person;
// console.log(name)
// console.log(age)
// console.log(id)

const p = 30 ;
const q = 20;
const r = 10;
const obj1 = {p:p , q:q ,r:r};
const obj2 = {p , q ,r};
// console.log(obj2)
const Number = [22,11,55,33,77]
Number.push(100)
// createNewArray with  treedotts
const newNumber = [...Number ,200,300,500]
console.log(newNumber)