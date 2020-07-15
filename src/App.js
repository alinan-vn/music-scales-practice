import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './scss/main.scss';

import Landing from './components/landing/index';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Route exact path='/' component={Landing} />
      </Router>
    )
  }
}

export default App;
