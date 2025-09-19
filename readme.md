# JavaScript Advanced Concepts & Notes

This repository is a collection of notes, explanations, and code examples for advanced JavaScript topics. It's designed to be a learning resource for developers looking to deepen their understanding of the language's core mechanisms and modern features.

-----

## Table of Contents

  - [Closures](https://www.google.com/search?q=%23closures)
  - [Promises](https://www.google.com/search?q=%23promises)
      - [Promise States](https://www.google.com/search?q=%23promise-states)
      - [`.then()` & `.catch()`](https://www.google.com/search?q=%23then--catch)
      - [`Promise.all()`](https://www.google.com/search?q=%23promiseall)
  - [Execution Context](https://www.google.com/search?q=%23execution-context)
      - [`this` Keyword](https://www.google.com/search?q=%23this-keyword)
      - [`call()`, `apply()`, & `bind()`](https://www.google.com/search?q=%23call-apply--bind)
  - [Async JavaScript](https://www.google.com/search?q=%23async-javascript)
      - [The Event Loop & Call Stack](https://www.google.com/search?q=%23the-event-loop--call-stack)
      - [`async`/`await`](https://www.google.com/search?q=%23asyncawait)
  - [Prototypes & Inheritance](https://www.google.com/search?q=%23prototypes--inheritance)
      - [Prototype Chain](https://www.google.com/search?q=%23prototype-chain)
      - [Prototypal Inheritance](https://www.google.com/search?q=%23prototypal-inheritance)
  - [Modules](https://www.google.com/search?q=%23modules)
      - [CommonJS (`require`/`module.exports`)](https://www.google.com/search?q=%23commonjs-requiremoduleexports)
      - [ES6 Modules (`import`/`export`)](https://www.google.com/search?q=%23es6-modules-importexport)

-----

## Closures

A **closure** is a function bundled together with references to its surrounding state (the lexical environment). This means a closure gives you access to an outer function's scope from an inner function, even after the outer function has finished executing. The core idea is that the inner function "remembers" its environment.

## Promises

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation. A promise is in one of three states:

  - **`pending`**: The initial state, neither fulfilled nor rejected.
  - **`fulfilled`**: The operation completed successfully.
  - **`rejected`**: The operation failed.

### `.then()` & `.catch()`

The `.then()` method is used to schedule a callback to be executed when the promise is successfully resolved. The `.catch()` method is used to handle rejections or errors.

```javascript
myPromise
  .then((result) => {
    // handle success
  })
  .catch((error) => {
    // handle error
  });
```

### `Promise.all()`

`Promise.all()` takes an array of promises and returns a single promise. This returned promise resolves when all of the input promises have resolved, or it rejects as soon as one of the input promises is rejected.

## Execution Context

The **execution context** is the environment in which JavaScript code is evaluated and executed. It's a crucial concept for understanding how the `this` keyword works and how variables are accessed.

### `this` Keyword

The value of the `this` keyword is determined by **how a function is called**. It refers to the object that "owns" the code currently being executed. Its value can change depending on the context.

### `call()`, `apply()`, & `bind()`

These are three powerful methods available on all functions that allow you to explicitly set the value of `this` for a function.

  - **`call()`**: Invokes the function immediately, allowing you to pass arguments one by one.
  - **`apply()`**: Invokes the function immediately, but you pass arguments as an array.
  - **`bind()`**: Returns a **new function** with `this` permanently bound to the specified object. It does not invoke the function immediately.

## Async JavaScript

JavaScript is single-threaded, but it uses the **event loop** to handle asynchronous operations.

### The Event Loop & Call Stack

  - **Call Stack**: A LIFO (Last-In, First-Out) data structure that keeps track of the functions currently being executed.
  - **Event Loop**: A mechanism that continuously checks if the Call Stack is empty. If it is, it moves functions from the callback queue to the Call Stack for execution.

### `async`/`await`

Introduced in ES2017, `async`/`await` is a syntactic sugar on top of Promises that makes asynchronous code look and behave more like synchronous code.

  - **`async`**: Used to declare an asynchronous function. An `async` function always returns a Promise.
  - **`await`**: Pauses the execution of the `async` function until a Promise is settled (resolved or rejected) and gets its resolved value.

## Prototypes & Inheritance

Every object in JavaScript has a **prototype**—a hidden internal link to another object. This link forms a chain, which is the foundation of prototypal inheritance.

### Prototype Chain

When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it, it looks on the object's prototype, then the prototype's prototype, and so on, until it reaches the end of the chain (where the prototype is `null`).

### Prototypal Inheritance

This is a method by which objects can inherit properties from other objects. It's a core aspect of JavaScript and is often used as an alternative to traditional class-based inheritance.

## Modules

Modules allow you to split your JavaScript code into separate, reusable files. There are two main module systems in the JavaScript ecosystem.

### CommonJS (`require`/`module.exports`)

This is the standard module system for Node.js.

  - Use `require()` to import modules.
  - Use `module.exports` or `exports` to export values from a module.

### ES6 Modules (`import`/`export`)

This is the official, standardized module system for JavaScript, supported by modern browsers and Node.js.

  - Use `import` to get functionality from another module.
  - Use `export` to expose functionality from a module.