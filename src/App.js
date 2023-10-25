import "./App.css";
import "./Calculator";
import numbers from "./Calculator";
import operators from "./Calculator";
function App() {
  return (
<>
 <div className="calculator">
        <h1>Calculator</h1>
    
        <table>
          <tbody>
          <tr>
            <td>Res:</td>
            <td id="textResult">0</td>
            <td><button id="buttonEqual" onClick="operators('=')">=</button></td>
          </tr>
          <tr>
            <td><button onClick={numbers(1)} id="buttonOne">1</button></td>
            <td><button onClick={numbers(2)} id="buttonTwo">2</button></td>
            <td><button onClick={numbers(3)} id="buttonThree">3</button></td>
            <td><button onClick={operators('/')} id="buttonDivision">/</button></td>
          </tr>
          <tr>
            <td><button onClick={numbers(4)} id="buttonFour">4</button></td>
            <td><button onClick={numbers(5)} id="buttonFive">5</button></td>
            <td><button onClick={numbers(6)} id="buttonSix">6</button></td>
            <td><button onClick={operators('*')} id="buttonMultiplication">*</button></td>
          </tr>
          <tr>
            <td><button onClick={numbers(7)} id="buttonSeven">7</button></td>
            <td><button onClick={numbers(8)} id="buttonEight">8</button></td>
            <td><button onClick={numbers(9)} id="buttonNine">9</button></td>
            <td><button onClick={operators('+')} id="buttonAddition">+</button></td>
          </tr>
          <tr>
            <td><button onClick={operators('-')} id="buttonSubtracting">-</button></td>
            <td><button onClick={numbers(0)} id="buttonZero">0</button></td>
            <td><button onClick={numbers('.')} id="buttonDot">.</button></td>
          </tr>
          </tbody>
        </table>
        <script defer src="Calculator.js"></script>
</div>
</>    

  );
}

export default App;



//ANIMALS.JS
// export default function Animals({ animals }) {
//   return animals.map(({ name, isMammal }) => {
//     let bool = "";
//     if (isMammal == true ? (bool = "true") : (bool = "false"))
//       return (
//     <div className="animalDiv">
//       <h2 className="animalHeading">
//           {" "}
//           The {name} is mammal-{bool}
//         </h2>
//     </div>
        
//       );
//   });
// }


//APP.JS
// import "./App.css";
// import "./Animals.css";
// import Animals from "./Animals";
// import { useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Routes } from "react-router-dom";
// function App() {
//   const animals = [
//     { name: "Lion", isMammal: true },
//     { name: "Snake", isMammal: false },
//     { name: "Dolphin", isMammal: true },
//     { name: "Crocodile", isMammal: false },
//     { name: "Elephant", isMammal: true },
//     { name: "Shark", isMammal: false },
//     { name: "Gorilla", isMammal: true },
//     { name: "Parrot", isMammal: false },
//     { name: "Kangaroo", isMammal: true },
//     { name: "Tiger", isMammal: true },
//     { name: "Penguin", isMammal: false },
//     { name: "Hippopotamus", isMammal: true },
//   ];

//   return (
//     <>
//       <div className="animalContainer">
//         <h1>The animal Kingdom</h1>

//         <Animals animals={animals} />
//       </div>
//     </>
//   );
// }

// export default App;