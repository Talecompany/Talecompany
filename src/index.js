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
import HomeFull from "./pages/Dashboard/HomeFull";
import Surveys from "./pages/Dashboard/Surveys";
import Focusgroup from "./pages/Dashboard/Focusgroup";
import Awards from "./pages/Dashboard/Awards";
import Assistance from "./pages/Dashboard/Assistance";
import SurveyDetail from "./pages/Dashboard/SurveyDetail";
import Datasecurity from "./pages/Dashboard/Datasecurity";

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
  {
    path: "/home/:iduser", element: <HomeFull />,
  },
  {
    path: "/surveys/:iduser", element: <Surveys />,
  },
  {
    path: "/Focusgroup/:iduser", element: <Focusgroup />,
  },
  {
    path: "/Awards/:iduser", element: <Awards />,
  },
  {
    path: "/Assistance/:iduser", element: <Assistance />,
  }, {
    path: "/surveydetails/:iduser", element: <SurveyDetail />,
  }, {
    path: "/dataverification/:iduser", element: <Datasecurity />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <RouterProvider router={routes} />
  </UserProvider>
);

reportWebVitals();
