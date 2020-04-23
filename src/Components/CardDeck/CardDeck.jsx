import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlashCard from "../FlashCard/FlashCard";
import swal from "sweetalert";
import "./CardDeck.css"

class CardDeck extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            qnaArr: [
                {
                    id: 0,
                    question: "How are you?",
                    answer: "Fine, thank you!"
                },
                {
                    id: 1,
                    question: "Are we there yet?",
                    answer: "Close, but not yet!"
                },
                {
                    id: 2,
                    question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus modi eius unde, veritatis numquam nulla non temporibus, veniam eveniet amet magni? Dolore laboriosam quas temporibus? This is the end",
                    answer: "Yes, always!"
                }
            ],
            current: 0,
            cardDeck: []
        }
    }

    componentDidMount() {
        const cardDeck = this.state.qnaArr.map(this.mapCards);
        this.setState({ cardDeck })
    }

    mapCards = qna => (
        <FlashCard
            key={qna.id}
            data={qna}
        />
    )

    prevCard = () => this.setState({ current: this.state.current - 1 })

    nextCard = () => this.setState({ current: this.state.current + 1 })

    congratulateAlert = () => {
        swal({
            title: "That's the last Card!",
            text: "Wanna make a new deck?",
            icon: "success",
            buttons: [true, "Sure"]
        })
            .then((value) => {
                if (value) {
                    this.props.history.push("/card-form")
                }
            });
    }

    render() {
        return (
            <div className="cardContainer">
                <div className="d-block text-center p-4">{10}</div>
                {this.state.cardDeck[`${this.state.current}`]}
                <div className="d-block">
                    <div className="d-flex">
                        <FontAwesomeIcon
                            className={`mr-auto d-none ${this.state.current >= 1 && 'd-block'}`}
                            icon="chevron-circle-left"
                            color="#ccc"
                            size="2x"
                            cursor={`${this.state.current >= 1 ? 'pointer' : 'cursor'}`}
                            onClick={this.state.current >= 1 ? this.prevCard : null}
                        />
                        <FontAwesomeIcon
                            className="ml-auto"
                            icon="chevron-circle-right"
                            color="#ccc"
                            size="2x"
                            cursor="pointer"
                            onClick={!(this.state.current === this.state.cardDeck.length - 1) ? this.nextCard : this.congratulateAlert}
                        />
                    </div>
                </div>
            </div>
        );

    }
}

export default CardDeck;