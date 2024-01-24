import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Assistance from "./Assistance";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home/:iduser" element={<Home />} />
                <Route path="/assistance/:iduser" element={<Assistance />} />
            </Routes>
        </Router>
    );
}

export default App;
