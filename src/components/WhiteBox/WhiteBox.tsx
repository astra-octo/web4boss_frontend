import React from "react";

import './WhiteBox.scss';

interface IWhiteBlockProps {
    children: React.ReactChild | React.ReactChild[],
    className?: string,
}

function WhiteBox({children, className}: IWhiteBlockProps): JSX.Element {
    return (
        <div className={`white-box ${className || ''}`}>{children}</div>
    );
}

export default WhiteBox;
