/*
 Call Stack: every function call goes into call stack, 
 
 Event Loop: is a loop that keeps on checking call stack and execute that calls, 
  and keep call stack empty, also if there are timer functions(setInterval, setTimeOut) 
  then it passes it to browser(environment(node, browser, bun, deno)) to execute it.
*/

//this executes first
console.log("chaicode");


//this takes 4sec as we call this function in settimeout
function sayHello() {
  console.log("I would like to say hello");
}

//check how event loop executes functions and methods from call stack
//this settimout takes 4 sec to execute
setTimeout(() => {
  sayHello();
}, 4000);

//this execute before settimeout
for (let index = 0; index < 10; index++) {
  console.log(index);
}
