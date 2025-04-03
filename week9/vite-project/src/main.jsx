import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Auth0ProviderWithHistory } from './components/Auth0ProviderWithHistory.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <StrictMode>
        <App />
      </StrictMode>
    </Auth0ProviderWithHistory>
  </BrowserRouter>
)
