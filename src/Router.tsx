//importamos Router para los path y el componente
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import style from './global.module.css'
import Shop from './pages/Shop/Shop';
import { SearchContextProvider } from './modules/search/Providers/SearchContextProvider';
import Details from './pages/Details/Details';
import Categories from './pages/Categories/Categories';
import HowBuy from './pages/HowBuy/HowBuy';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart/Cart';

const browserRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/details/:id", element: <Details /> },
  { path: "/categories", element: <Categories /> },
  { path: "/how-buy", element: <HowBuy /> },
  { path: "checkout/cart", element: <Cart /> },
]);
// app.tsx
function Router() {

  return (
    <>
      <div className={style.global}>
        <SearchContextProvider>
          <RouterProvider router={browserRouter} />
        </SearchContextProvider>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  )
}

export default Router
