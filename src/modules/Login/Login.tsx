import React from "react";
import {WhiteBox} from "../../components/WhiteBox";
import {Button, Divider, Form, Input, Typography} from 'antd';

import './Login.scss';
import {Link} from "react-router-dom";

const { Title } = Typography;

function Login(): JSX.Element {
    return (
        <WhiteBox className={'login-block'}>
            <Title level={2}>Войти на сайт</Title>
            <Form layout={"vertical"} size={"large"}>
                <Form.Item label={'E-mail'}>
                    <Input placeholder="tester@example.com" />
                </Form.Item>
                <Form.Item label={'Пароль'}>
                    <Input placeholder="*******" />
                </Form.Item>
                <Form.Item>
                    <Button type={"primary"} block>Войти</Button>
                </Form.Item>
            </Form>
            <Divider>Или войти через соц.сети</Divider>

            <Link to='/auth/register'>Регистрация</Link>
        </WhiteBox>
    );
}

export default Login;
