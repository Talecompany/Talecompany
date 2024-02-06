// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
const opencage = require('opencage-api-client');


const Focusgroup = () => {
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
                <div style={{ textAlign:"left", width: 1400, height: 705, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16, padding:16}} >
                    <div><span style={{color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word'}}>Focus group</span><span style={{color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1.5, wordWrap: 'break-word'}}> <br/></span><span style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>Explore influential opportunities by participating in exciting surveys. Your opinion matters!</span></div>
                    <div style={{width: 55.06, height: 59, left: 600, top: 325, position: 'absolute'}}>
                        <img src={process.env.PUBLIC_URL + '/ss.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div style={{position:"relative", top:330,textAlign: 'center', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>There are no live shows for you at the moment</div>
                </div>
            </div>
        </div>
    );
};

export default Focusgroup;
