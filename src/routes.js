import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const LoginOne = React.lazy(
    () => import("src\Pages\login\LoginOne.jsx"),
);
const ForgotPasswordOne = React.lazy(
    () => import("src/pages/forgotPassword/ForgotPasswordOne"),
);
const ForgotPasswordTwo = React.lazy(
    () => import("src/pages/forgotPassword/ForgotPasswordTwo"),
);
const ForgotPasswordThree = React.lazy(
    () => import("src/pages/forgotPassword/ForgotPasswordThree"),
);
const Register = React.lazy(
    () => import("src/pages/Register")
)


const ProjectRoutes = () => {

    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/login"
                        element={<LoginOne />}
                    />
                    <Route
                        path="/ForgotPasswordOne"
                        element={<ForgotPasswordOne />}
                    />
                    <Route
                        path="/ForgotPasswordTwo"
                        element={<ForgotPasswordTwo />}
                    />
                    <Route
                        path="/ForgotPasswordThree"
                        element={<ForgotPasswordThree />}
                    />
                    <Route
                        path="/register"
                        element={<Register />}
                    />

                </Routes>




            </Router>
        </React.Suspense>
    );
};
export default ProjectRoutes;