import { useDispatch } from 'react-redux';
import s from './LoginForm.module.css';
import { Field, Form, Formik } from 'formik';
import { login } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        navigate('/contacts');
      })
      .catch(() => {
        toast.error('Wrong email or password. Try again');
      });
    options.resetForm();
  };

  return (
    <>
      {/* TODO Додати валідацію форми  */}
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>E-mail</span>
            <Field type="email" name="email" placeholder="Enter your e-mail" required />
          </label>
          <label className={s.label}>
            <span>Password</span>
            <Field type="password" name="password" placeholder="Enter your password" required />
          </label>
          <button type="submit" className={s.btn}>
            Log In
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;