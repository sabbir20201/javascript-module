// module 8
// 1. if ticket number is less then 100, per ticket price:100
// 2. if ticket is more then 100, but less thrn 200. first 100 ticket will be 100/ ticket 
// rest ticket will be 90 taka per pices 
    //  first 100 n ---> 100 talka 
// 3. if you purches more then 200 tickets
// first 100 ---> 100taka
// 101-200 -----> 90taka 
// 200+----------> 70 taka

// const { log } = require("console");
// const { CLIENT_RENEG_LIMIT } = require("tls");

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
         
    }else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }

}

const price = ticketPrice(120);
console.log(price)
// console.log();
// console.log();
// let print = console.log.bind();
// print('anything you want to print');
