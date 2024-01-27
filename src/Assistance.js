// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SidebarButton from './SidebarButton';
import { fetchBalanceInLocaleCurrency } from './Api';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm'; // Importez le composant de formulaire de contact

// Importez la bibliothèque country-currency-map
import * as countryCurrencyMap from 'country-currency-map';
const opencage = require('opencage-api-client');


const Assistance = () => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const [balanceInLocaleCurrency, setBalanceInLocaleCurrency] = useState(0);
    const [curr, setCurrency] = useState(0);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeButton, setActiveButton] = useState('Dashboard');
    const [userLocation, setUserLocation] = useState(null);
// ...
    const [notifications, setNotifications] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                if ("geolocation" in navigator) {
                    const position = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                    });

                    const { latitude, longitude } = position.coords;

                    const locationResponse = await opencage.geocode({ q: `${latitude},${longitude}`, key: 'dbc5e26b183544fcba8f87ef4268b049' });

                    if (locationResponse && locationResponse.results && locationResponse.results.length > 0) {
                        const country = locationResponse.results[0].components.country;

                        // Utilisez la fonction API
                        try {
                            const balanceResponse = await fetchBalanceInLocaleCurrency(iduser, await getTargetCurrency(country));
                            const balance = balanceResponse.data;
                            setBalanceInLocaleCurrency(balance);
                        } catch (balanceError) {
                            console.error('Erreur lors de la récupération du solde :', balanceError);
                            // Ajoutez cette ligne pour loguer les détails de l'erreur
                            console.error('Détails de l\'erreur :', balanceError.response);

                        }
                    } else {
                        console.error('Aucun résultat trouvé pour les coordonnées.');
                    }
                } else {
                    console.warn("La géolocalisation n'est pas prise en charge par ce navigateur.");
                }
            } catch (error) {
                console.error('Erreur lors de la récupération de la localisation :', error);
            }
        };

        fetchData();
    }, [iduser]);

    const getTargetCurrency = async location => {
        try {
            const response = await opencage.geocode({ q: location, key: 'dbc5e26b183544fcba8f87ef4268b049' });
            const firstResult = response.results[0];

            console.log('firstResult:', firstResult); // Examinez la structure de l'objet

            if (firstResult) {
                const currencyCode = firstResult.annotations.currency.iso_code;
                setCurrency(currencyCode);
                console.log('currencyCode:', currencyCode); // Examinez la structure de l'objet

                return currencyCode || 'USD';
            } else {
                console.error('Aucun résultat trouvé pour la localisation :', location);
                return 'USD'; // Utilisez USD par défaut en cas de problème
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des informations de localisation :', error);
            return 'USD'; // Utilisez USD par défaut en cas d'erreur
        }
    };




        const handleButtonClick = (label) => {
            setActiveButton(label);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (label === 'Assistance') {
                console.log('iduser:', iduser);
                // Redirection vers la route avec l'id utilisateur
                navigate(`/assistance/${iduser}`);
            }
            if (label === 'Dashboard') {
                console.log('iduser:', iduser);
                // Redirection vers la route avec l'id utilisateur
                navigate(`/Home/${iduser}`);
            }
            // Add specific code to execute when the button is clicked
        };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="App">
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF'}}>

                <div style={{width: 220, height: 736, left: 16, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} />
                {/*<div style={{width: 1220, height: 100, left: 260, top: 80, position: 'absolute', background: 'black', borderRadius: 16}} >*/}
                {/*    <div style={{background: 'red',fontFamily: "math",fontWeight: 900,fontSize: "large"}}><p>Balance in Local Currency <br/> <br/>  {balanceInLocaleCurrency}{curr}</p> </div>*/}
                {/*</div>*/}
                {/*<div style={{width: , height: 100, left: 260, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >*/}
                {/*    /!*<div><span style={{color: '#111111', fontSize: 24, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 32, wordWrap: 'break-word'}}>Welcome, [Name]!</span><span style={{color: '#111111', fontSize: 24, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}> <br/></span><span style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'>Explore influential opportunities by participating in exciting surveys. Your opinion matters!</span></div>*!/*/}
                {/*</div>*/}
                <div style={{width: 1220, height: 736, left: 260, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    {/* Intégrez le formulaire de contact ici */}
                    <ContactForm />
                </div>
                <div style={{width: 126, height: 37, left: 24, top: 22, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    {/* Logo */}
                    <img src={process.env.PUBLIC_URL + '/logotale.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{padding: 8, left: 1376, top: 20, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <img src={process.env.PUBLIC_URL + '/image6.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
                <div style={{padding: 8, left: 1328, top: 16, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                    <div style={{width: 24, height: 24, paddingLeft: 2, paddingRight: 2, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <img src={process.env.PUBLIC_URL + '/mail.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
                <div style={{ left: 24, top: 88, position: 'absolute', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'inline-flex' }}>
                    <SidebarButton label="Dashboard" icon="ic.png" active={activeButton === 'Dashboard'} onClick={() => handleButtonClick('Dashboard')} />
                    <SidebarButton label="Surveys" icon="image12.png" active={activeButton === 'Surveys'} onClick={() => handleButtonClick('Surveys')} />
                    <SidebarButton label="Focus group" icon="image13.png" active={activeButton === 'Focus group'} onClick={() => handleButtonClick('Focus group')} />
                    <SidebarButton label="Awards" icon="image14.png" active={activeButton === 'Awards'} onClick={() => handleButtonClick('Awards')} />
                </div>
                <div style={{ width: 200, paddingTop: 8, paddingBottom: 8, paddingLeft: 0, left: 24, top: 677, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <SidebarButton label="Assistance" icon="image14.png" active={activeButton === 'Assistance'} onClick={() => handleButtonClick('Assistance')} />
                </div>
                <div style={{ width: 200, paddingTop: 8, paddingBottom: 8, paddingLeft: 0, left: 24, top: 717, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <SidebarButton label="Logout" icon="image14.png" active={activeButton === 'Logout'} onClick={() => handleButtonClick('Logout')} />
                </div>

                <div style={{width: 48, height: 48, left: 1430, top: 16, position: 'absolute', boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)', borderRadius: 9999}}>
                    <img src={process.env.PUBLIC_URL + '/image9.png'} alt="" style={{ position: 'absolute',width: '157%',height: '157%',left: '-14px',top: '-10px'}} />
                </div>
                <div style={{width: 17, height: 17, left: 1461, top: 47, position: 'absolute', background: '#151515', borderRadius: 9999, border: '1px #F2F2F2 solid'}} />
                <div style={{width: 15, height: 15, left: 1462, top: 48, position: 'absolute'}}>
                    <div style={{width: 6.25, height: 3.12, left: 4.38, top: 6.25, position: 'absolute', border: '1.33px white solid'}}></div>
                </div>
                <div style={{width: 48, height: 48, left: 260, top: 16, position: 'absolute', background: 'rgba(255, 255, 255, 0.70)', borderRadius: 9999}} />
                <div style={{ width: 32, height: 32, left: 268, top: 24, position: 'absolute', cursor: 'pointer' }} onClick={toggleSidebar}>
                    <img src={process.env.PUBLIC_URL + '/nav.png'} alt="" style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
        </div>
    );
};

export default Assistance;
