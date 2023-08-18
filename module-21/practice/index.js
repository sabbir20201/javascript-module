// toLowerCase, toLowerCase abot 
// const userName = "blackPink";
// const userInput  = "blackPinK"

// console.log(userName.toLowerCase,userInput.toLowerCase);

// if(userName.toLowerCase === userInput.toLowerCase){
//     console.log('valid user')
// }else{
//     console.log('invalid user')
// }

// module 2 
//  const lyrics = 'tmi sada bondhu kala pakhi ami jeno ki';

// const doseExist =  lyrics.includes('pakhi')
// const doseExist1 =  lyrics.includes('Pokhi')
// const doseExist2 =  lyrics.includes('pokhi')
// const lyricsLowercse = lyrics.toUpperCase(lyrics)
// const searchStringLower = searchString.toLowerCase();
// const doseExist = lyricsLowercse.includes(searchStringLower);
// buji nai 
// console.log(lyricsLowercse)
// console.log(doseExist, doseExist1,doseExist2)

// const doseExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase())

// indexof 
// console.log(lyrics.indexOf('kala'))
// console.log(lyrics.indexOf('kailla'))

// console.log(lyrics.indexOf('tmi'))
// if(lyrics.indexOf('sada') !== -1){
//     // - 1na how man ase 
//      console.log('exsits inside the string')
// }else{
//     console.log('cant not find')
// }

// // console.log(lyrics.startsWith('tmi'))
// // console.log(lyrics.startsWith('2mi'))

// const fileName = 'mybiodata';
// const otherFile = '=mypic.png';

// const end = fileName.endsWith('.pdf')
// const endpng = fileName.endsWith('.png')
// console.log(endpng)

// module 3 
// const lyrics = 'tmi sada bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte pari ni';
// const parts = lyrics.split(' ')
// const sentences = lyrics.split('.')
// const chars = lyrics.split('')
// console.log(chars)
// // console.log(parts)
// // console.log(sentences)

// const partial = lyrics.slice(5, 8)
// const partial2 = lyrics.substring(5, 8)
// console.log(partial2);

// // lyrics.trim();

// const lines = [
//    'tmi sada bondhu kala pakhi ami jeno ki',
//     ' bosonto kale tomay bolte pari ni'
// ];
// const newSong = lines.join(':')
// const newSong1 = lines.join('. ')
// console.log(newSong1)

// // module 4
// const result = Math.pow(3, 8)
// // console.log(result)

// const num1 = 25;
// const num2 = 45;

// const gap =  Math.abs(num1 - num2);
// // console.log(gap)
// if(gap < 5){
//     console.log('you gyes can be friends')

// }else{
//     // console.log('you gyes stay apart')
// }

// // const number4 = 2.4598;
// // const number5 = 2.5598;
// // const fullNumber = Math.round(number4);
// // console.log(fullNumber);

// // const result2 = Math.ceil(2.00001)
// // const result3 = Math.floor(456.259)
// // console.log(result2)
// // console.log(result3)

// // const random = Math.random();
// // const random1 = Math.random()*100;
// const random2 = Math.round(Math.random()*100);
// // console.log(random2)

// for(let i =0; i < 20; i++){
//    const random = Math.round(Math.random()*6)
//    console.log(random)
// }

// // module 5 
// let first = 5;
// let second = 7;
// // console.log(first, second)
// // first = second;
// // second = first;
// // console.log(first, second);
// // const temp = first;
// // first = second;                                                                                        
// // second = temp;
// // console.log(first, second)

// [ first , second ] = [ second , first ]
// console.log(first, second)

// module 6 

// function sumOfNumber(jimNumber, delaNumber){
//      const topperNumber  = jimNumber - delaNumber;
//      if(jimNumber < delaNumber ){
//         console.log("dela is win and dela got " , delaNumber)
//      }else{
//         console.log("jim is win and jim got ", jimNumber)
//      }
//      return topperNumber;
// }

// const jimGet = 84 + 75;
// const delaGet = 69 + 97;
// // console.log("jim get",jimGet)
// const output = sumOfNumber(jimGet, delaGet);
// console.log(output)

// const jim = 84;
// const dela = 75;
// if( jim > dela){
//     console.log("jim is win")
// }else{
//     console.log("dela is win")
// }

// const jim1 = 69;
// const dela1 = 75;
// if( jim1 > dela1){
//     console.log("jim is win")
// }else{
//     console.log("dela is win")
// }


// const jim = 84;
// const dela = 97;
// const chinku = 99;
// if(jim > dela && jim > chinku){
//     console.log("jim will get thecake")
// }else if(dela > jim && dela > chinku){
// console.log("dela will get thecake")
// }else{
//     console.log("chinku will get the cake")
// }


// const mathe = Math.max(45,67,89,23,45,666,7878)
// console.log(mathe)

// // home work 
// // write a function that will take 3 numbers will return the max number 
// // write a function thet will take 3 parameters and will return the main number 

// // first time do it using if else 
// //  second time do it using math.min or max

// module 7 

// function maxInArray(numbers){
//     let largest = numbers[0];
//       for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//        if(element > largest){
//            largest = element;
//        }
//       }
//       return largest
// }

// const heights = [167, 190, 120, 165, 137,265]
// const tallest = maxInArray(heights)
// console.log("tallest person is", tallest);

// function reverseString(text){
//     let reversed = '';
//    for(let i = text.length-1; i >= 0; i--){
//     const element = text[i];
//     reversed = reversed + element;
//     console.log(element, reversed)
//    }
//    return reversed;
// }
// const myString = 'i am a good boy '
// const reversed = reverseString(myString);
// console.log("reverse out put", reversed)

// // module 8 

// function reverseWord(str){
//      const words = str.split(' ');
//      const result = []
//      for(let i = words.length - 1; i >=0; i--){
//         const element = words[i]
//         result.push(element);
//      }
//      const reversed = result.join(' ');
//      return reversed
// }
// const myString = 'i am a good boy '
// reverseWord(myString)

// module 9 
// const fibo = [0 , 1];
// for(let i = 2 ; i <= 15; i++){
//        fibo[i] = fibo[i-1] + fibo[i-2];

// }
// console.log(fibo)
