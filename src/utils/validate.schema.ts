import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({

    password: Yup.string()
        .min(2, 'Password cần tối thiểu 6 ký tự')
        .max(50, 'Password tối đa 50 ký tự ')
        .required('Password không được để trống'),
    email: Yup.string()
        .email('Định dạng email không hợp lệ')
        .required('Email không được để trống'),
});
