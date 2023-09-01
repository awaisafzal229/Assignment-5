"use strict";
// - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
const originalArray = [1, 2, 3, 4];
const indexToInsert = 2;
const valueToInsert = 99;
const insertValueAtIndex = (array, index, value) => {
    array.splice(index, 0, value);
    return array;
};
const modifiedArray = insertValueAtIndex(originalArray, indexToInsert, valueToInsert);
console.log(modifiedArray);
// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
const shoppingCart = [];
const addItem = (name, quantity) => {
    const newItem = [name, quantity];
    shoppingCart.push(newItem);
    console.log(`Added ${quantity} ${name}(s) to the cart.`);
    printCart();
};
const removeItem = (index) => {
    const removedItem = shoppingCart.splice(index, 1);
    console.log(`Removed ${removedItem[0][1]} ${removedItem[0][0]}(s) from the cart.`);
    printCart();
};
const updateQuantity = (index, newQuantity) => {
    shoppingCart[index][1] = newQuantity;
    console.log(`Updated quantity of ${shoppingCart[index][0]} to ${newQuantity}.`);
    printCart();
};
const printCart = () => {
    console.log("Cart Contents:");
    shoppingCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item[0]} - Quantity: ${item[1]}`);
    });
    console.log("Total:", calculateTotal());
    console.log("--------------------------------------");
};
const calculateTotal = () => {
    return shoppingCart.reduce((total, item) => total + item[1], 0);
};
addItem("Apple", 3);
addItem("Banana", 2);
updateQuantity(0, 5);
removeItem(1);
// - Write a program that uses a while loop to print the first 25 integers.
let i = 0;
while (i <= 25) {
    console.log(i);
    i++;
}
//- Write a program that uses a while loop to print the first 10 even numbers.
let i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}
// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorialOfNumber(num1) {
    let i = 1;
    let temp = 1;
    if (num1 >= 0) {
        while (i <= num1) {
            temp = temp * i;
            i++;
        }
    }
    console.log(temp);
}
factorialOfNumber(12);
//-Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let arr = [1, 23, 4, 55, 43, -23, 33, 32, -1];
function removeNegativeNumbers(arr) {
    let newArray = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] >= 0) {
            newArray.push(arr[index]);
        }
    }
    return newArray;
}
let resultArray = removeNegativeNumbers(arr);
console.log(resultArray);
//- Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
let arr = [3, 23, 43, 1, 21, 545, 2];
function sum(arr) {
    let i = 0;
    let sum = 0;
    while (i < arr.length) {
        sum = sum + arr[i];
        i++;
    }
    return sum;
}
let result = sum(arr);
console.log("The sum is : " + result);
// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function convertTemperatures(input) {
    const inputTemperatures = input.split(' ');
    const fahrenheitTemperatures = [];
    for (let i = 0; i < inputTemperatures.length; i++) {
        const celsius = parseFloat(inputTemperatures[i]);
        if (!isNaN(celsius)) {
            const fahrenheit = convertCelsiusToFahrenheit(celsius);
            fahrenheitTemperatures.push(fahrenheit);
        }
    }
    return fahrenheitTemperatures;
}
const userInput = "25 30 35"; // Replace with your input
const fahrenheitTemperatures = convertTemperatures(userInput);
console.log('Fahrenheit Temperatures: ', fahrenheitTemperatures);
