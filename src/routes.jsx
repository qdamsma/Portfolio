import App from './App.jsx'
import Home from './paginas/Home.jsx'
import OverMij from './paginas/OverMij.jsx'
import Projecten from './paginas/Projecten.jsx'
import Contact from './paginas/Contact.jsx'
import NietGevonden from './paginas/NietGevonden.jsx'

export const routeConfig = [
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
]
