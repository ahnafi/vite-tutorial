import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import NotFound from './pages/notfound.jsx'
import Homepage from './pages/home.jsx'
import ProductsPage from './pages/products'
import Profile from './pages/Profile'
import DetailProductPage from './pages/detailProductPage'
const router = createBrowserRouter([
  {
    path : '/login',
    element : <LoginPage />
  },
  {
    path : '/register',
    element : <RegisterPage />
  },
  
  {
    path : 'products',
    element : <ProductsPage />
  },
  {
    path : '/profile',
    element : <Profile />
  },
  {
    path : '/product/:id',
    element : <DetailProductPage></DetailProductPage>
  },
  
  {
    path : '/',
    element : <Homepage/>,
    errorElement : <NotFound/>
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
