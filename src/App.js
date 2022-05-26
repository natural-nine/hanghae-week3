import React from "react";

import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";


import Home from "./Home";
import Detail from "./Detail";


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/detail/:id" component={withRouter(Detail)}/>
          {/* <Route exact path="/" component={withRouter(Home)}/> */}
          <Route path="/" >
            <Home />
          </Route>
        </Switch> 
      </Router>
  );
}

export default App;
