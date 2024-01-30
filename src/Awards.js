// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
const opencage = require('opencage-api-client');


const Awards = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);



    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <Header/>
                <div style={{width: 1220, height: 736, left: 260, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                </div>
            </div>
        </div>
    );
};

export default Awards;
