import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.scss';
import {AuthPage} from "./pages/AuthPage";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path={'/auth'} component={AuthPage} />
        </Switch>
    </div>
  );
}

export default App;
