import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  ProductSlider from './componets/slider';
import ProductDetails from './componets/click';
import ProductDescription from './componets/description';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          {/* <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr /> */}
          <Switch>
              <Route exact path='/' component={ProductSlider} />
              <Route exact path='/productdetails/:imagename/:id' component={ProductDetails} />
              <Route exact path='/productdescription/:imagename/:id' component={ProductDescription} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;