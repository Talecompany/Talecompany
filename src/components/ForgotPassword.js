import React from 'react'
import LeftBackground from './LeftBackground'

import '../styles/forgotPassword.css'

function ForgotPassword() {
    return (
        <div className='forgotPassword'>
            <text className="forgotPasswordTitle">Forgot Password</text>
            <text className="forgotPasswordInfo">Kindly provide the email address linked to your account. We will send you instructions via email on how to reset your password</text>
            <div className="forgotPasswordForm">
                <form>
                    <label className="email">Email Address</label>
                    <input className="emailPlaceholder" placeholder="Enter your Email address" type="email" required />
                </form>

            </div>
            
            <div>
            <text className="loginText">Remember Password? Login</text>

                <button className="sendEmailButton">Send Email</button>
            </div>



            <LeftBackground />
        </div>
    )
}

export default ForgotPassword