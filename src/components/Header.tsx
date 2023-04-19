import { Link } from 'react-router-dom';
import Logo from './Logo';
import { BiCart, BiPencil } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '@/api/firebase/firebase';
import { User } from 'firebase/auth';
import Avatar from './Avatar';

const Header = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onUserStateChange(async (user) => {
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
        {user && (
          <Link to="/products/new">
            <BiPencil />
          </Link>
        )}
        {!user && (
          <button onClick={login} className="px-2 rounded-lg bg-stone-300">
            Login
          </button>
        )}
        {user && <Avatar user={user} />}
        {user && (
          <button onClick={logout} className="px-2 rounded-lg bg-stone-300">
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
