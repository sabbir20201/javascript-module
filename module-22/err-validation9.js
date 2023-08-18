// modulwe 9 
function add(num1, num2){
    if(typeof num1 !== 'Number' || typeof num2 !== 'Number'){
        return 'please enter a number';
    }
    return num1 + num2;

}
const result = add(false, 45)
// console.log(result)

function multiply(num1, num2){
    // if(typeof num1 !== 'Number' || typeof num2 !== 'Number'){
    //     return 'please enter a number';
    // }
    return num1 * num2;

}
const output = multiply(12,45);
console.log(output)