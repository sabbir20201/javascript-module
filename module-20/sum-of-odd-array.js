function getSumArray(numbers){
    let sum = 0
      for(var i = 0; i < numbers.length; i++){
         // let sum = 0
         const index = i;
         const element = numbers[index]
         sum = sum + element;
         console.log(index, element, sum);
      }
      return sum;
}

const myNumbers = [12,65,45,78,32,45,91];
getSumArray(myNumbers)