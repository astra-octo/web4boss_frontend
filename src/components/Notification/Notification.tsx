import React from "react";

import './Notification.scss';

export const Notification = (props): JSX.Element => (
    <div className={'notification'}>
        {props.children}
    </div>
)
