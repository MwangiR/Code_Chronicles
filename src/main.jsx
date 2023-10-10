// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import About from './pages/About';
import Profile from './pages/Profile';
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
        path: '/Profile',
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
