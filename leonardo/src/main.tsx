
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import React from 'react'
import './index.css';
import SessionProvider from './context/sessionProvider';

const router = createRouter({ routeTree })


declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <SessionProvider>
      <RouterProvider router={router} />
      </SessionProvider>
  </React.StrictMode>
  )
}
