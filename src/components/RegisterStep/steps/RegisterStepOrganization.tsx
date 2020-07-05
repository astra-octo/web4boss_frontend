import React, {FormEvent, useEffect} from "react";
import {IDefaultRegisterStepProps} from "./index";
import {Formik} from "formik";
import {Input, Form, Select} from "formik-antd";
import * as Yup from 'yup';
import {Option} from "antd/es/mentions";
import {RegisterStep} from "../index";
import {HomeOutlined} from "@ant-design/icons/lib";

interface IInitialFormValues {
    domain: string;
    name: string;
    type: string;
}

const initialFormValues: IInitialFormValues = {
    domain: '',
    name: '',
    type: '',
}

const OrganizationSchema = Yup.object()
    .shape({
        domain: Yup.string().min(2).max(12).required(),
        name: Yup.string().required(),
        type: Yup.string().max(100).required(),
    });

const callbackEvent = (event, callback: CallableFunction) => {
    const {name, value} = event.target as (EventTarget & {name: string, value:string});
    callback({[name]: value});
};

const RegisterStepOrganization = ({onChangeCallback, values}: IDefaultRegisterStepProps) => {
    return (
        <RegisterStep>
            <Formik
                initialValues={{...initialFormValues, ...values}}
                validationSchema={OrganizationSchema}
                onSubmit={(values => onChangeCallback(values))}
            >
                <Form layout={"vertical"}
                      onChange={(event) => callbackEvent(event, onChangeCallback)}>
                    <Form.Item label={'Доменное имя'} name='domain'>
                        <Input name='domain'
                               prefix={'https://'}
                               suffix={'.web4boss.ru'}
                               maxLength={12} />
                    </Form.Item>
                    <Form.Item label={'Тип организации'} name={'type'}>
                        <Select suffixIcon={<HomeOutlined />} name={'type'} onSelect={value => {
                            callbackEvent({
                                target: {name: 'type', value,}
                            }, onChangeCallback);
                        }}>
                            <Select.Option key={1} value={'school'}>Школа</Select.Option>
                            <Select.Option key={2} value={'vuz'}>Вуз</Select.Option>
                            <Select.Option key={3} value={'info'}>Инфо-бизнес</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label={'Название организации'} name={'name'}>
                        <Input name={'name'} max={100}/>
                    </Form.Item>
                </Form>
            </Formik>
        </RegisterStep>
    );
};

export default RegisterStepOrganization;
