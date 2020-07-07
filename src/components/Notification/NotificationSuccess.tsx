import React from "react";

import './NotificationSuccess.scss';
import {Notification} from "./index";
import {CheckCircleTwoTone} from "@ant-design/icons/lib";
import Title from "antd/es/typography/Title";

export default (props): JSX.Element => (
    <div className={'notification-success'}>
        <Notification>
            <div className={'notification-success__left'}>
                <CheckCircleTwoTone className={'notification__icon'} twoToneColor="#8BC34A" />
                <Title className={'notification__title'} level={4}>{props.title || 'Успешно'}</Title>
            </div>
            <div className={'notification-success__right'}>
                {props.children}
            </div>
        </Notification>
    </div>
)
