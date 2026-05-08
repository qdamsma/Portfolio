import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const routes = ['/', '/over-mij', '/projecten', '/contact']

async function prerender() {
  const distDir = path.join(__dirname, 'dist')
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

  const { render } = await import('./dist/server/entry-server.js')

  for (const route of routes) {
    const appHtml = await render(route)
    const html = template.replace('<!--app-html-->', appHtml)

    const segments = route.split('/').filter(Boolean)
    const routeDir = segments.length === 0
      ? distDir
      : path.join(distDir, ...segments)

    fs.mkdirSync(routeDir, { recursive: true })
    fs.writeFileSync(path.join(routeDir, 'index.html'), html)
    console.log(`Pre-rendered: ${route}`)
  }
}

prerender().catch((err) => {
  console.error(err)
  process.exit(1)
})
