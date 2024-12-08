const arr1=[1,2,3,4]
const arr2=["ani","book","car"]

const arr3 = new Array(1,2,3,4);
console.log(arr1[2]);

// methods of arrays//

arr1.push(6)
//console.log(arr1);

arr1.pop()
//console.log(arr1);

arr1.unshift(8)
//console.log(arr1);

arr1.shift()
//console.log(arr1);


//arr1.shift()
//console.log(arr1.includes(5));

//console.log(arr1.indexOf(2));

/*const arr4 = arr1.join()
console.log(arr4);
console.log(typeof arr4);



arr1.shift()
console.log(arr1);*/

//slice and splice


console.log("A", arr1);

const myn1 = arr1.slice(1,3)
console.log(myn1);
console.log("B",arr1);


const myn2 = arr1.splice(1,3)
console.log(myn2);
console.log("C",arr1);