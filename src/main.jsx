import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import App from './App.jsx'
import OverMij from './paginas/OverMij.jsx'
import Projecten from './paginas/Projecten.jsx'
import Contact from './paginas/Contact.jsx'
import Home from './paginas/Home.jsx'
import NietGevonden from './paginas/NietGevonden.jsx'

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
