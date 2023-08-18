var shoppingCard = {
    book : 3,
    sunglass : 1,
    keyboard : 5,
    mouse: 1,    
    pen: 25,    
    shoes:2
}
// array vs objects

var shoppingItem = ['book', 'pen', 'shoe','sunglass'];
var friendsAge = [12,3,4,56,67,78];

var friendsAge = {
    farim : 12,
    karim : 12,
    shofic : 12,
    farim : 12,
    robi : 12,
    kaji : 12,
}

var keys = Object.keys(shoppingCard);
console.log(keys);

const values = Object.values(shoppingCard);
console.log(values);

for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCard[propertyName];
    console.log(propertyName, propertyValue)
}
for(var propertyName in shoppingCard){
    const value = shoppingCard[propertyName];
    console.log(propertyName, value);
}