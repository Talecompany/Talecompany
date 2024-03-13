import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';

const buttonStyle = {
    width: 120,
    height: 30,
    marginBottom: 2,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 8,
    borderRadius: 10,
    border:0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    display: 'inline-flex',
    cursor: 'pointer',
    zIndex:1,
};

const activeButtonStyle = {
    background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
    color: 'white',
};

const textStyle = {
    fontSize: 14,
    fontFamily: 'revert',
    fontWeight: '600',
    wordWrap: 'break-word',
};

// Composant de la barre de notifications
const NotificationBar = () => {
    // Sample notifications data
    const notifications = [
        {
            title: "New Survey Available!",
            message: "You've been selected to participate in a new survey. Click here to share your valuable insights and earn points.",
            timestamp: "17 hours ago"
        },
        {
            title: "Reward Redeemed Successfully!",
            message: "Congratulations! Your points have been redeemed, and your chosen reward is on its way. Track your reward status in the Rewards History section.",
            timestamp: "18 hours ago"
        },
        {
            title: "Update Your Profile for More Opportunities.",
            message: "Enhance your survey experience by keeping your profile information up-to-date. Click here to review and update your profile now.",
            timestamp: "1 day ago"
        }
    ];

    return (
        <div style={{ width: 309, position: 'absolute', top: '60px', left: 1360, boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)', background: 'white', paddingRight: '25px', paddingBottom: '10px', paddingLeft: '10px', borderRadius: '8px', zIndex: 1 }}>
            <p style={{ color: '#111111', fontSize: 18, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', textAlign: "left" }}>Notifications</p>
            {/* Iterate over notifications and render each */}
            {notifications.map((notification, index) => (
                <div key={index} style={{ width: '100%', textAlign: "left", position: 'relative' }}>
                    {index === 0 &&<span style={{ color: '#00BDA9', fontSize: 12, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', textAlign: "left" }}>{notification.title}<br /></span>}
                    {index === 0 &&<span style={{ color: '#111111', fontSize: 12, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', textAlign: "left" }}>{notification.message}<br /></span>}
                    {index !== 0 &&<span style={{ color: '#666666', fontSize: 12, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', textAlign: "left" }}>{notification.title}<br /></span>}
                    {index !== 0 &&<span style={{ color: '#666666', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', textAlign: "left" }}>{notification.message}<br /></span>}

                    <span style={{ color: '#0016DE', fontSize: 10, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>{notification.timestamp}</span>
                    {/* Show blue point for the last notification */}
                    {index === 0 && <div style={{position: 'absolute', top: '50%', right: '-18px', transform: 'translateY(-50%)', width: 10, height: 10, background: '#243AFF', borderRadius: '9999px' }} />}
                </div>
            ))}
        </div>
    );
};


// Composant de la barre utilisateur
const UserMenu = ({ activeButton, setActiveButton }) => {
    // Logique pour afficher le menu utilisateur
    return (
        <div style={{ width: 120, position: 'absolute', top: '60px', left: 1670, boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)', background: 'white', padding: '4px', borderRadius: '8px', zIndex:1}}>
            {/* Options du menu utilisateur */}
            <button
                style={{ ...buttonStyle, ...(activeButton === 'Profil' && activeButtonStyle) }}
                onClick={() => setActiveButton('Profil')}
            >
                <p style={textStyle}>Profil</p>
            </button>
            <button
                style={{ ...buttonStyle, ...(activeButton === 'Settings' && activeButtonStyle) }}
                onClick={() => setActiveButton('Settings')}
            >
                <p style={textStyle}>Settings</p>
            </button>
            <button
                style={{ ...buttonStyle, ...(activeButton === 'About' && activeButtonStyle) }}
                onClick={() => setActiveButton('About')}
            >
                <p style={textStyle}>About</p>
            </button>
        </div>
    );
};

const Header = () => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [activeButton, setActiveButton] = useState(null); // Ajout de l'état activeButton

    // Fonction pour gérer l'affichage de la barre de notifications
    const handleNotificationClick = () => {
        setShowNotifications(!showNotifications);
        setShowUserMenu(false); // Masquer le menu utilisateur lors du clic sur les notifications
    };

    // Fonction pour gérer l'affichage du menu utilisateur
    const handleUserButtonClick = () => {
        setShowUserMenu(!showUserMenu);
        setShowNotifications(false); // Masquer les notifications lors du clic sur le menu utilisateur
    };

    return (
        <div>
            {/* Barre de notifications */}
            <div style={{ padding: 8, left: 1656, top: 20, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
                <div style={{ width: 24, height: 24, position: 'relative' }} onClick={handleNotificationClick}>
                    {!showNotifications &&<img src={process.env.PUBLIC_URL + '/image6.png'} alt="notif" style={{ width: 24, height: 24 }} />}
                    {showNotifications &&<img src={process.env.PUBLIC_URL + '/notifactif.png'} alt="notif" style={{ position:"relative",width: 40, height: 40,top: -9,left:-7 }} />}
                </div>
            </div>
            {showNotifications && <NotificationBar />}

            {/* Bouton de messagerie */}
            <div style={{ padding: 8, left: 1608, top: 16, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
                <div style={{ width: 24, height: 24, paddingLeft: 2, paddingRight: 2, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <img src={process.env.PUBLIC_URL + '/mail.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
            </div>

            {/* Menu utilisateur */}
            <div style={{ width: 48, height: 48, left: 1720, top: 16, position: 'absolute', boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)', borderRadius: 9999 }} onClick={handleUserButtonClick}>
                <img src={process.env.PUBLIC_URL + '/image9.png'} alt="user" style={{ position: 'absolute', width: '157%', height: '157%', left: '-14px', top: '-10px' }} />
            </div>
            {showUserMenu && <UserMenu activeButton={activeButton} setActiveButton={setActiveButton} />}

            {/* Indicateur de connexion */}
            <div style={{ width: 17, height: 17, left: 1751, top: 47, position: 'absolute', background: '#151515', borderRadius: 9999, border: '1px #F2F2F2 solid' }} />

            {/* Icône de connexion */}
            <div style={{ width: 15, height: 15, left: 1752, top: 48, position: 'absolute' }}>
                <img src={process.env.PUBLIC_URL + '/connecte.png'} style={{ width: 17, height: 18, left: 0, top: 0, position: 'absolute' }} />
            </div>
        </div>
    );
};

export default Header;
