import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import LoginOne from './pages/login/LoginOne';
import Notfound from './pages/Notfound';
import ForgotPasswordOne from './pages/forgotPassword/ForgotPasswordOne';
import ForgotPasswordTwo from './pages/forgotPassword/ForgotPasswordTwo';
import ForgotPasswordThree from './pages/forgotPassword/ForgotPasswordThree';
import { UserProvider } from './pages/forgotPassword/UserContext';

const routes = createBrowserRouter([
  {
    path: "/register", element: <Register />,
  },
  {
    path: "/*", element: <Notfound />,
  },
  {
    path: "/login", element: <LoginOne />,
  },
  {
    path: "/ForgotPasswordOne", element: <ForgotPasswordOne />,
  },
  {
    path: "/ForgotPasswordTwo", element: <ForgotPasswordTwo />,
  },
  {
    path: "/ForgotPasswordThree", element: <ForgotPasswordThree />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <RouterProvider router={routes} />
  </UserProvider>
);

reportWebVitals();
