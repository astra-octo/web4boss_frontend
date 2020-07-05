import React from "react";

import Title from "antd/es/typography/Title";

import './Register.scss';
import {Steps} from "../Steps";
import {Link} from "react-router-dom";
import {RegisterStepAccount, RegisterStepOrganization, RegisterStepPerson} from "../../components/RegisterStep/steps";


class Register extends React.Component<null, any> {
    state = {
        domain: '',
        name: '',
        type: '',
        changeStep: false,
    };

    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(updateFields) {
        this.setState({...updateFields});
    }

    handleSubmit(data) {
        console.log(data);
    }

    shouldComponentUpdate(nextProps: Readonly<null>, nextState: Readonly<any>, nextContext: any): boolean {

        if (nextState.changeStep) {
            this.setState({changeStep: false})
            return true;
        }

        return false;
    }

    render(): JSX.Element {
        const steps = [
            {
                id: 'register-step-organization',
                props: {
                    title: 'Организация',
                },
                children: <RegisterStepOrganization values={this.state}
                                                    onSubmitCallback={this.handleSubmit}
                                                    onChangeCallback={this.handleUpdate}/>
            },
            {
                id: 'register-step-person',
                props: {
                    title: 'О себе',
                },
                children: <RegisterStepPerson values={this.state}
                                              onSubmitCallback={this.handleSubmit}
                                              onChangeCallback={this.handleUpdate}/>
            },
            {
                id: 'register-step-account',
                props: {
                    title: 'Аккаунт',
                },
                children: <RegisterStepAccount values={this.state}
                                               onSubmitCallback={this.handleSubmit}
                                               onChangeCallback={this.handleUpdate}/>
            },
        ]

        return (
            <>
                <Title level={2}>Регистрация</Title>
                <Steps
                    steps={steps}
                    nextBtnText={'next'}
                    prevBtnText={'prev'}
                    changeStepCallback={() => (this.setState({changeStep: true}), true)}
                />
                <Link to={'/auth'}>Войти</Link>
            </>
        );
    }
}

export default Register;
