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
