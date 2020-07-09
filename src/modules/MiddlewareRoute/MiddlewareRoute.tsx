import React, {useEffect} from "react";
import {Route, RouteProps, useHistory} from "react-router";
import {from} from "rxjs";
import {catchError, skipWhile} from "rxjs/operators";
import {connect} from "react-redux";
import {IDefaultState} from "../../store/states/types";

interface IMiddlewareRouteProps {
    meddlers: CallableFunction[],
    rootState: IDefaultState,
}

function MiddlewareRoute({meddlers, render, rootState, ...props}: IMiddlewareRouteProps & RouteProps) {
    const history = useHistory();

    useEffect(() => {
        meddlers.forEach((meddler: CallableFunction) => {
            try {
                meddler(history, rootState);
            } catch (e) {
                e();
            }
        })
    }, [meddlers, rootState]);

    return (
        <>
            <Route {...props}/>
        </>
    );
}

export default connect(
    (state) => {
        return {
            rootState: state,
        };
    },
    null,
)(MiddlewareRoute);
