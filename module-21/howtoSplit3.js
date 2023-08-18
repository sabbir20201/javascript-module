const lyrics = 'tmi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte pari ni. kala kala sada sada';
// const parts = lyrics.split(' ')
// console.log(parts);
// //note: return every words as a array like 


// const sentences = lyrics.split('.')
// console.log(sentences)
// //note: return every sentence as a array 

// const chars = lyrics.split('')
// console.log(chars)
////note:  return every alphabet as a array 

const partial = lyrics.slice(5, 8)
console.log(partial);
//note: 5 - 8 means 5-7 

const partial2 = lyrics.substring(5, 8)
console.log(partial2);
//note: 5 - 8 means 5-7 

const at = lyrics.at(1);
console.log(at);                                        
// 1 number index e j value ta ase seta dekhabe

// const str1 = 'hello';
// const str2 = ' world';
// const concat = str1.concat(str2);
// console.log(concat);
// // lyrics.trim();

// const lines = [
//    'tmi sada bondhu kala pakhi ami jeno ki',
//     'bosonto kale tomay bolte pari ni'
// ];
// console.log(lines);

// const newSong = lines.join(':')
// console.log(newSong);
// //note: 2 ta array ar maje : clone diye join korbe



// const newSong1 = lines.join('. ')
// console.log(newSong1)
// //return a comma  every 2 sentence
// // note: jokhon kono array ar maje join method use kora hoy 
// // tokhon seta string hoye jay seta r array thake na 




// const array = [1,2,3,4,5,6]
// const join = array.join();
// console.log(typeof join) return string