var option;
var num1;
var num2;
var squares;
var div;
var firstNum;
var secondNum;
var totalValue = 0;
var input;
var i;
var num;
var sum;
var numStore;

function halfNumber(number) {
    "use strict";
    return number / 2;
}

function squareNumber(number) {
    "use strict";
    return number * number;
}

var percentof = function (x, y) {
    "use strict";
    return (x / y) * 100;
};

var findModulus = function (x, y) {
    "use strict";
    return y % x;
};

function findSum(numStore) {
    "use strict";
    for (i = 0; i < numStore.length; i += 1) {
        num = Number(numStore[i]);
        window.console.log(num);
        totalValue += num;
    }
    return totalValue;
}

option = window.prompt("Select the number of operation you want to perform\n1. Half of a number\n2. Sqaure of a number\n3. x percent of y\n4. x modulus of y\n5. sum of many numbers");
window.console.log(option);



switch(option){

//STEP 1
case "1":
    num1 = window.prompt("Enter a number to divide it");
    div = halfNumber(num1);
    window.document.write("Half of " + num1 + " is " + div + "<br>");
    break;

//STEP 2
case "2":
    num2 = window.prompt("Enter a number to find its square");
    squares = squareNumber(num2);
    window.document.write("The result of squaring the number " + num2 + " is " + squares + "<br>");
    break;

//STEP 3

case "3":
    firstNum = window.prompt("Enter first number");
    secondNum = window.prompt("Enter second number");
    window.document.write(firstNum + " is " + percentof(firstNum, secondNum) + "% of " + secondNum + "<br>");
    break;

//STEP 4

case "4":
    firstNum = window.prompt("Enter first number");
    secondNum = window.prompt("Enter second number");
    window.document.write(findModulus(firstNum, secondNum) + " is the modulus of " + firstNum + " and " + secondNum + "<br>");
    break;

//STEP 5

case "5":
    input = window.prompt("Enter a set of numbers separated by ,");
    numStore = input.split(",");
    window.console.log(numStore);
    sum = findSum(numStore);
    window.document.write("The sum of all numbers is: " + sum + "<br>");
    break;

}