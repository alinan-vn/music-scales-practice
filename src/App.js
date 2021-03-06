import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './scss/main.scss';

import Landing from './components/landing/index';
import Guitar from './components/guitar/index';
import Piano from './components/piano/index';
import Learning from './components/learning/index';
import RelativeScales from './components/learning/relative-scales/index';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Route exact path='/' component={Landing} />
        <Route exact path='/guitar' component={Guitar} />
        <Route exact path='/piano' component={Piano} />
        <Route exact path='/learning' component={Learning} />

        <Route exact path='/relative-scales' component={RelativeScales} />
      </Router>
    )
  }
}

export default App;
