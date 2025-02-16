import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import '../App.css';
import '../../index.css';

const buildLinkClass = ({ isActive }) => {
  return clsx('link', isActive && 'active');
};

const Navigation = () => {
  return (
    <div className="subNav">
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={buildLinkClass}>
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;