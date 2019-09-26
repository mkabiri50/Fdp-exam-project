import React, { Component } from 'react';
import { Route, Switch,} from 'react-router-dom';
import ToolBar from './Navigation/Toolbar/Toolbar';
import Rec from './Components/Rec';
import Arc from './Components/Arc';
import Win3 from './Components/Win3';
class App extends Component {
  render() {
    return (
      <React.Fragment >
      
        <ToolBar />
        <Switch>
          <Route path="/" exact component={Rec} />
          <Route path="/UNIT-2" component={Arc} />
          <Route path="/UNIT-3" component={Win3} />
        </Switch>
      
        
      </React.Fragment>

    )
  }

}

export default App
