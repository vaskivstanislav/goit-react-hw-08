import { RiArrowGoBackFill } from 'react-icons/ri';
import s from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Oops!</h1>
      <h3 className={s.subtitle}>404 - Page not found</h3>
      <Link to="/" className={s.goToHome}>
        <RiArrowGoBackFill />
        &nbsp; GO TO HOME PAGE
      </Link>
    </div>
  );
};

export default NotFoundPage;