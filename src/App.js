import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Assistance from "./Assistance";
import HomeFull from "./HomeFull";
import HomeFulltest from "./HomeFulltest";
import Surveys from "./Surveys";
import Dashboard from "./Dashboard";
import SurveyDetail from "./SurveyDetail";
import Datasecurity from "./Datasecurity";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home/:iduser" element={<HomeFull />} />
                <Route path="/surveys/:iduser" element={<Surveys/>} />
                <Route path="/assistance/:iduser" element={<Assistance />} />
                <Route path="/surveydetails/:iduser" element={<SurveyDetail />} />
                <Route path="/dataverification/:iduser" element={<Datasecurity />} />
            </Routes>
        </Router>
    );
}

export default App;
