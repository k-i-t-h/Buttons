import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlashCard from "../FlashCard/FlashCard";
import "./CardDeck.css"

class CardDeck extends React.Component {
    constructor(props){
        super(props)
            this.state = { 
            qnaArr : [
            {   
                id: 1,
                question: "How are you?",
                answer: "Fine, thank you!"
            },
            {
                id: 2,
                question: "Are we there yet, ?",
                answer: "Close, but not yet!"
            },
            {
                id: 3,
                question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate fugit ullam doloremque quia ipsum, dolores nam quis itaque ratione quod necessitatibus tempore veritatis, ex autem dolorum quibusdam molestiae! Dolor adipisci quis odio numquam cum blanditiis perspiciatis veritatis consectetur nam eaque itaque quia eveniet magni nesciunt iste qui illo, deleniti soluta ipsa enim eligendi distinctio et harum voluptate! Modi quidem sunt rem, voluptas omnis ipsum deserunt soluta eveniet tempora officiis. Quisquam illo impedit culpa eius explicabo saepe! Reiciendis perspiciatis totam distinctio repellat reprehenderit, commodi ipsam nobis cumque debitis excepturi accusamus, dicta voluptatum obcaecati? Dignissimos laboriosam ullam vel error. Eos vel sapiente sint enim voluptas mollitia et, exercitationem nemo excepturi molestiae aut, sequi voluptatem ad sed nisi dolorum! Praesentium deleniti odio molestiae eius, ratione doloremque reiciendis, laudantium sed cum atque magnam incidunt. Accusamus dolore quas cumque minus quia deleniti maxime quidem? Mollitia qui id error iusto, optio eum necessitatibus, quae eveniet quod beatae officiis dolore tempora quibusdam commodi aliquid? Quas adipisci magni necessitatibus? Inventore pariatur ab ratione aut sequi sint culpa praesentium vitae est aspernatur, quod corrupti sapiente dolore nostrum optio sed similique aliquam magnam veniam dolor in, a quis laborum neque? Corporis aut suscipit iste quae distinctio voluptas eligendi totam eos, fuga laudantium veniam ullam aperiam repellendus tenetur pariatur assumenda vitae voluptatem praesentium. Rerum, molestiae autem? Dignissimos obcaecati cupiditate reprehenderit. Maxime dicta ea quam consequuntur et vero consequatur porro reiciendis amet? Qui, dolorum dolor blanditiis et quisquam doloremque tenetur minus atque, exercitationem voluptatem animi eos! Enim id aut neque, vero aspernatur quam necessitatibus sed expedita repellat ipsam aliquam culpa inventore ratione optio animi quaerat dolorum repellendus facere laudantium. In, natus distinctio ut libero modi voluptatum! Quisquam ipsum vitae accusantium, hic ex nam est nemo voluptatem sint cumque. Culpa, neque esse! Officia quibusdam ut reprehenderit facilis nemo tempora fugiat veniam, quas assumenda.",
                answer: "Yes, always!"
            }
        ],
        current: 0,
        cardDeck: [] 
        }
    }

    componentDidMount() {
        const cardDeck = this.state.qnaArr.map(this.mapCards);
        this.setState({
            cardDeck
        })
    } 

    mapCards = qna => (
        <div className="col-12">
        <FlashCard 
            key={qna.id}
            data={qna}
        /> 
        </div>
    )

    prevCard = () => {
        let current = this.state.current-1
        this.setState({current})
    }

    nextCard = () => {
        let current = this.state.current+1
        this.setState({current})
    }

    render(){
        return(
            <div className="cardContainer">
            {this.state.cardDeck[`${this.state.current}`]}
            <div className="d-flex" style={{paddingTop:"50%"}}>
            {<FontAwesomeIcon
            className={`mr-auto ${this.state.current >= 1 && 'disabled'}`}
            icon="chevron-circle-left"
            color="#ccc"
            size="2x" 
            cursor={`${this.state.current >= 1 ? 'pointer':'cursor' }`}
            onClick={this.state.current >= 1 ? this.prevCard : null}
            />}
            <FontAwesomeIcon
            className="ml-auto"
            icon="chevron-circle-right"
            color="#ccc"
            size="2x" 
            cursor="pointer"
            onClick={this.nextCard}
            />
            </div>  
         </div>
    );
    
    }
}

export default CardDeck;