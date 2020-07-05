import React from "react";
import {WhiteBox} from "../WhiteBox";

import './RegisterStep.scss';
import Title from "antd/es/typography/Title";

interface IRegisterStepProps {
    children: React.ReactChild | React.ReactChild[],
    title?: string;
}

function RegisterStep(props: IRegisterStepProps): JSX.Element {
    return (
        <WhiteBox className={'register-step'}>
            <div>
                <Title type={"secondary"} level={3}>{props.title}</Title>
                {props.children}
            </div>
        </WhiteBox>
    );
}

export default RegisterStep;
