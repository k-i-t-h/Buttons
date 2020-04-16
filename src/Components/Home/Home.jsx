import React from "react";
import "./Home.css";

class Home extends React.Component {
    constructor(props){
        super(props)
            this.state = { 
            }
    } 

    gotToDeck = () => {
        this.props.history.push(`/card-deck`);
    } 

render(){

    return(
        <div className="container overflow-scroll">
        <section className="mainQuotation font-weight-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam facilis voluptatibus eveniet nostrum at dolor cupiditate, quo blanditiis saepe sed voluptas a, itaque esse. Id commodi expedita rerum saepe nulla. 
               Oooooo ipsum dolor sit amet consectetur adipisicing elit. Neque quas, tempora numquam eaque a odio dolores nisi error commodi molestiae.
               <div align="center">
               <div className="mt-5 btn btn-warning btn-lg font-weight-bold" onClick={this.gotToDeck}>Sample Deck</div>
               </div> 
        </section>
        </div>
    )
}
}

export default Home;