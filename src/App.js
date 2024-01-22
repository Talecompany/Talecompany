import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home/:iduser" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
