var isGradate = false;
// var salary = 25000;
var salary = 75000;
// var cars = 0;
var house = 1
var cars = 1;

if(isGradate == true){
    console.log("aso biye kori feli")
}else{
    console.log("tor kopale biya nai")
}

if(isGradate == true && salary > 50000){
    console.log("aso biye kori feli")
}else{
    console.log("tor kopale biya nai")
}

if(isGradate == true && salary > 50000 && cars >= 1){
    console.log("aso biye kori feli")
}else{
    console.log("tor kopale biya nai")
}

if(isGradate === true || salary > 50000 || cars > 1){
    console.log("eso prem kori")
}else{
    console.log("tor kopale biya nai")
}

 if((isGradate === true && salary > 5000) || cars >= 1){
     console.log("eso prem kori")
 }else{
    console.log("tor kopale biya nai")
}

 if((isGradate === true && salary > 5000) || (cars >= 1 && house == 1)){
     console.log("eso prem kori")
 }else{
    console.log("tor kopale biya nai")
}