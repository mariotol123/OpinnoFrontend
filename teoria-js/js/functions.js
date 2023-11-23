// Definire una funzione
/* function nomeFunzione() {
    // istruzioni
} */

// Hello world!
/* function printHelloWorld() {
    console.log('Hello world!');
} */

// Invocare / Chiamare una funzione
////nomeFunzione();

//printHelloWorld();

// Passare dei parametri ad una funzione
/* function printToConsole(a) {
    console.log(a);
}
printToConsole('ciao'); */

// Ritornare un valore dopo l'esecuzione di una funzione (kw 'return')
/* function somma(a, b) {
    let pippo = a + b;
    return pippo;
} */

// Assegnare il valore di ritorno di una funzione ad una variabile
/* let result = somma(4, 8);
console.log(result); // 12 */

// Possiamo utilizzare il valore di ritorno di una funzione in un espressione
/* let result = somma(4, 8) + 5;
console.log(result); // 17 */

// I parametri di una funzione sono opzionali
/* function printParameters(a, b, c) {
    console.log(a, b, c);
}
printParameters('Mario');
printParameters(); */

// passare solo parametri successivi al primo
/* printParameters(undefined, 'Mario'); */

// Parametri con valore di default
/* function withParameters(a = 'Rossi', b) {
    console.log(a, b);
}
withParameters(undefined, 'Mario'); */

// Inner functions e Outer functions
/* function outerFunction() {
    console.log('Questa è l\'outer function');
    function innerFunction() {
        console.log('Questa è l\'inner function');
    }

    innerFunction();
} */
//innerFunction(); // innerFunction is not defined
//outerFunction();


// Scope (ambito di visibilità)
/* let x = 0; // scope globale
console.log('prima della definizione:', x);
function somma(a, b) {
    x = 5;
    console.log('all\'interno della function dopo aver assegnato un nuovo valore a x:', x);
    return x + a + b;
}
console.log('dopo la definizione:', x);
console.log('risultato della function somma:', somma(4, 8));
console.log('dopo aver chiamato somma():', x); */


// let e var
/* function printNumbers() {
    if (true) {
        let x = 10;
        // let x = 20; // let non può essere ridichiarata
        var y = 20;
        // var y = 50; // var può essere ridichiarata
    }
    console.log(x); // x is not defined -> visibile solo nel blocco di codice if
    console.log(y); // 20 -> visibile anche all'esterno
} */

// Destructuring
/* const mario = { firstName: 'Mario', lastName: 'Rossi', id: 10 };
const giovanni = { firstName: 'Giovanni', lastName: 'Bianchi', id: 11 };

function sayHelloToUser(user1, user2) {
    // vado a estrarre le props dall'oggetto in questione come 'const {prop1, prop2} = oggetto'
    const { firstName: marioFirstName, lastName: marioLastName } = user1; // per rinominare utilizziamo la sintassi "nomeProp: nuovoNome"
    const { firstName: giovanniFirstName, lastName: giovanniLastName } = user2;
    //const firstName = user.firstName;
    //const lastName = user.lastName;
    //const id = user.id;
    console.log(`Ciao ${marioFirstName} e ${giovanniFirstName}!`);
}

sayHelloToUser(mario, giovanni); */


// Rest operator
/* function sumNumbers(...numbers) { // non conosciamo il numero di argomenti passati
    console.log(typeof numbers);
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sumNumbers(1, 2, 3, 4, 5));
console.log(sumNumbers(3, 9, 6)); */

// IIFE - Immediately Invoked Function Expression

/* (function () { // function anonima
    console.log('Questa è una IIFE');
})(); */

// Callback function
/* function helloAndGoodbye(name, callbackFn) { // questa funzione accetta come parametro un'altra funzione (callback)
    console.log(`Hello, ${name}!`);
    callbackFn();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

function sayWelcome() {
    console.log('Welcome!');
}

helloAndGoodbye('Mario', sayGoodbye);
helloAndGoodbye('Mario', sayWelcome); */





// classic function
/* function sayHello() {
    console.log('ciao');
} */

// arrow function
/* const sayHello = () => { // con freccia
    console.log('ciao');
}
sayHello(); */

// Passare un solo parametro ad una arrow function
/* const sayHello = name => {
    console.log(name);
} */

// Passando un solo parametro e avendo necessità di esegire una singola istruzione
// una sola riga!
/* const sayHello = name => console.log(name);
sayHello('Name'); */

// Passando più di un argomento le parentesi sono necessarie
/* const sayHelloTo = (name1, name2) => {
    console.log(name1);
    console.log(name2);
}
sayHelloTo('Mario', 'Giovanni'); */


// con corpo ridotto (senza l'utilizzo delle graffe e inline) questa arrow function effettua il return dell'istruzione
/* const sumResult = (a, b, c) => a + b + c;
console.log(sumResult(3, 4, 5)); // 12 */

// scrittura classica
// function sumResult(a, b, c) { return a + b + c; }

/* 
# Chapter 04 - Functions____________________________________

## Exercise 40_01_01.00

We want to write a function that adds two numbers.
1. Create a function that takes two parameters, adds the parameters together, and returns the result.
2. Set up two different variables with two different values.
3. Use your function on the two variables, and output the result using
console.log.
4. Create a second call to the function using two more numbers as arguments
sent to the function. */
/* 
let numero1 = 3;
let numero2 = 7;
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(numero1, numero2));
console.log(sum(4, 16));
 */
/* 


## Exercise 40_01_01.10_______________________________

We are going to create a program that will randomly describe an inputted name.
1. Create an array of descriptive words.
2. Create a function that contains a prompt asking the user for a name.
3. Select a random value from the array using Math.random.
4. Output into the console the prompt value and the randomly selected array value.
5. Invoke the function.
 */

/* let descrizione = ["simpatico", "terribile", "puzzone", "sciatto", "superbo"];

function askName(parametro1) {
  let askPrompt = prompt("Qual è il tuo nome?");
  let randomValue = parametro1[Math.floor(Math.random() * parametro1.length)];
  console.log(askPrompt + " sei " + randomValue);
}

askName(descrizione);



 */

/* 



## Exercise 40_01_01.20_________________________________________________________

Create a basic calculator that takes two numbers and one string value indicating an operation. If the operation equals add, the two numbers should be added. If the operation equals subtract, the two numbers should be subtracted from one another. If there is no option specified, the value of the option should be add. The result of this function needs to be logged. Test your function by invoking it with different operators and no operator specified.

1. Set up two variables containing number values.
2. Set up a variable to hold an operator, either + or -.
3. Create a function that retrieves the two values and the operator string value within its parameters. Use those values with a condition to check if the operator is + or -, and add or subtract the values accordingly (remember if not presented with a valid operator, the function should default to addition).
4. Within console.log(), call the function using your variables and output the response to the console.
5. Update the operator value to be the other operator type—either plus or minus—and call to the function again with the new updated arguments.
 */

/* let numero1 = 4;
let numero2 = 2; */
/* let symobl = "+";

let userImput = prompt("inserisci + se vuoi sommare o - se vuoi sottrarre:");
let numero1 = parseInt(prompt("Qual è il primo numero?"));
let numero2 = parseInt(prompt("Qual è il secondo numero?"));

function operation(num1, num2, userSym) {
  if (userSym == "-") {
    let sott = num1 - num2;
    console.log(sott);
  } else {
    let somma = num1 + num2;
    console.log(somma);
  }
}

operation(numero1, numero2, userImput); */

/* GG A TT */

/* 




## Exercise 40_01_01.30____________________________________________________________

Modify the calculator that you made in practice exercise 40_01_01.20 to return added values instead of printing them. Then, call the function 10 or more times in a loop, and store the results in an array. Once the loop finishes, output the final array into the console.
1. Set up an empty array to store the values that will be calculated within the loop.
2. Create a loop that runs 10 times, incrementing by 1 each time, creating two values each iteration. For the first value, multiply the value of the loop count by 5. For the second value, multiply the value of the loop counter by itself.
3. Create a function that returns the value of the two parameters passed into the function when it is called. Add the values together, returning the result.
4. Within the loop, call the calculation function, passing in the two values as arguments into the function and storing the returned result in a response variable.
5. Still within the loop, push the result values into the array as it iterates through the loop.
6. After the loop is complete, output the value of the array into the console.
7. You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for the array in the console.
*/

/* let userImput = prompt("inserisci + se vuoi sommare o - se vuoi sottrarre:");
let numero1 = parseInt(prompt("Qual è il primo numero?"));
let numero2 = parseInt(prompt("Qual è il secondo numero?")); */

/* function operation(num1, num2, userSym) {
  if (userSym == "-") {
    let sott = num1 - num2;
    return sott;
  } else {
    let somma = num1 + num2;
    return somma;
  }
}

let arrayMaledetta = [];

for (let i = 0; i < 10; i++) {
  let perCinque = i * 5;
  let quadrato = i * i;
  console.log(perCinque, quadrato);
  arrayMaledetta.push(operation(perCinque, quadrato));
}

console.log(arrayMaledetta);





 */

/* 




## Exercise 40_01_01.50___________________________________________________________

1. Set a variable name and assign a function to it. Create a function expression with one parameter that outputs a provided argument to the console.
2. Pass an argument into the function.
3. Create the same function as a normal function declaration.

*/
/* 
let var1 = function fun1(arg1) {
  console.log(arg1);
};

let variabileArgomento = "culo bello";
fun1(variabileArgomento);

//

function fun1(arg1) {
  console.log(arg1);
}

fun1("culo brutto");




 */

/* 




## Exercise 40_01_01.60

Use the arrow format to create functions that output the values one and two to the console. Create a third function that outputs the value three to the console, and then invokes the first two functions. Create a fourth function that outputs the word four to the console and also use setTimeout() to invoke the first function immediately and then the third function.

What does your output look like in the console? Try to get the console to output:

```
Four
Three
One
Two
One
```


*/