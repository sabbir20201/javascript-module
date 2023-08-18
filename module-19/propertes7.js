var shopingCard = {
        book : 3,
        sunglass : 1,
        keybord : 5,
        mouse: 1,    
        pen: 11,    

}
console.log(shopingCard.book)
console.log(shopingCard["book"])
console.log(shopingCard.book)
// when you know the specefic property name, use dot notation to get the property value 
var penCount = shopingCard.pen;
// console.log(penCount)

// 1.alternative system 
// 2.when you know the specefic property name, use dot notation to get the property value 

var penCount1 = shopingCard["pen"];
// console.log(penCount1)
// get object value in a array key ba prperty 
var properties = Object.keys(shopingCard);
// console.log(properties);
// get object value in a array value
var propertiValue = Object.values(shopingCard);
// console.log(propertyValue);

var propertyName = "jog";
var propertyValue = shopingCard[shopingCard];
// console.log(propertyValue)
shopingCard.mouse = 20;
console.log(shopingCard);
shopingCard["mouse"] = 30;
console.log(shopingCard)

shopingCard[propertyName] = 89;

// What will be the output of this program?

function movie(){
 return "Din-The day";
 return "Poran";
 return "Hawa";
}
console.log(movie());