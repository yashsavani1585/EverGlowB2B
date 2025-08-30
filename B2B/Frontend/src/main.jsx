import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CartProvider } from './context/cartContext.jsx'
import './index.css'
import App from './App.jsx'


const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <CartProvider> 
       <App />
    </CartProvider>
  </GoogleOAuthProvider>
  </StrictMode>,
)
