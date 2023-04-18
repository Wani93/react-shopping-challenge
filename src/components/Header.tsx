import { Link } from 'react-router-dom';
import Logo from './Logo';
import { BiCart, BiPencil } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="flex justify-between  p-4 text-lg">
      <Logo />
      <div className="flex items-center">
        <Link to="/cart">
          <BiCart />
        </Link>
        <Link to="newProduct">
          <BiPencil />
        </Link>
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;
