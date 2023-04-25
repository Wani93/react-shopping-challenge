import { Product } from '@/api/firebase/types';
import { useNavigate } from 'react-router-dom';

const Card = ({ name, price, category, image, id }: Product) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <li className="flex flex-col cursor-pointer" onClick={handleClick}>
      <img src={image} alt="cloth" />
      <div className="flex justify-between mt-1">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <span className="text-gray-400">{category}</span>
    </li>
  );
};

export default Card;
