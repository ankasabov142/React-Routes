import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Blog from './Blog.js';
import Contact from './Contact.js';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation or any other components that you want to display on all pages */}
        {/* Define routes for Home, Blog, and Contact */}
        <Routes>
          <Route exact path="/Home" component={Home} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;