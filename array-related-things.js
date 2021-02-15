



const friendsName = ['shakil', 'rakib', 'robin' ,'hridoy', 'prijom']
const age = [24, 25, 20, 21, 26]
const products = [
    {id:1 ,name:'tv', price:500},
    {id:2 ,name:'leptop', price:400},
    {id:3 ,name:'mobile', price:30},
    {id:4 ,name:'watch', price:100},
    {id:5 ,name:'spiker', price:20}
]
// Map retrun korbe 1line hole amni tei korebe {er vitor er glo korate hbe retrun}
const names = products.map(pd => pd.name)
const prices = products.map(pd => pd.price)
// console.log(names)
// console.log(prices)
const prices2 = products.map(pd => {
    return pd.id
})
// console.log(prices2)
// ForEach retrun kore na
products.forEach(price => {
    
});

// Filters
const chiper = products.filter(pd => pd.price <100)
const ids = products.filter(pd => pd.id !=3)
// console.log(chiper)
// console.log(ids)

// Find
const productName = products.find(pd => pd.name === 'watch')
console.log(productName)