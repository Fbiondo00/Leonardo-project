//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import App from './App';
//import './index.css';
//
//ReactDOM.createRoot(document.getElementById('root')!).render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import React from 'react'
import './index.css';

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
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}

