function makeFibonacci(input = 20) {
  let fib = [];
  let i = 2;

  fib[0] = 0;
  fib[1] = 1;

  while (fib[fib.length - 1] < input) {
    fib[i] = fib[i - 2] + fib[i - 1];
    i++;
  }

  fib.pop();

  return fib;
}

function showResult() {
  const oldData = document.getElementById("numbers-result");

  if (oldData) {
    oldData.remove();
  }

  const result = makeFibonacci(document.getElementById("fib-number").value);

  let numbers = document.createElement("h1");
  numbers.setAttribute("id", "numbers-result");

  result.forEach((el, i) => {
    if (i === result.length - 1) {
      numbers.innerHTML += `${el}`;
    } else {
      numbers.innerHTML += `${el}, `;
    }
  });

  document.getElementById("result").appendChild(numbers);
}

function showGanjil() {
  const oldData = document.getElementById("numbers-result");

  if (oldData) {
    oldData.remove();
  }

  const result = makeFibonacci(document.getElementById("fib-number").value);

  let numbers = document.createElement("h1");
  numbers.setAttribute("id", "numbers-result");
  let oddNum = [];

  result.forEach((el, i) => {
    if (el % 2 === 1) {
      if (i === result.length - 1) {
        numbers.innerHTML += `${el} = `;
      } else {
        numbers.innerHTML += `${el} + `;
      }
      oddNum.push(el);
    }
  });

  const sumOddNum = oddNum.reduce((a, b) => a + b);
  numbers.innerHTML += `${sumOddNum}`;

  document.getElementById("result").appendChild(numbers);
}

function showGenap() {
  const oldData = document.getElementById("numbers-result");

  if (oldData) {
    oldData.remove();
  }

  const result = makeFibonacci(document.getElementById("fib-number").value);

  let numbers = document.createElement("h1");
  numbers.setAttribute("id", "numbers-result");
  let evenNum = [];

  result.forEach((el) => (el % 2 === 0 ? evenNum.push(el) : null));

  evenNum.forEach((num, i) => {
    if (i === evenNum.length - 1) {
      numbers.innerHTML += `${num} = `;
    } else {
      numbers.innerHTML += `${num} + `;
    }
  });

  const sumEvenNum = evenNum.reduce((a, b) => a + b);
  numbers.innerHTML += `${sumEvenNum}`;

  document.getElementById("result").appendChild(numbers);
}
