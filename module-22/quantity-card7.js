    // module 7 
    const shoppingCard = [
        { name: 'shoe', price:1200, quantity: 5},
        { name: 'short', price:2200, quantity: 5},
        { name: 'pant', price:3700, quantity: 5} ,
        { name: 'belt', price:600, quantity: 5},
    ];

    function totalCost(products){
        let sum = 0;
        for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;

        sum = sum + productTotal;
   
       }
       return sum;
    }
    const expense = totalCost(shoppingCard)
console.log('total expesnse today', expense)