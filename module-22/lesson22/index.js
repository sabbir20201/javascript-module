// const country = 'bangladesh';
// const age = 52;
// const isIndependent = true;
// const student = {
//     id: 121,
//     class: 11,
//     name : 'agun'
// }

// function add(num1, num2){
//     return num1 + num2;
// }
// const friends =[13, 14, 11, 17, 21, 16, 15, 20];

// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof isIndependent);
// console.log(typeof student);
// console.log(Array.isArray(friends));
// console.log(typeof add);

// // ata khub beshu use korbo 
// console.log(friends.includes(19))
// console.log(friends.includes(21))
// // ata khub beshu use korbo 
// if(friends.includes(252) !== -1){

// }

// // concat 
// const newFriendArray = [12, 13, 11, 13];
// const allFriends = newFriendArray.concat(friends);
// console.log(allFriends )

// // module 2 

// const friends = [12,45,32,22,44,62,29,69,87];
// const partial = friends.slice(2, 5)
// console.log(friends);
// // 2 theke suru hbe 5 ar ag porjonto katbe 
// console.log(partial)
// console.log(friends)

// const friends = [12,45,32,22,44,62,29,69,87];

// //  remove element from an array n
// // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// // deleteting element 
// // 
// const partial = friends.splice(2, 5, 99,555,777)
// console.log(partial)
// console.log(friends)
// module 3 
// const names =['abul','babul','cabul','dabul','ebul','abul','kabul','cabul','abul','babul','gabul'];
// console.log('allnames',names)

// function removeDublicate(names){
//     const unique = [];
//     for(let i = 0; i<names.length; i++){
//         const name = names[i];
//           if(unique.includes(name) === false){
//             unique.push(name)
//           }
//     }
//     return unique;
// }
// const unikname = removeDublicate(names);
// console.log(unikname)

// show out from 1-50
// if the number is divisible by 3 then insted of the number show 'foo'
// if the number is divisible by 5 then insted of the number show 'bar'
// if the number is divisible by both 3 and 5  then insted of the number show 'foobarf'

    // for(let i = 1; i<= 50; i++){
    //     if(i % 3 === 0){
    //         console.log('foo')
    //     }else if(i % 5 === 0){
    //        console.log('bar')
    //     }else if(i % 3 === 0 && i % 5 === 0){
    //         console.log('foobar')
    //     }
    //     else{
            
    //         console.log(i)
    //     }
    // }
// module 5 
    // function woodCalculator(chairCuantity , tableQuantity , bedQuantity){

    //     const perChairWood = 3;
    //     const perTableWood = 10;
    //     const perBedWood = 50;

    //     const chairWood = chairCuantity * perChairWood;
    //     const tableWood = tableQuantity * perTableWood;
    //     const bedWood =  bedQuantity * perBedWood;
       
    //     // console.log(chairCuantity, tableQuantity, bedQuantity)
    //     const totalWood = chairWood + tableWood + bedWood;
    //     return totalWood;
    // }

    // const totalWood = woodCalculator(1, 1, 1)
    // console.log(totalWood)


    // // module 6 

    // const phones = [
    //     {name: 'sumsung', camera: 12, storage: '32gb', price:36000, color:'silver'},
    //     {name: 'walton', camera: 12, storage: '32gb', price:22000, color:'silver'},
    //     {name: 'iphone', camera: 12, storage: '32gb', price:82000, color:'silver'},
    //     {name: 'Xaomi', camera: 12, storage: '32gb', price:52000, color:'silver'},
    //     {name: 'Oppo', camera: 12, storage: '32gb', price:50000, color:'silver'},
    //     {name: 'Nokia', camera: 12, storage: '32gb', price:44000, color:'silver'},
    //     {name: 'Htc', camera: 12, storage: '32gb', price:2000, color:'silver'}
    // ];
    
    // function cheapestPhone(phones){
    //     let cheapest = phones[0];
    //  for(let i = 0; i < phones.length; i++){
    //     const phone = phones[i];
    //     if(phone.price < cheapest.price){
    //         cheapest = phone;
    //     }

    //  }
    //  return cheapest;
    // }
    
    // const mySelection = cheapestPhone(phones);
    // console.log(mySelection)



//     // module 7 
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



//     // module 7 
//     const shoppingCard = [
//         { name: 'shoe', price:1200, quantity: 5},
//         { name: 'short', price:2200, quantity: 5},
//         { name: 'pant', price:3700, quantity: 5} ,
//         { name: 'belt', price:600, quantity: 5},
//     ];

//     function totalCost(products){
//         let sum = 0;
//         for(let i = 0; i < products.length; i++){
//         const product = products[i];
//         const productTotal = product.price * product.quantity;

//         sum = sum + productTotal;
   
//        }
//        return sum;
//     }
//     const expense = totalCost(shoppingCard)
// console.log('total expesnse today', expense)


// module 8
// 1. if ticket number is less then 100, per ticket price:100
// 2. if ticket is more then 100, but less thrn 200. first 100 ticket will be 100/ ticket 
// rest ticket will be 90 taka per pices 
    //  first 100 n ---> 100 talka 
// 3. if you purches more then 200 tickets
// first 100 ---> 100taka
// 101-200 -----> 90taka 
// 200+----------> 70 taka

// function ticketPrice(ticketQuantity){
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const restTicketRate = 70;
//     if(ticketQuantity <= 100){
//         const price = ticketQuantity * first100Rate;
//         return price;
//     }else if(ticketQuantity <= 200){
//         const first100Price = 100 * first100Rate;
//         const restTicketQuantity = ticketQuantity - 100;
//         const restTicketPrice = restTicketQuantity * second100Rate;
//         const totalPrice = first100Price + restTicketPrice;
//         return totalPrice;
         
//     }else{
//         const first100Price = 100 * first100Rate;
//         const second100Price = 100 * second100Rate;
//         const restTicketQuantity = ticketQuantity - 200;
//         const restTicketPrice = restTicketQuantity * restTicketRate;
//         const totalCost = first100Price + second100Price + restTicketPrice;
//         return totalCost;
//     }

// }

// const price = ticketPrice(120);
// console.log(price)
// // modulwe 9 
// function add(num1, num2){
//     if(typeof num1 !== 'Number' || typeof num2 !== 'Number'){
//         return 'please enter a number';
//     }
//     return num1 + num2;

// }
// const result = add(false, 45)
// // console.log(result)

// function multiply(num1, num2){
//     // if(typeof num1 !== 'Number' || typeof num2 !== 'Number'){
//     //     return 'please enter a number';
//     // }
//     return num1 * num2;

// }
// const output = multiply(12,45);
// console.log(output)

// let sum=0; 
// for( let i = 0; i<=3;i++){ 
// sum = sum + i;
// console.log(sum)
// return sum;
// }
// let array = [12,12,34];
// array[array.length+1]  = 5
// console.log(array)


// console.log(names)
// let array = [1,2,3,4,5,6]
// array.push(22)
// console.log(array)
// console

// let print = console.log.bind();
// print('anything you want to print');
// console.log();

// function ticketDiscount(ticketCount){
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const rest100Rate = 70;
//     if(ticketCount <= 100){
//         const ticketPrice = first100Rate * ticketCount;
//         return ticketPrice
//     }else if(ticketCount <= 200){
//         const first100TickePrice = 100 * first100Rate;
//         const restTicetQuantity  = ticketCount - 100;
//         const restSecondPrice = restTicetQuantity * second100Rate;
//         const totalPrice = first100TickePrice + restSecondPrice;
//         return totalPrice;

//     }else{
//        const first100Price = 100 * first100Rate;
//        const second100Price = 100 * second100Rate;
//        const restTicetQuantity = ticketCount - 200;
//        const restTicketPrice = restTicetQuantity * 70;
//        const totalPrice = first100Price + second100Price + restTicketPrice;
//        return totalPrice;
//     }

// }

// const ticketCount = 230;
// const output = ticketDiscount(ticketCount)
// console.log(output)


// function ticketPrice(ticketQuantity){
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const restTicketRate = 70;
//     if(ticketQuantity <= 100){
//         const price = ticketQuantity * first100Rate;
//         return price;
//     }else if(ticketQuantity <= 200){
//         const first100Price = 100 * first100Rate;
//         const restTicketQuantity = ticketQuantity - 100;
//         const restTicketPrice = restTicketQuantity * second100Rate;
//         const totalPrice = first100Price + restTicketPrice;
//         return totalPrice;
         
//     }else{
//         const first100Price = 100 * first100Rate;
//         const second100Price = 100 * second100Rate;
//         const restTicketQuantity = ticketQuantity - 200;
//         const restTicketPrice = restTicketQuantity * restTicketRate;
//         const totalCost = first100Price + second100Price + restTicketPrice;
//         return totalCost;
//     }

// }

// const price = ticketPrice(102);
// console.log(price)
// console.log();
// console.log();
// let print = console.log.bind();
// print('anything you want to print');

// for(let i = 0; i <= 50; i++){
//     if(i % 3 === 0){
//         console.log('foo')
//     }
//     else if(i % 5 === 0){
//         console.log('bar')
    
//     }else if(i % 3 === 0 && i % 5 === 0){
//         console.log('foobar')
//     }
//     else{

// //         console.log(i)
// //     }
// }

// chat gpt 
// function calculateTicketPrice(totalTickets) {
//     const first100TicketsPrice = 100;
//     const extra100TicketsPrice = 90;
//     const extra200TicketsPrice = 70;
  
//     let totalPrice = 0;
  
//     if (totalTickets <= 100) {
//       totalPrice = totalTickets * first100TicketsPrice;
//     } else if (totalTickets > 100 && totalTickets <= 200) {
//       totalPrice = 100 * first100TicketsPrice + (totalTickets - 100) * extra100TicketsPrice;
//     } else {
//       totalPrice = 100 * first100TicketsPrice + 100 * extra100TicketsPrice + (totalTickets - 200) * extra200TicketsPrice;
//     }
  
//     return totalPrice;
//   }
  
//   // Test cases
//   console.log(calculateTicketPrice(120));  // Output: 5000
//   console.log(calculateTicketPrice(120)); // Output: 10800
//   console.log(calculateTicketPrice(250)); // Output: 17500
  