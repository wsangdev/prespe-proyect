import dom from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider} from '@nextui-org/react'
import './global.css'

const root = dom.createRoot(document.getElementById('root'))

root.render(
  <NextUIProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NextUIProvider>
);