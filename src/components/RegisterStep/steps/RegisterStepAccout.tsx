import React from "react";
import RegisterStep from "../RegisterStep";
import {Form, Input} from "antd";

function RegisterStepAccount() {
    return (
        <RegisterStep>
            <Form layout={"vertical"}>
                <Form.Item label={'E-mail'} required>
                    <Input type={"email"} required/>
                </Form.Item>
                <Form.Item label={'Пароль'} required>
                    <Input type={"password"} required/>
                </Form.Item>
                <Form.Item label={'Повторите пароль'} required>
                    <Input type={"password"} required/>
                </Form.Item>
            </Form>
        </RegisterStep>
    );
}

export default RegisterStepAccount;
