"use strict";
/*
*function writes things and stuff
*
*/
let printB = ()=>
{
  console.log("B");
}
console.log("Hello Marcelka!");

console.log("A");
console.log("B");
console.log("C");

console.log("A");
let interval_id = setInterval(printB, 10); /* every 10 miliseconds
tries to execute printb */
console.log("C");

for (let i = 0; i < 100000; i++)
{
      console.log(i);
}

//clearInterval(interval_id);
