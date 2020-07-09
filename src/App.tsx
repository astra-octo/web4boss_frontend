import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.scss';
import {AuthPage} from "./pages/AuthPage";
import {CoreLoadOrganization} from "./store/actions/core";
import {connect} from "react-redux";

function App({loadOrganization}) {
    useEffect(function () {
        loadOrganization();
    }, [loadOrganization]);

  return (
    <div className="App">
        <Switch>
            <Route path={'/auth'} component={AuthPage} />
        </Switch>
    </div>
  );
}

export default connect(
    null,
    dispatch => {
        return {
            loadOrganization: () => {
                dispatch<any>(CoreLoadOrganization());
            }
        };
    },
)(App);
