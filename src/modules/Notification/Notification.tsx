import React, {ReactNode} from "react";

import './Notification.scss';

export enum NotificationTypes {
    info = 'info',
    success = 'success',
    error = 'error',
}

interface INotificationProps {
    type: any,
    title?: string,
    subtitle?: string,
    children?: React.ReactChild | React.ReactChild[],
    loading: ReactNode,
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

export default ({type, loading, ...props}: INotificationProps) => {
    const NotifyComponent = components.filter(component => component.type === type)[0]?.component;
    return (
        <div>
            <React.Suspense fallback={loading}>
                <NotifyComponent {...props}/>
            </React.Suspense>
        </div>
    );
}
