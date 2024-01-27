import React, { useState } from 'react';
import ReactQuill from 'react-quill';  // Importez le composant de l'éditeur de texte enrichi
import 'react-quill/dist/quill.snow.css';  // Importez les styles de l'éditeur de texte enrichi
import countryCallingCode from 'country-calling-code'; // Importer le module pour les codes de pays

const QuickSurveyEmpty = () => {

    return (
        <div className="App1">
            <div style={{width: 275, height: 141, left: 288, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s1.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 275, height: 141, left: 288, top: 851, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s5.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 275, height: 141, left: 288, top: 1008, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s9.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 275, height: 141, left: 872, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s3.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 275, height: 141, left: 872, top: 851, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s7.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 275, height: 141, left: 580, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s2.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 275, height: 141, left: 580, top: 851, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s6.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 275, height: 141, left: 580, top: 1008, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s10.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 275, height: 141, left: 1164, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s4.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{width: 275, height: 141, left: 1164, top: 851, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} >
                <img src={process.env.PUBLIC_URL + '/s8.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
            </div>
    <div style={{width: 216, height: 54, left: 320, top: 765, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Household Consumption<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
    <div style={{width: 216, height: 54, left: 320, top: 922, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Leisure and Interests<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
    <div style={{width: 216, height: 54, left: 320, top: 1079, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Education<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
    <div style={{width: 216, height: 54, left: 906, top: 765, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Automobile<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
    <div style={{width: 216, height: 54, left: 906, top: 922, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Consumer Foods and Beverages<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
    <div style={{width: 216, height: 54, left: 615, top: 765, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Occupation<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
    <div style={{width: 216, height: 54, left: 615, top: 922, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Video Games and Computer Games<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
    <div style={{width: 216, height: 54, left: 615, top: 1079, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Consumer health<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
    <div style={{width: 216, height: 54, left: 1195, top: 765, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Mass Tourism<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
    <div style={{width: 216, height: 54, left: 1195, top: 922, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Multimedia<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 300, top: 702, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 300, top: 859, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 300, top: 1016, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 590, top: 702, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 590, top: 859, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 590, top: 1016, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 885, top: 702, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 885, top: 859, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1180, top: 702, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1180, top: 859, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
    </div>
        </div>
    );
};

export default QuickSurveyEmpty;
