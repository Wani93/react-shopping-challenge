import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import MyCart from '@/pages/MyCart';
import NewProduct from '@/pages/NewProduct';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import ProtectedRoute from '@/pages/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'pdoructs/:id', element: <ProductDetail /> },
      {
        path: 'products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: 'carts',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
