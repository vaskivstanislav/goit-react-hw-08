import s from './Contact.module.css';
import { BiSolidUser } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contacts = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.svgWrap}>
          <BiSolidUser />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.svgWrap}>
          <FaPhoneAlt />
          <p className={s.phone}>{number}</p>
        </div>
      </div>
      <button onClick={() => dispatch(deleteContact(id))} className={s.btn}>
        Delete
      </button>
    </>
  );
};

export default Contacts;