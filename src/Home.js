import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
//   return (
//     <div className="calculator">
//     <h1>Calculator</h1>

//     <table>
//       <tbody>
//       <tr>
//         <td>Res:</td>
//         <td id="textResult">0</td>
//         <td><button id="buttonEqual" onClick="operators('=')">=</button></td>
//       </tr>
//       <tr>
//         <td><button onClick={numbers(1)} id="buttonOne">1</button></td>
//         <td><button onClick={numbers(2)} id="buttonTwo">2</button></td>
//         <td><button onClick={numbers(3)} id="buttonThree">3</button></td>
//         <td><button onClick={operators('/')} id="buttonDivision">/</button></td>
//       </tr>
//       <tr>
//         <td><button onClick={numbers(4)} id="buttonFour">4</button></td>
//         <td><button onClick={numbers(5)} id="buttonFive">5</button></td>
//         <td><button onClick={numbers(6)} id="buttonSix">6</button></td>
//         <td><button onClick={operators('*')} id="buttonMultiplication">*</button></td>
//       </tr>
//       <tr>
//         <td><button onClick={numbers(7)} id="buttonSeven">7</button></td>
//         <td><button onClick={numbers(8)} id="buttonEight">8</button></td>
//         <td><button onClick={numbers(9)} id="buttonNine">9</button></td>
//         <td><button onClick={operators('+')} id="buttonAddition">+</button></td>
//       </tr>
//       <tr>
//         <td><button onClick={operators('-')} id="buttonSubtracting">-</button></td>
//         <td><button onClick={numbers(0)} id="buttonZero">0</button></td>
//         <td><button onClick={numbers('.')} id="buttonDot">.</button></td>
//       </tr>
//       </tbody>
//     </table>
//     <script defer src="Calculator.js"></script>
// </div>
//   )
return(
    <div>
    <h1>This is the home page</h1>
    <Link to="about">Click to view our about page</Link>
    <Link to="contact">Click to view our contact page</Link>
  </div>
)
}
