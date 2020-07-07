import React from "react";
import {Notification} from "../../Notification";
import {Link} from "react-router-dom";

function RegisterSuccess(props: any): JSX.Element {
    return (
        <>
            <Notification
                type={'success'}
                loading={'Загрузка...'}
                title={'Создан'}
            >
                <p>Данные для входа отправлены вам на электронную почту</p>
                <Link to={'/'}>На главную</Link>
            </Notification>
        </>
    )
}

export default RegisterSuccess;
