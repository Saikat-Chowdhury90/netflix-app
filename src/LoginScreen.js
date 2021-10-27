import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen.js'
import logo from './images/logo.png';
function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="loginscreen">
            <div className="loginscreen__background">
                    <img className="loginscreen__logo" src={logo} alt="" />
                    <button onClick={() => setSignIn(true)} className="loginscreen__button">
                        Sign in
                    </button>
                    <div className="loginscree__gradient" />
            </div>
            <div className="loginscreen__body">
                {signIn ? (
                    <SignupScreen />
                ) : (
                    <>
                   
                    <h1>Unlimited films , TV programes and more</h1>
                    
                    <h2>Watch anywhere. Cancel at any time</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginscreen__input">
                        <form>
                            <input type="email" placeholder="Email Address" />
                            <button onClick={() => setSignIn(true)} className="loginscreen__getStarted">GET STARTED</button>
                        </form>
                    </div>
                </>
                )}
                
            </div>
            
    
 </div>
    )
}

export default LoginScreen
