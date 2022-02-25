var number1 = parseInt(prompt("Enter 1st number: "));
var operator = prompt("'+', '-', '*', '/ ( ভাগ )', '% ( ভাগশেষ )'");
var number2 = parseInt(prompt("Enter 2nd number:" ));

if (operator == "+"){
    result = number1 + number2;
    document.write(result);
}
else if(operator == "-") {
    result = number1 - number2;
    document.write(result);
}
else if (operator == "*") {
    result = number1 * number2;
    document.write(result);
}
else if (operator == "/") {
    result = number1 / number2;
    document.write(result);
}
else if (operator == "%") {
    result = number1 % number2;
    document.write(result);
}
else {
    document.write("জানি না");
}