import {FormikValues} from "formik";

export interface IDefaultRegisterStepProps {
    onChangeCallback: CallableFunction,
    onSubmitCallback: CallableFunction,
    values: FormikValues
}

export {default as RegisterStepAccount} from './RegisterStepAccout';
export {default as RegisterStepOrganization} from './RegisterStepOrganization';
export {default as RegisterStepPerson} from './RegisterStepPerson';
