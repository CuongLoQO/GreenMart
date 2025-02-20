import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterCustom from './router'
import { BrowserRouter } from 'react-router-dom'
import "./style/style.scss/"
import { store } from './features/cart/store';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
    <BrowserRouter>
      <RouterCustom />
    </BrowserRouter>
  </StrictMode>
  </Provider>
)
