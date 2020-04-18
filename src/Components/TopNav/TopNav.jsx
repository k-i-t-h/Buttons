import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";
import "./TopNav.css"

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fade = useSpring({
    opacity: isOpen ? 1 : 0, transitionDuration: '250ms'
  })

  const toggleNav = () => setIsOpen(!isOpen)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent p-3">
      <Link className={`text-decoration-none logoText font-weight-bolder text-light mr-4`} to="/">Cardium</Link>
      <button className="navbar-toggler "
        onClick={toggleNav}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className={`navbar-collapse ${!isOpen && "collapse"}`} id="navbarNavAltMarkup">
        <a.div className="navbar-nav" style={isOpen ? fade : null}>
          <Link className={`MainLinkStyle mr-4 mt-1 ${window.innerWidth < '1000px' && isOpen ? "" : "text-center"}`}
            onClick={isOpen ? toggleNav : null}
            to="/" >Home</Link>
          <Link className={`MainLinkStyle mr-4 mt-1 ${window.innerWidth < '1000px' && isOpen ? "" : "text-center"}`}
            onClick={isOpen ? toggleNav : null}
            to="/about" >About</Link>
          <Link className={`MainLinkStyle mr-4 mt-1 ${window.innerWidth < '1000px' && isOpen ? "" : "text-center"}`}
            onClick={isOpen ? toggleNav : null}
            to="/card-deck" >Sample Deck</Link>
          <Link className={`MainLinkStyle mr-4 mt-1 ${window.innerWidth < '1000px' && isOpen ? "" : "text-center"}`}
            onClick={isOpen ? toggleNav : null}
            to="/contact-us" >Contact Us</Link>
        </a.div>
      </div>
    </nav>
  )
}

export default TopNav; 