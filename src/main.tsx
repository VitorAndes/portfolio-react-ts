import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex gap-4 justify-center items-center min-h-screen antialiased text-[#ffb8b8] bg-[url('@/assets/images/background.svg')] bg-cover bg">
      <App />
    </div>
  </React.StrictMode>,
)
