import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex py-4 gap-4 justify-center items-center min-h-screen antialiased font-[inter] text-white/70 bg-[url('@/assets/images/background.svg')] bg-cover bg-no-repeat selection:bg-fuchsia-200 selection:text-fuchsia-950">
      <App />
    </div>
  </React.StrictMode>,
)
