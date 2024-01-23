import React from 'react'

import checkBox from '../assets/images/Checkbox.png';
import connectIcons from '../assets/images/connect.png';

import '../styles/createAccount.css';
import LeftBackground from './LeftBackground';



function CreateAccount() {
    return (
        <div className="rightSide">
            <text className="createAccount">Create Account</text>
            <img src={connectIcons} className="icons"></img>
            <text className="useEmailText">Or use your email account</text>
            <div className="subscribeForm">
                <form className="formCreateAccount">
                    <label className="email">Email Address</label>
                    <input className="emailPlaceholder" placeholder="Enter email" type="email" required />
                </form>
            </div>

            <div className="agreeText">
                <img src={checkBox} className="checkBox1"></img>
                <text className="terms">You agree to the Terms of Use and Privacy Notice.</text>
                <img src={checkBox} className="checkBox2"></img>
                <text className="info">By agreeing, you'll receive information and special offers about our products via email. You can unsubscribe from these emails at any time through the My Account page</text>
                <text className="signUpText">Don't have an account? Sign up</text>
            </div>

            <div>
                <button className="nextButton">Next</button>
            </div>
            <LeftBackground/>
        </div>
    )
}

export default CreateAccount;
