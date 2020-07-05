import React from "react";

import './Notification.scss';
import {CheckCircleTwoTone} from "@ant-design/icons/lib";
import Title from "antd/es/typography/Title";

export default (props): JSX.Element => (
    <div className={'notification'}>
        <CheckCircleTwoTone className={'notification__icon'} twoToneColor="#26de81" />
        <Title className={'notification__title'} level={2}>Успешно</Title>
        {props.children}
    </div>
)
