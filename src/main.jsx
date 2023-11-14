import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePages from './pages/HomePages.jsx'
import ProductPages from './pages/ProductPages.jsx'
import CreatePages from './pages/CreatePages.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePages />
  },
  {
    path: '/products',
    element: <ProductPages />
  },
  {
    path: '/products/tambah',
    element: <CreatePages />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
