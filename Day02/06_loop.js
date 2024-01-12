/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/

let value = 5;
let sum=0
let map = new Map();
for (let i = 1; i <= value; i++) {
    sum += i;
    map.set(i,sum); 
}
for (let [key,value] of map) {
    console.log(key , '('+value+')');
}
console.log('The Sum is '+sum);