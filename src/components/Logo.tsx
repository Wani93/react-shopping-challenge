import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center cursor-pointer">
      <BiShoppingBag className="mr-1" />
      <h1>React Shopping Challenge</h1>
    </Link>
  );
};

export default Logo;
