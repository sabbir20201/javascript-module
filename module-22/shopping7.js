    // module 7 
//     const shoppingCard = [
//         {name: 'shoe', price:1200},
//         {name: 'short', price:2200},
//         {name: 'pant', price:3700},
//         {name: 'belt', price:600},
//     ];

//     function totalCost(products){
//         let sum = 0;
//         for(let i = 0; i < products.length; i++){
//         const product = products[i];
//         sum = sum + product.price;
   
//        }
//        return sum;
//     }
//     const expense = totalCost(shoppingCard)
// console.log('total expesnse today', expense)

const shoppingCard = [
    {name: 'shoe', price:1200},
    {name: 'short', price:2200},
    {name: 'pant', price:3700},
    {name: 'belt', price:600},
];
function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i]
        sum = sum + product.price;
    }
   return sum;
}

const totalCostOutput = totalCost(shoppingCard);
console.log(totalCostOutput)