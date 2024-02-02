import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const LoginOne = React.lazy(
    () => import("./pages/login/LoginOne"),
  );
const ForgotPasswordOne = React.lazy(
  () => import("./pages/forgotPassword/ForgotPasswordOne"),
);
const ForgotPasswordTwo = React.lazy(
  () => import("./pages/forgotPassword/ForgotPasswordTwo"),
);
const ForgotPasswordThree = React.lazy(
  () => import("./pages/forgotPassword/ForgotPasswordThree"),
);
const Register = React.lazy(
  () => import("./pages/Register")
)


const ProjectRoutes = () => {

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/LoginOne"
            element={<LoginOne/>}
          />
          <Route
            path="/ForgotPasswordOne"
            element={<ForgotPasswordOne/>}
          />
          <Route
            path="/ForgotPasswordTwo"
            element={<ForgotPasswordTwo />}
          />
          <Route
            path="/ForgotPasswordThree"
            element={<ForgotPasswordThree/>}
          />
          <Route
            path="/Register"
            element={<Register/>}
          />
          
        </Routes>

        

        
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;