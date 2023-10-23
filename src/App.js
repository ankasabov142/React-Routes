import "./App.css";
import "./Calculator.js";
function App() {
  return (
<>
 <div className="calculator">
        <h1>Calculator</h1>
    
        <table>
          <tr>
            <td>Res:</td>
            <td id="textResult">0</td>
            <td><button id="buttonEqual" onclick="operators('=')">=</button></td>
          </tr>
          <tr>
            <td><button onclick="numbers('1')" id="buttonOne">1</button></td>
            <td><button onclick="numbers('2')" id="buttonTwo">2</button></td>
            <td><button onclick="numbers('3')" id="buttonThree">3</button></td>
            <td><button onclick="operators('/')" id="buttonDivision">/</button></td>
          </tr>
          <tr>
            <td><button onclick="numbers('4')" id="buttonFour">4</button></td>
            <td><button onclick="numbers('5')" id="buttonFive">5</button></td>
            <td><button onclick="numbers('6')" id="buttonSix">6</button></td>
            <td><button onclick="operators('*')" id="buttonMultiplication">*</button></td>
          </tr>
          <tr>
            <td><button onclick="numbers('7')" id="buttonSeven">7</button></td>
            <td><button onclick="numbers('8')" id="buttonEight">8</button></td>
            <td><button onclick="numbers('9')" id="buttonNine">9</button></td>
            <td><button onclick="operators('+')" id="buttonAddition">+</button></td>
          </tr>
          <tr>
            <td><button onclick="operators('-')" id="buttonSubtracting">-</button></td>
            <td><button onclick="numbers('0')" id="buttonZero">0</button></td>
            <td><button onclick="numbers('.')" id="buttonDot">.</button></td>
          </tr>
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