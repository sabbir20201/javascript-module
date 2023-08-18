// const names =['abul','babul','cabul','dabul','ebul','abul','kabul','cabul','abul','babul','gabul'];
// console.log('all names',names)

// function removeDublicate(names){
//     const unique = [];
//     for(let i = 0; i<names.length; i++){
//         const name = names[i];
//           if(unique.includes(name) === false){
//             unique.push(name)
//           }
//     }
//     return unique;
// }
// const unikname = removeDublicate(names);
// console.log(unikname)


// self 
const names =['abul','babul','cabul','dabul','ebul','abul','kabul','kabul','cabul','abul','babul','gabul','gabul'];

function removeDublicate(names){
    const name = names[i];
     for(let i = 0; i < names.length; i++){
        const uniqueName = [];
        if(uniqueName.includes(name) == false){
            uniqueName.push(name)
        }
     }
     return uniqueName;
     
}


const allUniqueNames = removeDublicate(names);
console.log(allUniqueNames);