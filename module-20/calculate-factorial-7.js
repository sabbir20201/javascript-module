let sum = 0;
for(let i = 0; i <= 7; i++){
   sum = sum + i;
   console.log(i, sum);
}

function sumOfNumbers(number){
     let sum = 0;
   for(let i = 1; i <= number; i++){
      sum = sum + i;
      console.log(i, sum);
    }
      return sum

}

sumOfNumbers(7)



// function multiplicatonOfNumber(number){
//     let result = 1;
//     for(let i = 1; i <= number; i++){
//         result = result * i;
//     } 
//     return result;

// }
// const result = multiplicatonOfNumber(9)
// console.log(result)