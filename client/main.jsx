import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './src/App.jsx'
import './src/index.css'
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './src/redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

const root = createRoot(document.getElementById('app'))

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
