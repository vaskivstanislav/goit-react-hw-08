import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import '../App.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <nav className="nav">
        <Navigation />
        {!isLoggedIn && <AuthNav />}
        {isLoggedIn && <UserMenu />}
      </nav>
    </header>
  );
};

export default AppBar;