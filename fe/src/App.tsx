import React from "react";

import GlobalStyle from "./style/globalStyle";

import {ThemeProvider} from "styled-components";
import {theme} from "./style/theme";

import {Switch, Route} from "react-router-dom";
import Index from "./page/Index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
