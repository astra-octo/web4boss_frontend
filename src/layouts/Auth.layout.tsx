import React, {ReactNode} from "react";
import { Layout } from 'antd';

import './Auth.layout.scss';

const { Content } = Layout;

interface IAuthLayoutProps {
    children: ReactNode,
}

function AuthLayout({children}: IAuthLayoutProps): JSX.Element {
    return (
        <div className={'auth-layout'}>
            <Content>{children}</Content>
        </div>
    );
}

export default AuthLayout;
