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
<<<<<<< HEAD
import Awards from "./pages/Dashboard/Assistance-Register&accountmanagement";
import Assistance from "./pages/Dashboard/Assistance";


=======
import Awards from "./pages/Dashboard/Awards";
import Assistance from "./pages/Dashboard/Assistance";
>>>>>>> origin/FrontEnd-Chadi
import SurveyDetail from "./pages/Dashboard/SurveyDetail";
import Datasecurity from "./pages/Dashboard/Datasecurity";
import DashboardSurvery40 from "./pages/Dashboard/Tale-4-Dashboard-1-Survery-40";
import DashboardSurvery50 from "./pages/Dashboard/Tale-4-Dashboard-1-Surveys-1-50";
import DashboardSurvery60 from "./pages/Dashboard/Tale-4-Dashboard-1-Survery60";
import DashboardSurvery70 from '././pages/Dashboard/Tale-4-Dashboard-1-Survery70';
import DashboardSurveryDetail from '././pages/Dashboard/Tale-4-Dashboard-SurveryDetail';
import DashboardSurvery30 from './pages/Dashboard/Tale-4-Dashboard-1-Survery-30';
import DashboardSurvery10 from './pages/Dashboard/Tale-4-Dashboard-1-Survery-10';
import DashboardSurvery80 from './pages/Dashboard/Tale-4-Dashboard-1-Survery80';
import DashboardSurvery20 from './pages/Dashboard/Tale-4-Dashboard-1-Survery20';
import DashboardSurvery90 from './pages/Dashboard/Tale-4-Dashboard-1-Survery90';
import DashboardSurvery901 from './pages/Dashboard/Tale-4-Dashboard-1-Survery90-1';
import DashboardSurvery902 from './pages/Dashboard/Tale-4-Dashboard-1-Survery90-2';
import DashboardSurvery903 from './pages/Dashboard/Tale-4-Dashboard-1-Survery90-3';
import DashboardSurvery904 from './pages/Dashboard/Tale-4-Dashboard-1-Survery90-4';
import DashboardSurvery905 from './pages/Dashboard/Tale-4-Dashboard-1-Survery90-5';
import DashboardSurvery906 from './pages/Dashboard/Tale-4-Dashboard-1-Survery906';
import DashboardSurvery907 from './pages/Dashboard/Tale-4-Dashboard-1-Survery907';
import DashboardSurvery908 from  './pages/Dashboard/Tale-4-Dashboard-1-Survery908';
import Focusgroupdetails from './pages/Dashboard/Focusgroupdetails';
import LanguagePage from    "./pages/Dashboard/LanguagePage";
import OpinionSurvey from './pages/Dashboard/OpinionSurvey';
import OneanswerSurv from './pages/Dashboard/OneanswerSurv';
import EarnsPage from './pages/Dashboard/EarnsPage';
import Verylikely from './pages/Dashboard/Verylikely';
import EmojiComponent from './components/Emoji';
import DashboardSurvery101 from './pages/Dashboard/Tale-4-Dashboard-1-Survery-10-1';
import DashboardSurvery909 from  './pages/Dashboard/Tale-4-Dashboard-1-Survery909';
import DashboardSurvery9090 from  './pages/Dashboard/Tale-4-Dashboard-1-Survery90-9';
import Jitci from './pages/Dashboard/jitci';
import PointsDashboard from './pages/Points/PointsDashboard';
import PhoneRecharge from './pages/Points/PhoneRecharges';
import CouponRecharge from './pages/Points/RechargeCoupons';
<<<<<<< HEAD
import LiveSurvey from "./pages/Dashboard/LiveSurvey";
import VerylikelyVierge from "./pages/Dashboard/VerylikelyVierge";
import LiveSurvey1 from "./pages/Dashboard/LiveSurvey1";
import AssistanceRegisterAccountmanagement from "./pages/Dashboard/Assistance-Register&accountmanagement";
import Headcomponent from "./pages/Dashboard/Headcomponent";
import Policy from "./pages/Dashboard/Policy";
import Changepwd from "./pages/Dashboard/Changepwd";
import Assistancechangepwd from "./pages/Dashboard/Assistancechangepwd";
import AssistanceO from './pages/Dashboard/AssistanceO';
=======
>>>>>>> origin/FrontEnd-Chadi
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
  {path: "/dashboard40", element: <DashboardSurvery40 />,
  },
  {path: "/dashboard50", element: <DashboardSurvery50 />,
},
{path: "/dashboard60", element: <DashboardSurvery60 />,
},
{path: "/dashboard70", element: <DashboardSurvery70 />, 
},
{path: "/DashboardSurveryDetail", element: <DashboardSurveryDetail />,
},
{path: "/dashboard30", element: <DashboardSurvery30 />,
},
{path: "/dashboard10", element: <DashboardSurvery10 />,
},
{path: "/dashboard20", element: <DashboardSurvery20 />,
},
{path: "/dashboard80", element: <DashboardSurvery80 />,
},
{path: "/dashboard90", element: <DashboardSurvery90 />,
},
{path: "/dashboard901", element: <DashboardSurvery901 />,
},
{path: "/dashboard902", element: <DashboardSurvery902 />,
},
{path: "/dashboard903", element: <DashboardSurvery903 />,
},
{path: "/dashboard904", element: <DashboardSurvery904 />,
},
{path: "/dashboard905", element: <DashboardSurvery905 />,
},
{path: "/dashboard906", element: <DashboardSurvery906 />,
},
{path: "/dashboard907", element: <DashboardSurvery907 />,
},
{path: "/dashboard908", element: <DashboardSurvery908 />,
},
{path: "/dashboard9090", element: <DashboardSurvery9090 />,
},
{path:"/surveydetails/:iduser", element: <SurveyDetail />,},
{ path: "/dataverification/:iduser", element: <Datasecurity /> },
{ path: "/focusgroup/:iduser", element: <Focusgroup /> },
{ path: "/awards/:iduser", element: <Awards /> },
{ path: "/focusgroupdetails/:iduser", element: <Focusgroupdetails /> },
{ path: "/language/:iduser", element: <LanguagePage /> },
{ path: "/opinionsurvey/:iduser", element: <OpinionSurvey /> },
{ path: "/generallyspeaking/:iduser", element: <OneanswerSurv /> },
{ path: "/endsurvey/:iduser", element: <EarnsPage /> },
{ path: "/very/:iduser", element: <Verylikely /> },
{ path: "/DashboardSurvery101", element: <DashboardSurvery101 /> },
{ path: "/Dashboard909", element: <DashboardSurvery909 /> },
{ path: "/jitci", element: <Jitci /> },
{ path: "/Points/:iduser", element: <PointsDashboard /> },
{ path: "/PhoneRecharge/:iduser", element: <PhoneRecharge /> },
{ path: "/CouponRecharge/:iduser", element: <CouponRecharge /> },
<<<<<<< HEAD
{path:"/accountpwd/:iduser", element: <Assistancechangepwd /> },
{path:"/account/:iduser", element: <Assistance /> },
{path:"/policy/:iduser", element: <Policy />},

{path:"/assistancevid/:iduser", element: <AssistanceRegisterAccountmanagement />},
{path:"/livesurvey1/:iduser", element: <LiveSurvey1 />},
{path:"/livesurvey/:iduser", element: <LiveSurvey />},
{path:"/very/:iduser", element: <VerylikelyVierge />},

{path:"/endsurvey/:iduser", element: <EarnsPage />},
{path:"/AssistanceO/:iduser", element: <AssistanceO/>},





=======
>>>>>>> origin/FrontEnd-Chadi
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <RouterProvider router={routes} />
  </UserProvider>
);

reportWebVitals();
