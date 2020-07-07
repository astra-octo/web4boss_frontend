import React from "react";

import './Notification.scss';

export default (props): JSX.Element => (
    <div className={'notification'}>
        {props.children}
    </div>
)
