import "./App.css";
import "./Calculator";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom"
import numbers from "./Calculator";
import operators from "./Calculator";
import NavBar from "./NavBar";
function App() {
  return (
<>
<Router>
  <NavBar />
<Routes>
        <Route path="/" Component={ <Home/> } />
        <Route path="blog" Component={ <Blog/> } />
        <Route path="contact" Component={ <Contact/> } />
      </Routes>
      </Router>

</>    

  );
}

export default App;

