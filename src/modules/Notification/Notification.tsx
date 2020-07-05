import React from "react";

import {NotificationTypes} from "./index";

import './Notification.scss';

interface INotificationProps {
    type: any,
    title?: string,
    subtitle?: string,
    children?: React.ReactChild | React.ReactChild[]
}

const components = [
    {
        type: NotificationTypes.info,
        component: React.lazy(() => import('../../components/Notification/NotificationInfo')),
    },
    {
        type: NotificationTypes.success,
        component: React.lazy(() => import('../../components/Notification/NotificationSuccess')),
    },
    {
        type: NotificationTypes.error,
        component: React.lazy(() => import('../../components/Notification/NotificationError')),
    }
];

export default ({type, ...props}: INotificationProps) => {
    console.log(type, props);

    const NotifyComponent = components.filter(component => component.type === type)[0]?.component;
    return (
        <div>
            <React.Suspense fallback={'...'}>
                <NotifyComponent {...props}/>
            </React.Suspense>
        </div>
    );
}
