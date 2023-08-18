// function mileTOkilometers(miles){
//      const kiloCalculator = miles * 1.60934;
//      return kiloCalculator;
   
// }

// const kilometerCount = 1;
// const main = mileTOkilometers(kilometerCount);
// console.log(main);

// function isLeepYear(year){
//      const remainder = year % 4;
//      if(remainder === 0){
//      // odd bijor  even jor 
// function isEven(randomNumber){
//      const tow = 2;
//      const evenNumber = randomNumber % 2;
//      if(evenNumber == 0){
//           console.log(`the number ${randomNumber} is even or jor`)
//           // return true
//      }else if(evenNumber != 0){
//          console.log(`the number ${randomNumber} is bijor`)
//      //     return false 
//      }
// }

// const randomNumberInput = 9;
// const output = isEven(randomNumberInput);
// console.log("yor ")
//      }else{

//      }

// }

// function getSumOfArray(numbers){
//    for(var i=0; i < numbers.length;i++);
//    const index = i;
//    const element = numbers[index]
//    console.log(index, element)
// }

// const myNumbers = [12,65,45,78,32,91];
// getSumOfArray(myNumbers);
// function print(a, b, c){
//      return a+2;
//      return a*b;
//      return b*c+a;
//     }
//     console.log(print(1,2,3));
// module 5 
// function getSumArray(numbers){
//      let sum = 0
//        for(var i = 0; i < numbers.length; i++){
//           // let sum = 0
//           const index = i;
//           const element = numbers[index]
//           sum = sum + element;
//           // console.log(index, element, sum);
//        }
//        return sum;
//  }
 
// function getOddNumberOfAnArray(numbers){
//      const oddNumber = []
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element % 2 !== 0){
//           // element % 2 == 1
//           console.log(index, element)
//           oddNumber.push(element)
//         }
//      }
//      return oddNumber;
// }

//  const myNumbers = [12,65,45,78,32,45,91];
//  const oddNumbers = getOddNumberOfAnArray(myNumbers)
//  console.log(oddNumbers)
// const oddnumbersum =  getSumArray(oddNumbers)
// console.log("odd number sum :" ,oddnumbersum)

// module 7

// let sum = 0;
// for(let i = 0; i <= 7; i++){
//    sum = sum + i;
//    console.log(i, sum);
// }

// function sumOfNumbers(number){
//      let sum = 0;
//    for(let i = 1; i <= number; i++){
//       sum = sum + i;
//       console.log(i, sum);
//     }
//       return sum

// }

// sumOfNumbers(7)

// function multiplicatonOfNumber(number){
//      let result = 1;
//      for(let i = 1; i <= number; i++){
//          result = result * i;
//      } 
//      return result;
 
//  }
//  const result = multiplicatonOfNumber(9)
//  console.log(result)



// module 8 

// function factrial(number){
//      let result = 1;
//  for(let i = number; i >= 1; i--){
//      result = result * i;
//       console.log(i);
//  }
//  return result
// }
// const number = 5
// const fact = factrial(number);
// console.log("factorial of 9: ",number ,fact)


// function factorial(number){
//      let i = number;
//      let result = 1;
//      while(i <= 1){
//           result = result * i;
//           i--;
//      }
//      return result;
// }
// const output = factorial(7);
// console.log(output);

function getFactorial1(number){
     let factorial = 1;
     for(let i = 0; i <= 7; i++){
          factorial = factorial * i;
     }
     return factorial;

}
const factorial = getFactorial1(8);
console.log("factorial of 8 is ", factorial)