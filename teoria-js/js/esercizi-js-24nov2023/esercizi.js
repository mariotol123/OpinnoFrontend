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


// ## 6. Filter Even Numbers

// - Create an array of numbers.
// - Write a function called `filterEvenNumbers` that returns a new array containing only the even numbers from the original array.
// - Log the filtered array using the function.

// // Create an array of numbers
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Write a function to filter even numbers
// function filterEvenNumbers(arr) {
//   return arr.filter(number => number % 2 === 0);
// }

// // Log the filtered array
// console.log(filterEvenNumbers(numbers));

// ## 7. Check for Anagrams

// - Write a function called `areAnagrams` that takes two strings and returns true if they are anagrams, otherwise false.
// - Call the function to check if some pairs of words are anagrams.

// // Function to check if two strings are anagrams
// function areAnagrams(str1, str2) {
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
//     return sortedStr1 === sortedStr2;
//   }
  
//   // Call the function with pairs of words
//   console.log(areAnagrams("listen", "silent")); // true
//   console.log(areAnagrams("hello", "world"));   // false

// ## 8. Currency Converter

// - Write a function called `convertCurrency` that takes an amount in dollars and an exchange rate, and returns the converted amount in another currency.
// - Call the function with an amount and exchange rate of your choice.
// - Tip: To round the value to just two decimal places you can use the numbers `toFixed(2)` method

// // Function to convert currency
// function convertCurrency(amount, exchangeRate) {
//     return (amount * exchangeRate).toFixed(2);
//   }
  
//   // Call the function with an amount and exchange rate
//   console.log(convertCurrency(50, 1.2)); // Example values

// ## 9. Age Calculator

// - Write a function called `calculateAge` that takes a birth year and returns the current age.
// - Call the function with your birth year.

// // Function to calculate age
// // Function to calculate age
// function calculateAge(birthYear) {
//     const currentYear = new Date().getFullYear();
//     return currentYear - birthYear;
//   }
  
//   // Call the function with your birth year
//   console.log(calculateAge(1990)); // Example birth year

// ## 10. Dice Game

// - Write a function called `rollDice` that simulates rolling a six-sided die and returns the result (a number from 1 to 6).
// - Roll the die multiple times and log the results.

// Function to simulate rolling a six-sided die
// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
//   }
  
//   // Roll the die multiple times and log the results
//   for (let i = 0; i < 5; i++) {
//     console.log(rollDice());
//   }

// ## 11. Temperature Converter

// - Write a function called `convertCelsiusToFahrenheit` that takes a temperature in degrees Celsius and returns the equivalent temperature in degrees Fahrenheit.
// - Call the function with a temperature in Celsius.
// - Tip: To convert a temperature from Celsius to Fahrenheit, multiply the Celsius value by 9/5 and add 32.

// // Function to convert Celsius to Fahrenheit
// function convertCelsiusToFahrenheit(celsius) {
//     return (celsius * 9 / 5 + 32).toFixed(2);
//   }
  
//   // Call the function with a temperature in Celsius
//   console.log(convertCelsiusToFahrenheit(25)); // Example Celsius temperature

// ## 12. Book Registry

// - Create an object named `book` representing a book. The book should have properties like `title`, `author`, `year`, and `genre`.
// - Write a method `getInfo` that returns the book information in a formatted string.
// - Log the result of `getInfo` method

// // Create a book object
// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925,
//     genre: "Fiction",
//     getInfo: function() {
//       return `${this.title} by ${this.author} (${this.year}) - Genre: ${this.genre}`;
//     }
//   };
  
//   // Log the result of getInfo method
//   console.log(book.getInfo());

// ## 13. Shopping List

// - Create an object named `shoppingList` representing a shopping list. The list should have an array of items and methods like `addItem` to add an item and `removeItem` to remove an item.
// - Add and remove some items using object's methods
// - Log the number of items and the content of the shopping list

// // Create a shopping list object
// const shoppingList = {
//     items: [],
//     addItem: function(item) {
//       this.items.push(item);
//     },
//     removeItem: function(item) {
//       const index = this.items.indexOf(item);
//       if (index !== -1) {
//         this.items.splice(index, 1);
//       }
//     },
//     displayList: function() {
//       console.log(`Number of items: ${this.items.length}`);
//       console.log("Shopping List:");
//       this.items.forEach(item => console.log(`- ${item}`));
//     }
//   };
  
//   // Add and remove some items
//   shoppingList.addItem("Milk");
//   shoppingList.addItem("Bread");
//   shoppingList.addItem("Eggs");
//   shoppingList.removeItem("Bread");
  
//   // Log the number of items and the content of the shopping list
//   shoppingList.displayList();

// ## 14. Budget Calculator

// - Create an object named `budgetCalculator` representing a budget calculator. The calculator should have properties like `income` and `expenses`, and methods like `addIncome` to add income and `addExpense` to add an expense.
// - Add a `displayResume` method that logs income and expenses property values.

// // Create a budget calculator object
// const budgetCalculator = {
//     income: 1000,
//     expenses: 500,
//     addIncome: function(amount) {
//       this.income += amount;
//     },
//     addExpense: function(amount) {
//       this.expenses += amount;
//     },
//     displayResume: function() {
//       console.log(`Income: $${this.income.toFixed(2)}`);
//       console.log(`Expenses: $${this.expenses.toFixed(2)}`);
//     }
//   };
  
//   // Add income and expenses
//   budgetCalculator.addIncome(200);
//   budgetCalculator.addExpense(50);
  
//   // Log income and expenses
//   budgetCalculator.displayResume();

// ## 15. Music Playlist

// - Create a function `createSong` that takes parameters for the title, artist, and duration of a song and returns a song object with a `displayInfo` method to log information about the song.
// - Create a function `createPlaylist` that takes a name and returns a playlist object with the following methods:
//    - `addSong`: Takes a song object and adds it to the playlist.
//    - `removeSong`: Takes a song object and removes it from the playlist.
//    - `displayPlaylist`: Logs the name of the playlist and the information of all the songs in the playlist. If the playlist is empty log a message in the console

// - Use the function previously defined to create songs
// - Create the playlist `myPlaylist`
// - Add songs to playlist
// - Display the playlist content with `displayPlaylist` method

// // Ensure the `createSong` function returns an object with a `displayInfo` method, and the `createPlaylist` function returns an object with the specified methods.
//     // Function to create a song
// function createSong(title, artist, duration) {
//     return {
//       title,
//       artist,
//       duration,
//       displayInfo: function() {
//         console.log(`${this.title} by ${this.artist} (${this.duration} seconds)`);
//       }
//     };
//   }
  
//   // Function to create a playlist
//   function createPlaylist(name) {
//     return {
//       name,
//       songs: [],
//       addSong: function(song) {
//         this.songs.push(song);
//       },
//       removeSong: function(song) {
//         const index = this.songs.indexOf(song);
//         if (index !== -1) {
//           this.songs.splice(index, 1);
//         }
//       },
//       displayPlaylist: function() {
//         console.log(`Playlist: ${this.name}`);
//         if (this.songs.length === 0) {
//           console.log("The playlist is empty.");
//         } else {
//           this.songs.forEach(song => song.displayInfo());
//         }
//       }
//     };
//   }
  
//   // Create songs
//   const song1 = createSong("Song 1", "Artist 1", 180);
//   const song2 = createSong("Song 2", "Artist 2", 240);
  
//   // Create playlist
//   const myPlaylist = createPlaylist("My Playlist");
  
//   // Add songs to playlist
//   myPlaylist.addSong(song1);
//   myPlaylist.addSong(song2);
  
//   // Display the playlist content
//   myPlaylist.displayPlaylist();
// ## 16. Calories Calculator

// - Create an object named `caloriesCalculator` representing a calories calculator. The calculator should have properties like `lunch` and `dinner` (arrays) representing the meals of the day and methods like `addFood` to add food consumption in each meal and `calculateDailyCalories` to calculate total daily calories.
// - The `addFood` method takes two properties: `food` and `meal`.
// - Each food added to the meals in the object should be an object containing two properties: `name` and `calories`.
// - Use the method `addFood` at least twice (each meal) to add some food into the arrays.
// - Log the result of `calculateDailyCalories` in the console.
// Create a calories calculator object
// const caloriesCalculator = {
//     lunch: [],
//     dinner: [],
//     addFood: function(food, meal) {
//       this[meal].push(food);
//     },
//     calculateDailyCalories: function() {
//       let totalCalories = 0;
//       for (const meal in this) {
//         if (Array.isArray(this[meal])) {
//           this[meal].forEach(food => {
//             totalCalories += food.calories || 0;
//           });
//         }
//       }
//       return totalCalories;
//     }
//   };
  
//   // Add food to the meals
//   caloriesCalculator.addFood({ name: "Chicken Salad", calories: 300 }, "lunch");
//   caloriesCalculator.addFood({ name: "Spaghetti", calories: 500 }, "dinner");
  
//   // Log the result of calculateDailyCalories
//   console.log("Total Daily Calories: ", caloriesCalculator.calculateDailyCalories());