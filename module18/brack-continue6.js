// for(var i = 0; i <= 20; i++){
//     console.log(i);
//     if(i > 4 ){
//         break;
//     }
// }


// var roastgiven = 0;
// while(roastgiven < 10){
//     console.log('roast den gift ansi')
//     roastgiven++;
//     if(roastgiven > 4){
//         break;
//     }
// }

// var items = ['bottle','mouse','sunglass','pen']
// for(var i = 0; i < items.length; i++){
//     item = items[i];
//     if(item == 'pen'){
//         break;
//     }
//     console.log(item)
// }
// var numbers = [23,45,67,89,1022,43,22,455,67,889,]
// for(var i = 0; i < numbers.length; i++){
//     number = numbers[i];
//     if(number > 100){
//         break;
//     }
//     console.log(number)
// }
var numbers = [23,45,67,89,1022,43,22,455,67,889,]
for(var i = 0; i < numbers.length; i++){
    number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number)
}