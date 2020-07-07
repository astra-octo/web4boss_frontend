import React from "react";

import './NotificationInfo.scss';
import {Notification} from "./index";

export default (): JSX.Element => (
    <div className={'notification__info'}>
        <Notification>
            Info
        </Notification>
    </div>
)
