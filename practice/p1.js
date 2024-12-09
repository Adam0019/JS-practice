// array

const M_H = ["ironman","thor","spiderman","captain america"]
const dc_h = ["superman","flash","batman"]

M_H.push("hulk")
console.log(M_H);

M_H.pop()
console.log(M_H);

M_H.unshift("venom")
console.log(M_H);

M_H.shift()
console.log(M_H);

console.log(Array.isArray([M_H]));


console.log(Array.of('ani','ram','krishna',108,true));


const wu = [...M_H, ...dc_h]
console.log(wu);

