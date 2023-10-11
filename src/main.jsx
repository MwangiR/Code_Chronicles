import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import 'antd/dist/reset.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
