import s from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { register } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        navigate('/contacts');
      })
      .catch(() => {
        toast(t => (
          <div className={s.errorWrap}>
            <span className={s.error}>
              This email is already registered, try to{' '}
              <a href="/login" className={s.errorLink}>
                Log in
              </a>
            </span>
            <button onClick={() => toast.dismiss(t.id)} className={s.errorBtn}>
              Dismiss
            </button>
          </div>
        ));
      });
    options.resetForm();
  };

  // TODO Прописати стилі для валідації
  // Валідація форми
  const registerSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    email: Yup.string().email('Please provide a valid email address').required('Required'),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
        'Password must be at least 8 characters long, include at least 1 uppercase letter, 1 lowercase letter and 1 number'
      )
      .required('Required'),
  });

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={registerSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field type="text" name="name" placeholder="Enter your name" required />
            <ErrorMessage name="name" component={'span'} className={s.errorMessage} />
          </label>
          <label className={s.label}>
            <span>E-mail</span>
            <Field type="email" name="email" placeholder="Enter your e-mail" required />
            <ErrorMessage name="email" component={'span'} className={s.errorMessage} />
          </label>
          <label className={s.label}>
            <span>Password</span>
            <Field type="password" name="password" placeholder="Enter your password" required />
            <ErrorMessage name="password" component={'span'} className={s.errorMessage} />
          </label>
          <button type="submit" className={s.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;