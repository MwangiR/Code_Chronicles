// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import About from './pages/About';
import Profile from './pages/Profile';
import Home from './pages/Home';
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
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Profile',
        element: <Profile />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
