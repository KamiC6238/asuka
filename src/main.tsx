import 'virtual:uno.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'jotai'

import { store } from '@/store'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
