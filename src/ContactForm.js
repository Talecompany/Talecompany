import React, { useState } from 'react';
import ReactQuill from 'react-quill';  // Importez le composant de l'éditeur de texte enrichi
import 'react-quill/dist/quill.snow.css';  // Importez les styles de l'éditeur de texte enrichi
import countryCallingCode from 'country-calling-code'; // Importer le module pour les codes de pays

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        numero: '',
        sujet: 'Deal',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleQuillChange = (value) => {
        setFormData((prevData) => ({ ...prevData, description: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulaire soumis avec les données :', formData);
        // Ajoutez ici le code pour soumettre le formulaire
    };

    // Fonction pour obtenir le préfixe du numéro en fonction du pays
// Fonction pour obtenir le préfixe du numéro en fonction du pays
    const getPrefixByCountry = (countryCode) => {
        const countryData = countryCallingCode.find((data) => data.alpha2 === countryCode);
        return countryData ? `+${countryData.callingCode}` : ''; // Ajouter le préfixe
    };


    return (
        <form onSubmit={handleSubmit} style={{ padding: 20 }}>
            <div style={{left: 90, top: 20, position: 'absolute', color: 'black', fontSize: 30, fontFamily: 'revert', fontWeight: '900', wordWrap: 'break-word'}}>Assistance Form</div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 80 }}>
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative'}}>
                    <label>
                        <div style={{left: 70, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>First Name</div>
                        <input tytype="text" name="nom" value={formData.nom} onChange={handleInputChange} style={{ border: 0, width: 400, height: 51, left: 70, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10 }} />
                        <div style={{left: 86, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Enter your First Name</div>
                    </label>
                </div>
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative'}}>
                    <label>
                        <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Last Name</div>
                        <input tytype="text" name="prenom" value={formData.prenom} onChange={handleInputChange} style={{ border: 0, width: 400, height: 51, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10 }} />
                        <div style={{left: 16, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Enter your Last Name</div>
                    </label>
                </div>

            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 140 }}>
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative'}}>
                    <label>
                        <div style={{left: 70, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Email Address</div>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={{ border: 0, width: 400, height: 51, left: 70, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10 }} />
                        <div style={{left: 86, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Enter your email address</div>
                    </label>
                </div>
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative'}}>
                    <label>
                        <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Number</div>
                        <input type="tel" name="numero" value={formData.numero} onChange={handleInputChange} style={{ border: 0, width: 400, height: 51, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10 }} />
                        <div style={{left: 16, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Enter your Number</div>
                        <span>{getPrefixByCountry('FR')}</span>
                    </label>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 140 }}>
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative'}}>
                <label>
                    <div style={{left: 70, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Sujet</div>
                <select name="sujet" value={formData.sujet} onChange={handleInputChange} style={{ border: 0, width: 400, height: 51, left: 70, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10  }}>
                    <option value="Deal">Deal</option>
                    <option value="interesting insights">Interesting Insights</option>
                    <option value="Reclamation">Reclamation</option>
                    <option value="other">Other</option>
                </select>
                </label>
                </div>
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative'}}>
            <label style={{ marginTop: 10 }}>
                <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Description</div>
                <ReactQuill value={formData.description} onChange={handleQuillChange} style={{border: 0, width: 400, height: 60, left: 0, top: 25, position: 'absolute', background: 'transparent', borderRadius: 0}}/>
            </label>
                </div>
            </div>
            <div style={{marginTop: 170}}>
                <button type="submit" style={{width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor: 'pointer', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word', border: 'none', padding: '10px 20px', borderRadius: 16, outline: 'none', transition: 'background-color 0.3s'}}>
                    Send
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
