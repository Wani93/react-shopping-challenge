import { getProducts } from '@/api/firebase/firebase';
import { useQuery } from '@tanstack/react-query';
import Card from './Card';

const Products = () => {
  const { isLoading, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default Products;
