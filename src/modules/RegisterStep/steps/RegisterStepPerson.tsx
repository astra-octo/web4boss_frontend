import React from "react";
import RegisterStep from "../RegisterStep";
import {Form, Input} from "formik-antd";
import * as Yup from "yup";
import {PhoneRegExp} from "../../../libs/constants";
import {Formik} from "formik";
import {IDefaultRegisterStepProps} from "./index";

interface IInitialFormValues {
    last_name: string;
    first_name: string;
    middle_name: string;
    phone: string;
}

const initialFormValues: IInitialFormValues = {
    last_name: '',
    first_name: '',
    middle_name: '',
    phone: '',
}

const PersonSchema = Yup.object()
    .shape({
        first_name: Yup.string().min(2).max(40).required(),
        last_name: Yup.string().min(2).max(40).required(),
        middle_name: Yup.string().min(2).max(40).required(),
        phone: Yup.string().matches(PhoneRegExp).required(),
    });

const callbackEvent = (event, callback: CallableFunction) => {
    const {name, value} = event.target as (EventTarget & {name: string, value:string});
    callback({[name]: value});
};

function RegisterStepPerson({onChangeCallback, onValidateCallback, values}: IDefaultRegisterStepProps) {
    return (
        <RegisterStep>
            <Formik
                initialValues={{...initialFormValues, ...values}}
                validationSchema={PersonSchema}
                validate={async (fields) => onValidateCallback(await PersonSchema.isValid(fields))}
                validateOnMount={true}
                onSubmit={(values => onChangeCallback(values))}
            >
                <Form layout={"vertical"}
                      size={'large'}
                      onChange={(event) => callbackEvent(event, onChangeCallback)}>
                    <Form.Item label={'Имя'} name='first_name' required>
                        <Input name={'first_name'}/>
                    </Form.Item>

                    <Form.Item label={'Фамилия'} name='last_name' required>
                        <Input name={'last_name'}/>
                    </Form.Item>

                    <Form.Item label={'Отчество'} name='middle_name' required>
                        <Input name={'middle_name'}/>
                    </Form.Item>

                    <Form.Item label={'Телефон'} name='phone' required>
                        <Input name={'phone'}/>
                    </Form.Item>
                </Form>
            </Formik>
        </RegisterStep>
    );
}

export default RegisterStepPerson;
