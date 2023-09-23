import * as yup from 'yup';

export const initialValues = {
  username: '',
  password: '',
  email: '',
};

export const validationSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().email('Invalid email address').required('Email is Required'),
});
