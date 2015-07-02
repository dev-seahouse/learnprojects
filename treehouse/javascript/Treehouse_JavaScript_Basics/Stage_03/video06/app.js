var input1 = prompt("Enter 1st number");
var input2 = prompt("Enter the 2nd number");
var number1 = parseInt(input1);
var number2 = parseInt(input2);

var randomNumber = Math.floor(Math.random() * (number2-number1 + 1)) + number1;
var message = "<p>" + randomNumber+ " is a number between " +number1 +" and " +
+ number2 +'.</p>';
document.write(message);
