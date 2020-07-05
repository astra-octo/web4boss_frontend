import React, {ReactNode} from "react";

interface IMainLayoutProps {
    children: ReactNode,
}

function MainLayout(props: IMainLayoutProps): JSX.Element {
    return (
        <div>{props.children}</div>
    );
}

export default MainLayout;

