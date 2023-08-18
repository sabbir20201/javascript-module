const two = 2;
const randomNumber = 37;
const vagses = randomNumber % 2;
console.log(vagses)

if(vagses == 0 ){
   console.log(`the number ${randomNumber} is jor`)
}else{
     console.log(`the number ${randomNumber} is bijor`)
}


// odd bijor  even jor 
function isEven(randomNumber){
    const tow = 2;
    const evenNumber = randomNumber % 2;
    if(evenNumber == 0){
         console.log(`the number ${randomNumber} is even or jor`)
         // return true
    }else if(evenNumber != 0){
        console.log(`the number ${randomNumber} is bijor`)
    //     return false 
    }
}

const randomNumberInput = 9;
const output = isEven(randomNumberInput);
console.log(output)