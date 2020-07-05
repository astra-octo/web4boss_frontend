import React from "react";
import {Route, Switch} from "react-router";

import {AuthLayout} from "../../layouts";

import {Register} from "../../modules/Register";
import {Login} from "../../modules/Login";

import './AuthPage.scss';

function AuthPage() {
    return (
        <AuthLayout>
            <div className={'auth-wrapper'}>
                <Switch>
                    <Route exact path={'/auth/'} component={Login} />
                    <Route exact path={'/auth/register'} component={Register} />
                </Switch>
            </div>
        </AuthLayout>
    )
}

export default AuthPage;
