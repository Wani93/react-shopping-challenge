import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Cart from '@/pages/Cart';
import NewProduct from '@/pages/NewProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, path: 'products', element: <Products /> },
      { path: 'pdoructs/:productId', element: <ProductDetail /> },
      { path: 'cart', element: <Cart /> },
      { path: 'newProduct', element: <NewProduct /> },
    ],
  },
]);

export default router;
