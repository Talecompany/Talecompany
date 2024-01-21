import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Notfound from './Pages/Notfound';
import Dashboard from './Pages/Dashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: "/login", element: <Login />,
  },
  {
    path: "/register", element: <Register />,
  },
  {
    path: "/dashboard", element: <Dashboard />,
  },
  {
    path: "/*", element: <Notfound />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />);



reportWebVitals();
