let input = document.getElementById('input');
let resultDisplay = document.getElementById('result');
let buttons = document.querySelectorAll('button');
let expression = '';
let lastAnswer = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.textContent;

    if (value === 'clear') {
      expression = '';
      input.value = '';
      resultDisplay.textContent = '0';
    } else if (value === 'del') {
      expression = expression.slice(0, -1);
      input.value = expression;
    } else if (value === 'ENTER') {
      try {
        let evaluated = expression
          .replace(/x/g, '*')
          .replace(/÷/g, '/')
          .replace(/√/g, 'Math.sqrt')
          .replace(/%/g, '/100');

        let result = eval(evaluated);
        resultDisplay.textContent = result;
        lastAnswer = result;
      } catch (e) {
        resultDisplay.textContent = 'Error';
      }
    } else if (value === 'ans') {
      expression += lastAnswer;
      input.value = expression;
    } else if (value === '±') {
      if (expression.startsWith('-')) {
        expression = expression.slice(1);
      } else {
        expression = '-' + expression;
      }
      input.value = expression;
    } else {
      expression += value;
      input.value = expression;
    }
  });
});
