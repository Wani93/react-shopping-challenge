import { Link } from 'react-router-dom';
import Logo from './Logo';
import { BiCart, BiPencil } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '@/api/firebase/firebase';
import Avatar from './Avatar';
import { MyUser } from '@/api/firebase/types';
import Button from './UI/Button';

const Header = () => {
  const [user, setUser] = useState<MyUser | null>(null);

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

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
