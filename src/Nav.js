import React, { useEffect, useState } from 'react';
import "./Nav.css";
import logo from './images/logo.png';
import avatar from './images/avatar.png'
import {useHistory} from "react-router-dom";
function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();
    const transitionnavBar = () => {
        if(window.scrollY > 100)
        {
            handleShow(true);
        }
        else{
            handleShow(false);
        }

    };

    useEffect(() => {
        window.addEventListener('scroll',transitionnavBar);
        return () => window.removeEventListener('scroll',transitionnavBar);
    }, [])
    return (
        <div className={`nav ${show && "nav-black"} `}>
            <div className="nav-contents">
                 <img onClick={() => history.push("/")} className='nav-logo' src={logo} alt="" />
                 <img onClick={() =>history.push("/profile")} className='nav-avatar' src={avatar} alt="" />
            </div>
            

        </div>
    )
}

export default Nav
