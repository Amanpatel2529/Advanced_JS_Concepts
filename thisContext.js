/*
Bind() -> method creates a new function with a permanently bound this value and optionally, pre-set arguments. The new function can then be invoked later.

Call() -> method immediately invokes a function with a specified this value and arguments provided individually.

Apply() -> method immediately invokes a function with a specified this value and arguments provided as an array.

*/

const person = {
  name: "Aman",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet(); //context -> Hi, I am Aman

const greetFunction = person.greet;
greetFunction(); //context lost  -> Hi, I am undefined

const boundGreet = person.greet.bind({ name: "John" });
boundGreet(); //context bind -> Hi, I am John

// Using call() method
person.greet.call({ name: "Alice" }); //context call -> Hi, I am Alice

// Using apply() method
person.greet.apply({ name: "Bob" }); //context apply -> Hi, I am Bob

/*When to use which method:
bind(): 
- When you want to create a new function with a fixed this value
- When you need to preserve context in callbacks or event handlers
- When you want to create a reusable function with preset context

call():
- When you want to invoke a function immediately with a specific this value
- When you have a list of arguments to pass individually- When you want to borrow methods from other objects

apply():- When you want to invoke a function immediately with a specific this value
- When you have arguments stored in an array
- When you want to pass array-like objects as arguments
*/




t


