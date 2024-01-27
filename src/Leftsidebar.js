import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import SidebarButton from "./SidebarButton";
import SidebarButtonHide from "./SidebarButtonHide";
import HomeFull from "./HomeFull";

const Leftsidebar = ({ sidebarVisible, toggleSidebar }) => {
    const navigate = useNavigate();
    const { iduser } = useParams();
     // const[sidebarVisible, setSidebarVisible] = useState(true);
    const [activeButton, setActiveButton] = useState('Dashboard');

    const handleButtonClick = (label) => {
        setActiveButton(label);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        if (label === 'Assistance') {
            console.log('iduser:', iduser);
            // Redirection vers la route avec l'id utilisateur
            navigate(`/assistance/${iduser}`);
        }
        if (label === 'Surveys') {
            console.log('iduser:', iduser);
            // Redirection vers la route avec l'id utilisateur
            navigate(`/Surveys/${iduser}`);
        }
        // Add specific code to execute when the button is clicked
    };

    //  toggleSidebar = () => {
    //     setSidebarVisible(!sidebarVisible);
    // };
    const bodyLeftPosition = sidebarVisible ? 260 : 73; // Adjust the left position based on sidebar visibility

    return (
        <div>
            <div style={{width: 126, height: 37, left: 24, top: 22, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                {/* Logo */}
                <img src={process.env.PUBLIC_URL + '/logotale.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 48, height: 48, left: 260, top: 16, position: 'absolute', background: 'rgba(255, 255, 255, 0.70)', borderRadius: 9999}} />
            <div style={{ width: 32, height: 32, left: 268, top: 24, position: 'absolute', cursor: 'pointer' }} onClick={toggleSidebar}>
                <img src={process.env.PUBLIC_URL + '/nav.png'} alt="" style={{ width: '100%', height: '100%' }} />
            </div>

            {sidebarVisible ? (
                // Regular SidebarButton when sidebar is visible
                <div style={{width: 220, height: 736, left: 16, top: 80, position: 'absolute', background: 'white', borderRadius: 16}}/>
            ) : (
                // SidebarButtonHide when sidebar is hidden
                <div style={{width: 57, height: 736, left: 16, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} />
            )}

            {sidebarVisible ? (
                // Regular SidebarButton when sidebar is visible
                <div style={{ left: 24, top: 88, position: 'absolute', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'inline-flex' }}>
                    <SidebarButton label="Dashboard" icon="image3.png" active={activeButton === 'Dashboard'} onClick={() => handleButtonClick('Dashboard')} />
                    <SidebarButton label="Surveys" icon="image12.png" active={activeButton === 'Surveys'} onClick={() => handleButtonClick('Surveys')} />
                    <SidebarButton label="Focus group" icon="image13.png" active={activeButton === 'Focus group'} onClick={() => handleButtonClick('Focus group')} />
                    <SidebarButton label="Awards" icon="image14.png" active={activeButton === 'Awards'} onClick={() => handleButtonClick('Awards')} />
                </div>
            ) : (
                // SidebarButtonHide when sidebar is hidden
                <div style={{ left: 24, top: 88, position: 'absolute', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'inline-flex' }}>
                    <SidebarButtonHide label="Dashboard" icon="image3.png" active={activeButton === 'Dashboard'} onClick={() => handleButtonClick('Dashboard')} />
                    <SidebarButtonHide label="Surveys" icon="image12.png" active={activeButton === 'Surveys'} onClick={() => handleButtonClick('Surveys')} />
                    <SidebarButtonHide label="Focus group" icon="image13.png" active={activeButton === 'Focus group'} onClick={() => handleButtonClick('Focus group')} />
                    <SidebarButtonHide label="Awards" icon="image14.png" active={activeButton === 'Awards'} onClick={() => handleButtonClick('Awards')} />
                </div>            )}

            {sidebarVisible ? (
                // Regular SidebarButton when sidebar is visible
                <div style={{ width: 200, paddingTop: 8, paddingBottom: 8, paddingLeft: 0, left: 24, top: 677, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <SidebarButton label="Assistance" icon="assistance.png" active={activeButton === 'Assistance'} onClick={() => handleButtonClick('Assistance')} />
                </div>
            ) : (
                // SidebarButtonHide when sidebar is hidden
                <div style={{ width: 200, paddingTop: 8, paddingBottom: 8, paddingLeft: 0, left: 24, top: 677, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <SidebarButtonHide label="Assistance" icon="assistance.png" active={activeButton === 'Assistance'} onClick={() => handleButtonClick('Assistance')} />
                </div>
            )}
            {sidebarVisible ? (
                // Regular SidebarButton when sidebar is visible
                <div style={{ width: 200, paddingTop: 8, paddingBottom: 8, paddingLeft: 0, left: 24, top: 717, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <SidebarButton label="Logout" icon="logout.png" active={activeButton === 'Logout'} onClick={() => handleButtonClick('Logout')} />
                </div>
            ) : (
                // SidebarButtonHide when sidebar is hidden
                <div style={{ width: 200, paddingTop: 8, paddingBottom: 8, paddingLeft: 0, left: 24, top: 717, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <SidebarButtonHide label="Logout" icon="logout.png" active={activeButton === 'Logout'} onClick={() => handleButtonClick('Logout')} />
                </div>
            )}
            {sidebarVisible ? (
                // Regular SidebarButton when sidebar is visible
                <div style={{width: 218, height: 0, left: 236, top: 770, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}>
                </div>
                ) : (
                // SidebarButtonHide when sidebar is hidden
                <div style={{width: 55, height: 0, left: 73, top: 770, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}>
                </div>
            )}
            {sidebarVisible ? (
                // Regular SidebarButton when sidebar is visible
                <div style={{width: 175, height: 35, left: 40, top: 790, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>©2024 Tale. All rights reserved.<br/><br/></div>
            ) : (
                // SidebarButtonHide when sidebar is hidden
                <div style={{width: 50, height: 35, left: 20, top: 780, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>©2024 Tale.<br/><br/></div>
            )}

            {/*/!* Pass the sidebarVisible state to the BodyComponent *!/*/}
            {/*<div style={{ left: bodyLeftPosition, top: 16, position: 'absolute', background: 'white', borderRadius: 16, padding: 16 }}>*/}
            {/*    <HomeFull/>*/}
            {/*</div>*/}

        </div>
    );
};

export default Leftsidebar; // Make sure to export the component properly
