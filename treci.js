const operandsmap = {
  "+": "plus",
  "-": "minus",
  "*": "times",
  "/": "divided by",
};

function make_calculator(operand) {
  function calculator(a, b) {
    console.log("operand is " + operandsmap[operand]);

    switch (operand) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return "Unknown operand";
    }
  }

  return calculator;
}

const calc = make_calculator("+");
console.log(calc(2213, 321));
const calc2 = make_calculator("-");
console.log(calc2(23213, 3213));
const calc3 = make_calculator("*");
console.log(calc3(2231231, 33));
const calc4 = make_calculator("/");
console.log(calc4(221123, 32313));
