import React from "react";
import RegisterStep from "../RegisterStep";
import {Form, Input} from "formik-antd";
import Yup from '../../../../libs/yup';
import {Formik} from "formik";
import {IDefaultRegisterStepProps} from "./index";
import {Col, Row} from "antd";
import Group from "antd/es/input/Group";

interface IInitialFormValues {
    email: string;
    password: string;
    password_confirmation: string;
}

const initialFormValues: IInitialFormValues = {
    email: '',
    password: '',
    password_confirmation: '',
}

const AccountSchema = Yup.object()
    .shape({
        email: Yup.string().email().required(),
        username: Yup.string().required(),
        password: Yup.string().required(),
        password_confirmation: Yup.string().oneOf([Yup.ref('password'), null]).required(),
    });

const callbackEvent = (event, callback: CallableFunction) => {
    const {name, value} = event.target as (EventTarget & {name: string, value:string});
    callback({[name]: value});
};

function RegisterStepAccount({onChangeCallback, onValidateCallback, values}: IDefaultRegisterStepProps) {
    return (
        <RegisterStep>
            <Formik
                initialValues={{...initialFormValues, ...values}}
                validationSchema={AccountSchema}
                validate={async (fields) => onValidateCallback(await AccountSchema.isValid(fields))}
                validateOnMount={true}
                onSubmit={(values => onChangeCallback(values))}
            >
                <Form layout={"vertical"}
                      size={'large'}
                      onChange={(event) => callbackEvent(event, onChangeCallback)}>
                    <Form.Item label={'E-mail'} name='email' required>
                        <Input name={'email'} type={'email'} autoComplete={'off'}/>
                    </Form.Item>

                    <Form.Item label={'Имя пользователя'} name='username' required>
                        <Input name={'username'} autoComplete={'off'} />
                    </Form.Item>

                    <Group>
                        <Row gutter={8}>
                            <Col span={12}>
                                <Form.Item label={'Пароль'} name='password' required>
                                    <Input name={'password'} type={'password'} autoComplete={'off'}/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={'Повторите пароль'} name='password_confirmation' required>
                                    <Input name={'password_confirmation'} type={'password'} autoComplete={'off'}/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Group>
                </Form>
            </Formik>
        </RegisterStep>
    );
}

export default RegisterStepAccount;
