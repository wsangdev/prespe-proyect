import dom from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import './global.css'
import { Provider } from 'react-redux'
import store from './store'

const root = dom.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <NextUIProvider>
      <BrowserRouter>
        <main className='dark text-foreground bg-background'>
          <App />
        </main>
      </BrowserRouter>
    </NextUIProvider>
  </Provider>
);