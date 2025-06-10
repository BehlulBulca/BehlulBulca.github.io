import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n'; // i18next yapılandırması import edildi

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}> {/* App Suspense ile sarmalandı */}
      <App />
    </Suspense>
  </StrictMode>,
)
