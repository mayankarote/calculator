class calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  clear() {}
  delete() {}
  appendNumber() {}
  chooseOperation() {}
  compute() {}
  updateDisplay() {}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operations]");
const equalsButtons = document.querySelector("[data-equals]");
const deleteButtons = document.querySelector("[data-delete]");
const allclearButtons = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
