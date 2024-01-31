import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Notfound from './Pages/Notfound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: "/login", element: <Login />,
  },
  {
    path: "/register", element: <Register />,
  },
  {
    path: "/*", element: <Notfound />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />);



reportWebVitals();
