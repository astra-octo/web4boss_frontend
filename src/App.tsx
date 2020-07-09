import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.scss';
import {AuthPage} from "./pages/AuthPage";
import {CoreLoadOrganization} from "./store/actions/core";
import {connect} from "react-redux";
import {MiddlewareRoute} from "./modules/MiddlewareRoute";
import {IsAuth, IsGuest} from "./libs/meddlers";
import {AccountLoad} from "./store/actions/account";

function App({loadOrganization, loadAccount}) {
    useEffect(function () {
        loadAccount();
        loadOrganization();
    }, [loadOrganization, loadAccount]);

  return (
    <div className="App">
        <Switch>
            <MiddlewareRoute meddlers={[
                IsGuest,
            ]} path={'/auth'} component={AuthPage} />
            <MiddlewareRoute meddlers={[
                IsAuth,
            ]} path={'/app'} component={AppPage} />
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
            },
            loadAccount: () => {
                dispatch<any>(AccountLoad());
            }
        };
    },
)(App);
