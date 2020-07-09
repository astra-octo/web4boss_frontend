import React from "react";
import {Route, Switch} from "react-router";

import {AuthLayout} from "../../layouts";

import {Register} from "../../modules/Register";
import {Login} from "../../modules/Login";

import './AuthPage.scss';
import {RegisterSuccess} from "../../modules/Register/RegisterSuccess";
import {connect} from "react-redux";
import {IDefaultState} from "../../store/states/types";
import {OrganizationLogo} from "../../components/OrganizationLogo";

function AuthPage({organization}) {
    return (
        <AuthLayout>
            <div className={'auth-wrapper'}>
                {organization && (
                    <>
                        <OrganizationLogo organization={organization}/>
                    </>
                )}
                <Switch>
                    <Route exact path={'/auth/'} component={Login} />
                    <Route exact path={'/auth/register'} component={Register} />
                    <Route exact path={'/auth/register/success'} component={RegisterSuccess} />
                </Switch>
            </div>
        </AuthLayout>
    )
}

export default connect(
    (state: IDefaultState, ownProps) => {
        return {
            organization: state.core.organization,
        };
    },
)(AuthPage);
