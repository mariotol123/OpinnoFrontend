// ## 1. Area and Perimeter Calculator

// - Create a function `calculateArea` that calculates and returns the area of a rectangle. The function takes two parameters: base and height.
// - Create a function `calculatePerimeter` that calculates and returns the perimeter of a rectangle. The function takes two parameters: base and height.
// - Use both functions to calculate and log the area and perimeter of a rectangle with a base of 5 and height of 8.

// function calculateArea (base, height){
//     let result = base * height;
//     return result;
// }

// function calculatePerimeter(base,height){
//     let result = base * height;
//     return result;
// }

// console.log(calculatePerimeter(5,8), calculateArea(5,8));


// ## 2. Manipulating Arrays of Strings

// - Create an array of strings called `names`.
// - Write a function called `nameLengths` that takes an array of strings and returns a new array containing the length of each name.
// - Log the array of name lengths using the function.


// let names = ["Mario", "Leone", "Paolo", "Mattia"];

// function namesLenghts(namesArray){

//     let lenghtsArray = [];


// for(let i = 0; i < namesArray.length; i++){
//     lenghtsArray.push[namesArray[i].length];
    
//     return lenghtsArray;
// }
// }

// console.log(namesLenghts(names));

// ## 3. Shopping Cart Management

// - Create an object `cart` representing a shopping cart. The object should have a prop to hold the array of items and a method `addProduct` that accepts a product name and adds it to the array.
// - Add to the object a method `calculateTotal` that calculates and returns the total number of items in the cart.
// - Add some products to the cart and log the total.

// let cart = {
//     items: [],


//     addProduct: function(productName){
//         this.items.push(productName);
//         console.log(productName, "E' stato inserito");
//     },

//     calculateTotal: function(){
//         return this.items.length;
//     }
// };

// cart.addProduct("Product 1");
// cart.addProduct("Product 2");
// cart.addProduct("Product 3");

// console.log(cart.calculateTotal());


// ## 4. Word Count in a Sentence

// - Write a function called `countWords` that takes a sentence and returns the number of words in the sentence.
// - Call the function to count the words in an example sentence.


//  function countWords(string){

//      let splits = string.split(" ");

//      return splits.length;

//  }

// console.log(countWords("Ciao sono mario"));


// ## 5. String Reversal

// - Write a function called `reverseString` that takes a string and returns the reversed string.
// - Call the function to reverse an example string.

// function stringReverse (stringa){
//    return stringa.split("").reverse().join("");
// }

// console.log(stringReverse("Ciao sono mario"));


