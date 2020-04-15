import React, {useState} from "react";   
import {Link} from "react-router-dom";
import "./TopNav.css"

const TopNav = () => {
      const [isOpen, setIsOpen] = useState(false);
      
      const toggleNav = () => setIsOpen(!isOpen)
      
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent p-3">
        <Link className={`text-decoration-none display-4 font-weight-bolder text-light mr-4`} to="/">Cardium</Link>  
                <button className="navbar-toggler " onClick={toggleNav} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div  className={`navbar-collapse ${!isOpen && "collapse" }` }  id="navbarNavAltMarkup" >
              <div className="navbar-nav">
                <Link  className={`MainLinkStyle mr-4 mt-4 ${isOpen && "text-center navItem"}`} to="/" >Home</Link>
                <Link  className={`MainLinkStyle mr-4 mt-4 ${isOpen && "text-center navItem"}`} to="/about" >About</Link>
                <Link  className={`MainLinkStyle mr-4 mt-4 ${isOpen && "text-center navItem"}`} to="/contact-us" >Contact Us</Link>
                <Link  className={`MainLinkStyle mr-4 mt-4 ${isOpen && "text-center navItem"}`} to="/login" >Log-in</Link>
                <Link  className={`MainLinkStyle mr-4 mt-4 ${isOpen && "text-center navItem"}`} to="/register" >Register</Link>
          </div>
        </div>
      </nav> 
        )
    } 

export default TopNav; 