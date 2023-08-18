const country = 'bangladesh';
const age = 52;
const isIndependent = true;
const student = {
    id: 121,
    class: 11,
    name : 'agun'
}

function add(num1, num2){
    return num1 + num2;
}
const friends =[13, 14, 11, 17, 21, 16, 15, 20];

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);

// ata khub beshu use korbo 
console.log(friends.includes(19))
console.log(friends.includes(21))
// ata khub beshu use korbo 
if(friends.includes(252) !== -1){

}

// concat 
const newFriendArray = [12, 13, 11, 13];
const allFriends = newFriendArray.concat(friends);
console.log(allFriends )