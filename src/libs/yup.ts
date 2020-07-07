import * as Yup from 'yup';

Yup.setLocale({
    mixed: {
        required: 'Обязательно для заполнения',
    },
    string: {
        matches: params => {
            switch (params.path) {
                case 'phone':
                    return 'Некоректный формат номера';
                default:
                    return 'Невалидное значение';
            }
        },
        email: 'Введите действительный электронный адрес'
    }
});

export default Yup;
