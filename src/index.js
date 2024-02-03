import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Register from './Pages/Register';
import Notfound from './Pages/Notfound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginOne from './Pages/login/LoginOne';
import ForgotPasswordTwo from './Pages/forgotPassword/ForgotPasswordTwo';
import ForgotPasswordThree from './Pages/forgotPassword/ForgotPasswordThree';
import ForgotPasswordOne from './Pages/forgotPassword/ForgotPasswordOne';

const routes = createBrowserRouter([

  {
    path: "/register", element: <Register />,
  },
  {
    path: "/*", element: <Notfound />,
  },
  {
    path: "/login", element: <LoginOne />,
  }
  ,
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
  <RouterProvider router={routes} />);



reportWebVitals();
