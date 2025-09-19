/*
  Closures: special type of functions in which if any function is created 
  it actually retains memory of that function
*/

function outer(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

let increment = outer(); //increment hold outer function which is returing a function itself
console.log(increment()); //1
console.log(increment()); //2
console.log(increment()); //3
console.log(increment()); //4

//closures retains memory as above on every call



