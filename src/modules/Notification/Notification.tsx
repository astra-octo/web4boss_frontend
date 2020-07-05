import React from "react";

import {NotificationTypes} from "./index";

import './Notification.scss';

interface INotificationProps {
    type: NotificationTypes[string],
    title: string,
    subtitle: string,
    children?: React.ReactChild | React.ReactChild[]
}

const components = [
    {
        type: NotificationTypes.info,
        component: React.lazy(() => import('../../components/Notification').then(component => component.NotificationInfo)),
    },
    {
        type: NotificationTypes.success,
        component: React.lazy(() => import('../../components/Notification').then(component => component.NotificationSuccess)),
    },
    {
        type: NotificationTypes.error,
        component: React.lazy(() => import('../../components/Notification').then(component => component.NotificationError)),
    }
];

export default ({type}: INotificationProps) => {
    const NotifyComponent = components.filter(component => component.type === type)[0];

    return (
        <div>
            <NotifyComponent>jhjh</NotifyComponent>
        </div>
    );
}
