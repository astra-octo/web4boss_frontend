import React from "react";

import Title from "antd/es/typography/Title";

import './Register.scss';
import {Steps} from "../Steps";
import {Link} from "react-router-dom";
import {RegisterStepAccount, RegisterStepOrganization, RegisterStepPerson} from "../RegisterStep/steps";
import AuthorizationFabric from '../../libs/Authorization';
import {
    BaseAuthorizationService, IBaseAuthorizationSingUpCredentials, IBaseSuccessResponse
} from "../../libs/Authorization/services/BaseAuthorizationService";
import {IAuthorizationServiceInterface} from "../../libs/Authorization/AuthorizationService.interface";

class Register extends React.Component<null, any> {
    state = {
        domain: '',
        name: '',
        type: '',

        first_name: '',
        last_name: '',
        second_name: '',
        phone: '',

        email: '',
        password: '',
        changeStep: false,
    };

    private authorizationService: IAuthorizationServiceInterface;

    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFinish = this.handleFinish.bind(this);

        this.authorizationService = AuthorizationFabric(new BaseAuthorizationService()).service;
    }

    handleUpdate(updateFields) {
        this.setState({...updateFields});
    }

    handleSubmit(data) {
        console.log(data);
    }

    async handleFinish() {
        const response: IBaseSuccessResponse = await this.authorizationService
            .singUp(this.state);
        console.log(response);
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
                    nextBtnText={'Продолжить'}
                    prevBtnText={'Назад'}
                    finishBtnText={'Создать'}
                    changeStepCallback={() => {
                        this.setState({changeStep: true});
                        return true;
                    }}
                    finishStepCallback={this.handleFinish}
                />
                <Link to={'/auth'}>Войти</Link>
            </>
        );
    }
}

export default Register;
