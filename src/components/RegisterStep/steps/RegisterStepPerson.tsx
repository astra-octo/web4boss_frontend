import React from "react";
import RegisterStep from "../RegisterStep";
import {Form, Input} from "antd";

function RegisterStepPerson() {
    return (
        <RegisterStep>
            <Form layout={"vertical"}>
                <Form.Item label={'Фамилия'} required>
                    <Input type={"text"} required/>
                </Form.Item>
                <Form.Item label={'Имя'} required>
                    <Input type={"text"} required/>
                </Form.Item>
                <Form.Item label={'Отчество'} required>
                    <Input type={"text"} required/>
                </Form.Item>
                <Form.Item label={'Телефон'} required>
                    <Input type={"tel"} required/>
                </Form.Item>
            </Form>
        </RegisterStep>
    );
}

export default RegisterStepPerson;

