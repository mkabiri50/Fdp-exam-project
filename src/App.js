import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom';
import ToolBar from './Navigation/Toolbar/Toolbar';
import SideDrawer from './Navigation/SideDrawer/SideDrawer'
import Rec from './Components/Rec';
import Arc from './Components/Arc';
import Win3 from './Components/Win3';
class App extends Component {
  state = {
    showSD: false
  }
  sdCloseHandler = () => {
    this.setState({ showSD: false });
  }
  sdToggleHandler = () => {
    this.setState((prevState) => {
      return { showSD: !prevState.showSD };
    }
    );
  }
  render() {
    return (
      <React.Fragment >

        <ToolBar
          drawerToggleclicked={this.sdToggleHandler} />
        <SideDrawer
          open={this.state.showSD}
          closed={this.sdCloseHandler} />
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
