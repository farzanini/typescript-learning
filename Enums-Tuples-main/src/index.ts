enum Operation {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "*",
  DIVIDE = "/",
}

function performOperation(
  values: [number, number],
  operation: Operation
): number {
  switch (operation) {
    case Operation.ADD:
      return values.reduce(
        (pervValue, currentValue) => pervValue + currentValue
      );
    case Operation.SUBTRACT:
      return values.reduce(
        (pervValue, currentValue) => pervValue - currentValue
      );
    case Operation.MULTIPLY:
      return values.reduce(
        (pervValue, currentValue) => pervValue * currentValue
      );
    case Operation.DIVIDE:
      return values.reduce(
        (pervValue, currentValue) => pervValue / currentValue
      );
  }
}

export { Operation, performOperation };

const res = performOperation([12, 3], Operation.DIVIDE);
console.log(res);
