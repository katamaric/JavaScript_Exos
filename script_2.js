let number = prompt("What number would you like to calculate the factorial of ?")

function factorial(number) {
  if (number < 0)
    return -1;
  else if (number == 0)
    return 1;
  else {
    return (number * factorial(number - 1));
  }
}

console.log("The answer is " + factorial(number))