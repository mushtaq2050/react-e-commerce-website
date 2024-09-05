import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-our0j24an66w4rsd.us.auth0.com"
    clientId="IiJNZyLf9y2tcVz0tHz54sFhQdPMy00p"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
