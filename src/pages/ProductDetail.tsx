import Button from '@/components/UI/Button';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const {
    state: { category, image, name, price, description, option },
  } = useLocation();

  return (
    <>
      <h1 className="text-2xl m-2">{category}</h1>
      <div className="flex">
        <div className="flex-1">
          <img src={image} alt="상품 이미지" />
        </div>
        <section className="flex flex-1 flex-col py-4 px-6 gap-1">
          <h2 className="text-2xl">{name}</h2>
          <h3 className="text-xl">{price}</h3>
          <span className="text-md">{description}</span>
          <div className="flex">
            <label className="w-10" htmlFor="option">
              옵션
            </label>
            <select
              className="flex-1 border outline-none border-gray-300"
              id="option"
            >
              {option.map((value: string) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <Button text="장바구니에 추가" />
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
