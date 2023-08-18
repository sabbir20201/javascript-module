// toLowerCase, toLowerCase abot 
const userName = "blackPink";
const userInput  = "blackPinK"

console.log(userName.toLowerCase,userInput.toLowerCase);


if(userName.toLowerCase === userInput.toLowerCase){
    console.log('valid user')
}else{
    console.log('invalid user')
}

// module 2 

const lyrics = 'tmi sada bondhu kala pakhi ami jeno ki';
const doseExist11 =  lyrics.includes('pakhi')
const doseExist1 =  lyrics.includes('Pokhi')
const doseExist2 =  lyrics.includes('pokhi')
const lyricsLowercse = lyrics.toUpperCase(lyrics)
const searchStringLower = searchString.toLowerCase();
const doseExist = lyricsLowercse.includes(searchStringLower);

// buji nai 

console.log(lyricsLowercse)
console.log(doseExist, doseExist1,doseExist2)

const doseExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase())

// indexof 

console.log(lyrics.indexOf('kala'))
console.log(lyrics.indexOf('kailla'))

console.log(lyrics.indexOf('tmi'))
if(lyrics.indexOf('sada') !== -1){
     console.log('exsits inside the string')
}else{
    console.log('cant not find')
}

// console.log(lyrics.startsWith('tmi'))
// console.log(lyrics.startsWith('2mi'))

const fileName = 'mybiodata';
const otherFile = '=mypic.png';

const end = fileName.endsWith('.pdf')
const endpng = fileName.endsWith('.png')
console.log(endpng)