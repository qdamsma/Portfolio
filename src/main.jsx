import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import { routeConfig } from './routes.jsx'

const router = createBrowserRouter(routeConfig)

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
