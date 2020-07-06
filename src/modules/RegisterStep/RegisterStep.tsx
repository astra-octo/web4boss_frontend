import React from "react";
import {WhiteBox} from "../../components/WhiteBox";

import './RegisterStep.scss';
import Title from "antd/es/typography/Title";

interface IRegisterStepProps {
    children: React.ReactChild | React.ReactChild[],
    title?: string;
}

function RegisterStep(props: IRegisterStepProps): JSX.Element {
    return (
        <div className={'register-step'}>
            <Title type={"secondary"} level={3}>{props.title}</Title>
            {props.children}
        </div>
    );
}

export default RegisterStep;
