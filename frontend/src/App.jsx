
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Admin from './pages/admin/Admin'
import Wishlist from './pages/wish/Wishlist'
import Basket from './pages/basket/Basket'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />,
    children: [
      {
        path: "/", 
    element: <Home />,
      },
      {
        path: "/admin", 
    element: <Admin />,
      },
      {
        path: "/wishlist", 
    element: <Wishlist />,
      },
      {
        path: "/basket", 
    element: <Basket />,
      },
    ]

  }
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App