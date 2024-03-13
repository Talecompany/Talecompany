import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
    // Logique pour afficher la barre de notifications
    return (
        <div style={{ width: 200, position: 'absolute', top: '60px', left: 1530, boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)', background: 'white', padding: '0px', borderRadius: '8px', zIndex: 1 }}>
            {/* Contenu de la barre de notifications */}
            <p style={{ ...textStyle, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', color: 'white', padding: '6px' }}>Notifications</p>
            <hr style={{ height: '1px', border: 'none', color: '#ccc', backgroundColor: '#ccc', margin: '4px 0' }} />

            {/* Notifications */}
            <div style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ ...textStyle, fontWeight: 'bold', flex: '1' }}>Nouvelle notification</p>
                    <p style={{ ...textStyle, fontSize: '12px', color: '#FFD700', marginLeft: '8px', marginRight:5}}>27/01</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ ...textStyle, fontWeight: 'bold', flex: '1' }}>Autre notification</p>
                <p style={{ ...textStyle, fontSize: '12px', color: '#FFD700', marginLeft: '8px', marginRight:5}}>26/01</p>
            </div>
        </div>
    );
};




// Composant de la barre utilisateur
const UserMenu = ({ activeButton, setActiveButton }) => {
    // Logique pour afficher le menu utilisateur
    return (
        <div style={{ width: 293, position: 'absolute', top: '60px', left: 1670, boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)', background: 'white', padding: '4px', borderRadius: '8px', zIndex:1}}>
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
                    <img src={process.env.PUBLIC_URL + '/image6.png'} alt="notif" style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
            {showNotifications && <NotificationBar />}

            {/* Bouton de messagerie */}
            {/* Bouton de messagerie */}
                <div style={{ padding: 8, left: 1608, top: 16, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
                <Link to={`/Talebot1/${iduser}`}>
                  <div style={{ width: 24, height: 24, paddingLeft: 2, paddingRight: 2, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', display: 'flex'}} >
                     <img src={process.env.PUBLIC_URL + '/mail.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                  </div>
                  </Link>
                {/* Ajoutez un bouton pour afficher le chatbot */}
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
