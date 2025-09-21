/*
  Prototypal Inheritance -> is just a inheritance being done in the prototypes
*/

function Person(name){
    this.name= name;
}

Person.prototype.greet = function(){
    console.log(`Hello my name is ${this.name}`);
};

let aman = new Person("Aman");
aman.greet();