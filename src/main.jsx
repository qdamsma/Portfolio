import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import App from './App.jsx'
import Home from './paginas/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'over-mij', lazy: async () => ({ Component: (await import('./paginas/OverMij.jsx')).default }) },
      { path: 'projecten', lazy: async () => ({ Component: (await import('./paginas/Projecten.jsx')).default }) },
      { path: 'contact', lazy: async () => ({ Component: (await import('./paginas/Contact.jsx')).default }) },
      { path: '*', lazy: async () => ({ Component: (await import('./paginas/NietGevonden.jsx')).default }) },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
