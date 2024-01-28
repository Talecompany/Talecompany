// // App.js
// import React from 'react';
// import MoralContract from './MoralContract';
//
// const Datasecurity = () => {
//     const handleAccept = () => {
//         // Logic when the user accepts
//         // For example, save the acceptance status to local storage
//         localStorage.setItem('moralContractAccepted', 'true');
//         // You may also want to redirect the user or perform other actions
//         // depending on your application's requirements.
//     };
//
//     const handleDecline = () => {
//         // Logic when the user declines
//         // For example, you might redirect the user to a different page
//         window.location.href = '/home/:userid';
//         // Alternatively, you could display a message or take other actions.
//     };
//
//     return (
//         <div>
//             <MoralContract onAccept={handleAccept} onDecline={handleDecline} />
//         </div>
//     );
// };
//
// export default Datasecurity;
// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import MoralContract from './MoralContract';
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
const opencage = require('opencage-api-client');


const Datasecurity = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const handleAccept = () => {
        // Logic when the user accepts
        // For example, save the acceptance status to local storage
        localStorage.setItem('moralContractAccepted', 'true');
        // You may also want to redirect the user or perform other actions
        // depending on your application's requirements.
    };

    const handleDecline = () => {
        // Logic when the user declines
        // For example, you might redirect the user to a different page
        window.location.href =`/home/${iduser}`;
        // Alternatively, you could display a message or take other actions.
    };



    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <Header/>
                <div style={{width: 1220, height: 736, left: 260, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    {/* Intégrez le formulaire de contact ici */}
                    <MoralContract onAccept={handleAccept} onDecline={handleDecline} />
                </div>
            </div>
        </div>
    );
};

export default Datasecurity;
