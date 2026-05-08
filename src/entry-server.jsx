import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom'
import { routeConfig } from './routes.jsx'

export async function render(url) {
  const handler = createStaticHandler(routeConfig)
  const context = await handler.query(new Request(`http://localhost${url}`))

  if (context instanceof Response) throw context

  const router = createStaticRouter(handler.dataRoutes, context)

  return renderToString(
    <StrictMode>
      <StaticRouterProvider router={router} context={context} />
    </StrictMode>
  )
}
