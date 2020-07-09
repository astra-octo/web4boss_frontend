import React, {useState} from "react";
import {Link, useHistory, withRouter} from "react-router-dom";
import {Alert, Button, Divider, Form, Input} from 'antd';

import AuthorizationFabric from "../../libs/Authorization";
import {BaseAuthorizationService} from "../../libs/Authorization/services/BaseAuthorizationService";
import {connect} from "react-redux";
import {AccountLoad} from '../../store/actions/account';

import './Login.scss';

const authorizationService = AuthorizationFabric(new BaseAuthorizationService()).service;

function Login({loadAccount}): JSX.Element {
    const [hasError, setHasError] = useState(false)
    const history = useHistory();

    const onFinish = async (values) => {
        try {
            await authorizationService.SignIn(values);
            setHasError(false);
            loadAccount();
            history.push('/')
        } catch {
            setHasError(true);
        }
    };

    return (
        <div className={'login-block'}>
            <Form layout={"vertical"} size={"large"} onFinish={onFinish}>
                <Form.Item label={'E-mail'} name={'email'}>
                    <Input placeholder="tester@example.com" />
                </Form.Item>
                <Form.Item label={'Пароль'} name={'password'}>
                    <Input placeholder="*******" />
                </Form.Item>
                <Form.Item>
                    {hasError && (
                        <div>
                            <Alert message="Проверте правильность ввода данных" type="error" />
                            <br/>
                        </div>
                    )}
                    <Button type={"primary"} htmlType={'submit'} block>Войти</Button>
                </Form.Item>
            </Form>
            <Divider>Или войти через соц.сети</Divider>

            <Link to='/auth/register'>Регистрация</Link>
        </div>
    );
}

export default connect(
    null,
    dispatch => ({
        loadAccount: () => dispatch<any>(AccountLoad())
    })
)(Login);
