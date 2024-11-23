import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { StrictMode } from 'react'

import App from './App.tsx'
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
