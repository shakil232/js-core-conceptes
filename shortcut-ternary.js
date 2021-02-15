                            //   SHORTCUT APPLY
// defaultValue 2ways
function add (num1  , num2 = 2){
    // num2=num2 || 2
    return num1+num2
}
const result = add (8)
// console.log(result)
 
// NumbertoString
const number = 20 +''
// console.log(number)

// StringToNumber
const string = + "10"
// console.log(string)

// conditionApply
const money = 150;
// let food;
// if( money >100){
// food = "berani"
// }

// else{
//     food = "alu vorta"
// }
const food = money>100 ? 'berani' : 'alu vorta';
// console.log(food)
const active = true;
const cssClass = active ? 'presentClass' : 'absencClass';
// console.log(cssClass)
const x = active && 'allRight'
console.log(x)
const active2 = false;
const y = active2 || 'someThing Worrng';
console.log(y)