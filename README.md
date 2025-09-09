1.What is the difference between var, let, and const?

Ans:Differences between var,let and const are:

1)var is function scoped but let and const are block-scoped.

2)var allows both redeclaration reassignment and
 let allows only reassignment and
 const doesn't allow either.

3)var is hoisted and initialized,using it before declaration gives undefined.On the other hand, let and const are also hoisted, but not initialized, so using it before declaration gives an ReferenceError.

----
2.What is the difference between map(), forEach(), and filter()?

Ans:

*forEach() goes through every item in the array and performs action according to the given function, but it doesn’t give back a new array.

*map() also goes through every item and the given function, but it makes a new array with the changed values.

*filter() goes through every item and picks only those item/items that match a condition, giving back a smaller new array.

Here's a simple example:
```javascript
const numbers = [1, 2, 3, 4];

// forEach
numbers.forEach(n => console.log(n));
// output
//1
//2
//3
//4 

// map 
const squares = numbers.map(n => n * n); // output:[1, 4, 9, 16]

// filter
const evens = numbers.filter(n => n % 2 === 0); // output: [2, 4]
```
---
3.What are arrow functions in ES6?

Ans:Arrow functions are a new  shorter way of writing functions that was introduced in ES6. 

Unlike the traditional function declaration or function expression  that uses the function keyword, arrow functions use the => syntax to define functions more concisely.It's useful for simple and short functions.

Here's some examples of arrow function:
```js
//in terms of single parameter,using ( ) within parameter is optional 
const multi = x => x*x ;

//in terms of multiple parameters,( ) within parameters has to be used 
const add = (a,b) => a + b ;

// in terms of multiple lines, { } and return are used 
const addition =(a,b) =>{
    const result = a + b ;
    return result ;
}
```
---
4.How does destructuring assignment work in ES6?

Ans:Destructuring is a short way to extract values from arrays or objects and assign them to variables in a shorter way.

Object Destructuring:Here { } is used within identifier.
```js
const { price}= { name: 'shirt', price: 500, quantity: 7 }
console.log(price) // output:500
```

Array Destructuring:Here [ ] is used within identifier.
```js
const numbers = [25, 88, 89, 101]
const [first, second] = numbers;
console.log(first,second) // output:25 88
```
---
5.Explain template literals in ES6. How are they different from string concatenation?

Ans:Template literals in ES6 are a new way of writing strings and variables together using backticks (`). They allow dynamic strings where variables or expressions can be written directly using ${}

Template literals are cleaner and easier to read and write.
Difference from string concatenation:

1.Single quote (' ') or double quotes (" ") is used in string concatenation in template literals backticks are used (``)

2.Concatenation uses +  but template literals use ${} inside backticks.
```js
//string concatenation
const name = 'Nazifah'
console.log("hello i am " + name);// hello i am Nazifah

//template literals
console.log(`hello i am ${name}`); //  output:hello i am Nazifah
```
