import React, { useState } from 'react';

const Home = () => {
  const [result, setResult] = useState('0');
  const [firstNum, setFirstNum] = useState('');
  const [operator, setOperator] = useState('');
  const [waitingForSecondNum, setWaitingForSecondNum] = useState(false);

  const handleNumberClick = (num) => {
    if (waitingForSecondNum) {
      setResult(num);
      setWaitingForSecondNum(false);
    } else {
      setResult(result === '0' ? num : result + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (op === '=') {
      if (operator && firstNum) {
        const secondNumber = parseFloat(result);
        let newResult = '';
        switch (operator) {
          case '+':
            newResult = parseFloat(firstNum) + secondNumber;
            break;
          case '-':
            newResult = parseFloat(firstNum) - secondNumber;
            break;
          case '*':
            newResult = parseFloat(firstNum) * secondNumber;
            break;
          case '/':
            newResult = parseFloat(firstNum) / secondNumber;
            break;
          default:
            break;
        }
        setResult(newResult.toFixed(2).toString());
        setFirstNum('');
        setOperator('');
      }
    } else {
      setFirstNum(result);
      setOperator(op);
      setWaitingForSecondNum(true);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <table>
        <tr>
          <td>Res:</td>
          <td id="textResult">{result}</td>
          <td><button onClick={() => handleOperatorClick('=')}>=</button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleNumberClick('1')}>1</button></td>
          <td><button onClick={() => handleNumberClick('2')}>2</button></td>
          <td><button onClick={() => handleNumberClick('3')}>3</button></td>
          <td><button onClick={() => handleOperatorClick('/')}>/</button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleNumberClick('4')}>4</button></td>
          <td><button onClick={() => handleNumberClick('5')}>5</button></td>
          <td><button onClick={() => handleNumberClick('6')}>6</button></td>
          <td><button onClick={() => handleOperatorClick('*')}>*</button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleNumberClick('7')}>7</button></td>
          <td><button onClick={() => handleNumberClick('8')}>8</button></td>
          <td><button onClick={() => handleNumberClick('9')}>9</button></td>
          <td><button onClick={() => handleOperatorClick('+')}>+</button></td>
        </tr>
        <tr>
          <td><button onClick={() => handleOperatorClick('-')}>-</button></td>
          <td><button onClick={() => handleNumberClick('0')}>0</button></td>
          <td><button onClick={() => handleNumberClick('.')}>.</button></td>
        </tr>
      </table>
    </div>
  );
};

export default Home;
