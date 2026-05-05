import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import App from './App.jsx'

const Home = lazy(() => import('./paginas/Home.jsx'))
const OverMij = lazy(() => import('./paginas/OverMij.jsx'))
const Projecten = lazy(() => import('./paginas/Projecten.jsx'))
const Contact = lazy(() => import('./paginas/Contact.jsx'))
const NietGevonden = lazy(() => import('./paginas/NietGevonden.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'over-mij', element: <OverMij /> },
      { path: 'projecten', element: <Projecten /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NietGevonden /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
