function getSumArray(numbers){
    let sum = 0
      for(var i = 0; i < numbers.length; i++){
         // let sum = 0
         const index = i;
         const element = numbers[index]
         sum = sum + element;
         // console.log(index, element, sum);
      }
      return sum;
}

function getOddNumberOfAnArray(numbers){
    const oddNumber = []
   for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
       if(element % 2 !== 0){
         // element % 2 == 1
         console.log(index, element)
         oddNumber.push(element)
       }
    }
    return oddNumber;
}

const myNumbers = [12,65,45,78,32,45,91];
const oddNumbers = getOddNumberOfAnArray(myNumbers)
console.log(oddNumbers)
const oddnumbersum =  getSumArray(oddNumbers)
console.log("odd number sum :" ,oddnumbersum)
