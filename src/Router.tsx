//importamos Router para los path y el componente
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import style from './global.module.css'
import Shop from './pages/Shop/Shop';

const browserRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop/> },
]);

function Router() {

  return (
    <>
      <div className={style.global}>
        <RouterProvider router={browserRouter} />
      </div>
    </>
  )
}

export default Router
