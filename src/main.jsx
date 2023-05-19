import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import NotFound from './pages/notfound.jsx'
import Homepage from './pages/home.jsx'
import ProductsPage from './pages/products'
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
    path : '/products',
    element : <ProductsPage />
  },
  
  {
    path : '/',
    element : <Homepage/>,
    errorElement : <NotFound />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)
