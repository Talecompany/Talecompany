import React from 'react'

import checkBox from '../assets/images/Checkbox.png';
import facebook from '../assets/images/facebook.png';
import gmail from '../assets/images/gmail.png';
import twitter from '../assets/images/twitter.png';
import linkedIn from '../assets/images/linkedIn.png';




import RightBackground from './RightBackground';



function CreateAccount() {
    return (
        <div className="rightSide">
            <text className="createAccount">Create Account</text>
            
            <div className="icons">
                <span>
                    <a href="https://www.facebook.com">
                        <img src={facebook} className="fb" alt="Facebook" />
                    </a>
                </span>
                <span>
                    <a href="https://www.gmail.com">
                        <img src={gmail} className="gmail" alt="Gmail" />
                    </a>
                </span>
                <span>
                    <a href="https://www.twitter.com">
                        <img src={twitter} className="x" alt="X" />
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com">
                        <img src={linkedIn} className="linkedIn" alt="Linkedin" />
                    </a>
                </span>
            </div>

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
            <RightBackground/>
        </div>
    )
}

export default CreateAccount;
