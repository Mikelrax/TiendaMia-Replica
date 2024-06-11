//importamos Router para los path y el componente
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import style from './global.module.css'
import Shop from './pages/Shop/Shop';
import { SearchContextProvider } from './modules/search/Providers/SearchContextProvider';
import Details from './pages/Details/Details';
import Categories from './pages/Categories/Categories';
import HowBuy from './pages/HowBuy/HowBuy';

const browserRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/details/:id", element: <Details /> },
  { path: "/categories", element: <Categories /> },
  { path: "/how-buy", element: <HowBuy />},
]);

function Router() {

  return (
    <>
      <div className={style.global}>
        <SearchContextProvider>
          <RouterProvider router={browserRouter} />
        </SearchContextProvider>
      </div>
    </>
  )
}

export default Router
