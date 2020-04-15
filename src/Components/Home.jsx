import React from "react";
import FlashCard from "./FlashCard/FlashCard";

class Home extends React.Component {
    constructor(props){
        super(props)
            this.state = {
            qnaArr : [
            {   
                Id: 1,
                Question: "How are you?",
                Answer: "Fine, thank you!"
            },
            {
                Id: 2,
                Question: "Are we there yet?",
                Answer: "Close, but not yet!"
            },
            {
                Id: 3,
                Question: "Are you happy?",
                Answer: "Yes, always!"
            }
        ],
        cardDeckList: []

        }
    }

    componentDidMount() {
        const cardDeckList = this.state.qnaArr.map(this.mapCards);
        this.setState({
            cardDeckList
        })
    }

    mapCards = qna => (
        <FlashCard 
            data={qna}
        /> 
    )

    addCard = () => {
        console.log(this.state.cardDeck);
    }

    goToLogIn = () => {
        console.log(this.props.history.push("/about"))
    }

render(){

    return(
        <main>
        <section className="container">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam facilis voluptatibus eveniet nostrum at dolor cupiditate, quo blanditiis saepe sed voluptas a, itaque esse. Id commodi expedita rerum saepe nulla. 
               Oooooo ipsum dolor sit amet consectetur adipisicing elit. Neque quas, tempora numquam eaque a odio dolores nisi error commodi molestiae.
               <div className="">
               <div className="m-3 btn btn-success" onClick={this.addCard}>New Deck</div> 
               <div className="m-3 btn btn-info" onClick={this.goToLogIn}>Log in</div>
               </div> 
        </section> 
        <div>{this.state.cardDeckList}</div>
        </main>
    )
}
}

export default Home;