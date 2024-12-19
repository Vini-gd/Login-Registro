import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppCadastro from './AppCadastro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCadastro />
  </StrictMode>,
)
