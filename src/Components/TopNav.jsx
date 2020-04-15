import React from "react";   
import {Link} from "react-router-dom";
import "./TopNav.css"

class TopNav extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            isOpen:false
        }
    }
    
    toggleNav = () => {
      const currentState = this.state.isOpen;
      this.setState({isOpen:!currentState})
    }

    render(){ 
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-3">
        <Link className={`text-decoration-none font-weight-bolder text-dark mr-4`} to="/">Cardium</Link>  
        <button className="navbar-toggler " onClick={this.toggleNav} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div  className={`navbar-collapse ${!this.state.isOpen && "collapse" }` }  id="navbarNavAltMarkup" >
              <div className="navbar-nav">
                <Link  className={`MainLinkStyle mr-4 ${this.state.isOpen && "text-center navItem"}`} to="/" >Home</Link>
                <Link  className={`MainLinkStyle mr-4 ${this.state.isOpen && "text-center navItem"}`} to="/about" >About</Link>
                <Link  className={`MainLinkStyle mr-4 ${this.state.isOpen && "text-center navItem"}`} to="/contact-us" >Contact Us</Link>
          </div>
        </div>
      </nav> 
        )
    }

}

export default TopNav; 