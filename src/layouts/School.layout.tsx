import React, {ReactNode} from "react";

interface ISchoolLayoutProps {
    children: ReactNode,
}

function SchoolLayout(props: ISchoolLayoutProps): JSX.Element {
    return (
        <div>{props.children}</div>
    );
}

export default SchoolLayout;
