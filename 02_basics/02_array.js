const M_H = ["ironman","thor","spiderman","captain america"]
const dc_h = ["superman","flash","batman"]
/*
M_H.push(dc_h)
console.log(M_H);
console.log(M_H[4][2]);*/

/*const heros = M_H.concat(dc_h)
console.log(heros);*/


const allheros = [...M_H, ...dc_h]
console.log(allheros);

const another_Array =[1,2,3,[4,5,6],7,[8,9,[0,1]]]

const real_array = another_Array.flat(Infinity)
/*console.log(real_array);




console.log(Array.isArray("Aniruddha"));
console.log(Array.from("Aniruddha"));
console.log(Array.from({name: "aniruddha"}));//this will give empty array

console.log(Array.from("Aniruddha"));

*/

