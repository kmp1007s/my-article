import React from "react";

import {Switch, Route} from "react-router-dom";
import Index from "./page/Index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </div>
  );
}

export default App;
