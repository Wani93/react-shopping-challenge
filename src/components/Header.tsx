import { Link } from 'react-router-dom';
import Logo from './Logo';
import { BiCart, BiPencil } from 'react-icons/bi';
import Avatar from './Avatar';
import Button from './UI/Button';
import { useAuthContext } from '@/context/AuthContext';

const Header = () => {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between  p-4 text-2xl">
      <Logo />
      <nav className="flex items-center gap-4 text-xl">
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/cart">
            <BiCart />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new">
            <BiPencil />
          </Link>
        )}
        {user && <Avatar user={user} />}
        {!user && <Button text="Login" onClick={login} />}
        {user && <Button text="Logout" onClick={logout} />}
      </nav>
    </header>
  );
};

export default Header;
