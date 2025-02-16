import { useDispatch } from 'react-redux';
import s from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ user }) => {
  const dispatch = useDispatch();

  const handleDeleteContactUser = () => {
    dispatch(deleteContact(user.id));
  };

  return (
    <>
      <div>
        <p className={s.contactText}>
          Name: {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
        </p>
        <p className={s.contactText}>Phone: {user.number}</p>
      </div>
      <button
        className={s.contactBtn}
        type="button"
        onClick={handleDeleteContactUser}
      >
        Delete
      </button>
    </>
  );
};
export default Contact;