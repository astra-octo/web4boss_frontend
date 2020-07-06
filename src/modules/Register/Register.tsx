import React, {useMemo} from "react";

import Title from "antd/es/typography/Title";

import './Register.scss';
import {Steps} from "../Steps";
import {Link} from "react-router-dom";
import {RegisterStepAccount, RegisterStepOrganization, RegisterStepPerson} from "../RegisterStep/steps";
import AuthorizationFabric from '../../libs/Authorization';
import {
    BaseAuthorizationService, IBaseSuccessResponse
} from "../../libs/Authorization/services/BaseAuthorizationService";
import {IAuthorizationServiceInterface} from "../../libs/Authorization/AuthorizationService.interface";
import {Alert, Space} from "antd";

class Register extends React.Component<null, any> {
    state = {
        domain: '',
        name: '',
        organization_type: '',

        first_name: '',
        last_name: '',
        middle_name: '',
        phone: '',

        email: '',
        password: '',
        changeStep: false,
        isValid: null,
    };

    private authorizationService: IAuthorizationServiceInterface;

    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
        this.handleValidate =  this.handleValidate.bind(this);
        this.handleChangeStep = this.handleChangeStep.bind(this);

        this.authorizationService = AuthorizationFabric(new BaseAuthorizationService()).service;
    }

    handleChangeStep() {
        if (this.state.isValid) {
            this.setState({changeStep: true});
        }
        return this.state.isValid;
    }

    handleValidate(status) {
        if (this.state.isValid === status) {return;}
        this.setState({isValid: status});
    }

    handleUpdate(updateFields) {
        this.setState({...updateFields});
    }

    handleSubmit(data) {
        console.log(data);
    }

    async handleFinish() {
        const response: IBaseSuccessResponse = await this.authorizationService
            .SignUp(this.state);
        console.log(response);
    }

    shouldComponentUpdate(nextProps: Readonly<null>, nextState: Readonly<any>, nextContext: any): boolean {

        if (nextState.changeStep && (this.state.isValid)) {
            this.setState({changeStep: false});
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
                                                    onValidateCallback={this.handleValidate}
                                                    onSubmitCallback={this.handleSubmit}
                                                    onChangeCallback={this.handleUpdate}/>
            },
            {
                id: 'register-step-person',
                props: {
                    title: 'О себе',
                },
                children: <RegisterStepPerson values={this.state}
                                              onValidateCallback={this.handleValidate}
                                              onSubmitCallback={this.handleSubmit}
                                              onChangeCallback={this.handleUpdate}/>
            },
            {
                id: 'register-step-account',
                props: {
                    title: 'Аккаунт',
                },
                children: <RegisterStepAccount values={this.state}
                                               onValidateCallback={this.handleValidate}
                                               onSubmitCallback={this.handleSubmit}
                                               onChangeCallback={this.handleUpdate}/>
            },
        ]

        return (
            <div className={'register-wrapper'}>
                <Steps
                    steps={steps}
                    nextBtnText={'Продолжить'}
                    prevBtnText={'Назад'}
                    finishBtnText={'Создать'}
                    changeStepCallback={this.handleChangeStep}
                    finishStepCallback={this.handleFinish}
                />
                <Link to={'/auth'}>Войти</Link>
            </div>
        );
    }
}

export default Register;
