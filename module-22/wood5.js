function woodCalculator(chairCuantity , tableQuantity , bedQuantity){

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairCuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood =  bedQuantity * perBedWood;
   
    // console.log(chairCuantity, tableQuantity, bedQuantity)
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(1, 1, 1)
console.log(totalWood)


// self 
// function woodCalculate(chairQuantity, tableQuantity , bedQuantity){
//     const oneChairWood = 3;
//     const oneTableWood = 10;
//     const oneBedWood = 50;

//     const totalChairWood = oneChairWood * chairQuantity;
//     const totalTableWood = oneTableWood * tableQuantity;
//     const totalBedWood = oneBedWood * bedQuantity;

//     const totalWood = totalBedWood + totalChairWood + totalTableWood;
//     return totalWood;

// }

// const woodCalculateoutput = woodCalculate(5,5,5);
// console.log(woodCalculateoutput);
