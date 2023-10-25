import React from "react";

export default function Calculator() {
  return (
    function numbers(num) {
      const field = document.getElementById("textResult");
      let result = field.innerText;
      console.log(equalBool);
      if (equalBool == true) {
        field.innerText = "0";
        equalBool = false;
      } else {
        if (result != 0) {
          //if the result field is already not a zero, concatenate it with the clicked number;
          result += num;
          field.innerText = `${result}`;
        } else {
          //if the result field is zero,replace it with the clicked number;
          field.innerText = `${num}`;
        }
      }
    },
    function operators(op) {
      const field = document.getElementById("textResult");
      let result = Number(field.innerText);
      var firstNum = 0;
      var currentOp = "";
      var secondNum = 0;
      var equalBool = false;
      var isOpAlreadySet = false;
      if (op != "=") {
        if (firstNum == 0) {
          firstNum = result;
        }

        if ((isOpAlreadySet = true)) {
          let changedOp = op;
          currentOp = `${op}`;
          field.innerText = "";
          isOpAlreadySet = true;
        }

        if (currentOp == "" && op == "/") {
          currentOp = "/";
          field.innerText = "";
          isOpAlreadySet = true;
        } else if (currentOp == "" && op == "*") {
          currentOp = "*";
          field.innerText = "";
          isOpAlreadySet = true;
        } else if (currentOp == "" && op == "+") {
          currentOp = "+";
          field.innerText = "";
          isOpAlreadySet = true;
        } else if (currentOp == "" && op == "-") {
          currentOp = "-";
          field.innerText = "";
          isOpAlreadySet = true;
        }
        //f
      } else {
        secondNum = Number(field.innerText);
        let res = "";
        switch (currentOp) {
          case "+":
            res = firstNum + secondNum;
            field.innerText = `${Number(res.toFixed(2))}`;
            firstNum = 0;
            currentOp = "";
            secondNum = "";
            equalBool = true;
            console.log(equalBool);
            isOpAlreadySet = false;
            break;
          case "-":
            res = firstNum - secondNum;
            field.innerText = `${Number(res.toFixed(2))}`;
            firstNum = 0;
            currentOp = "";
            secondNum = "";
            equalBool = true;
            isOpAlreadySet = false;
            break;
          case "*":
            res = firstNum * secondNum;
            field.innerText = `${Number(res.toFixed(2))}`;
            firstNum = 0;
            currentOp = "";
            secondNum = "";
            equalBool = true;
            isOpAlreadySet = false;
            break;
          case "/":
            res = firstNum / secondNum;
            field.innerText = `${Number(res.toFixed(2))}`;
            firstNum = 0;
            currentOp = "";
            secondNum = "";
            equalBool = true;
            isOpAlreadySet = false;
            break;
        }
      }
    }
  );
}
