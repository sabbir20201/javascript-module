function factrial(number){
    let result = 1;
for(let i = number; i >= 1; i--){
    result = result * i;
     console.log(i);
}
return result
}
const number = 5
const fact = factrial(number);
console.log("factorial of 9: ",number ,fact)