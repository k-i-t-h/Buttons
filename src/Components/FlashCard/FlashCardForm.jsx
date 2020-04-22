import React from "react";
import FlashCard from "./FlashCard";
import FormQuestion from "./FormQuestion";
import FormAnswer from "./FormAnswer";
import "./FlashCard.css";

class FlashCardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            qna: 0,
            data: {
                question: "",
                answer: ""
            },
            cardDeck: []
        }
    }

    componentDidMount() {

    }

    submitHandler = (value, { resetForm }) => {

    }

    handleChange = value => {
        let target = value.target;
        let name = target.name;
        let input = target.value;
        this.setState((prevState) => {
            let data = { ...prevState.data }
            data[name] = input
            return { ...prevState, data }
        })
    }

    nextStep = () => {
        let step = this.state.step + 1
        this.setState({ step })
    }

    prevStep = () => {
        let step = this.state.step - 1
        this.setState({ step })
    }

    render() {
        return (
            <main className="row">
                <section className="col-12" align="center">
                    {<div className="text-right">
                        {
                            this.state.step > 1 && (<button type="button" onClick={this.prevStep} className="btn btn-info m-2 font-weight-bold">Back</button>)
                        }
                        {
                            this.state.step < 3 ? (<button type="button" onClick={this.nextStep} className="btn btn-warning m-2 font-weight-bold">Next</button>) : (<button type="button" onClick={this.submitHandler} className="btn btn-warning m-1 font-weight-bold">Submit</button>)
                        }
                    </div>}
                    {this.state.step === 1 && (
                        <FormQuestion
                            question={this.state.data.question}
                            handleChange={this.handleChange}
                        />)
                    }
                    {this.state.step === 2 && (
                        <FormAnswer
                            answer={this.state.data.answer}
                            handleChange={this.handleChange}
                        />)
                    }
                    {this.state.step === 3 &&
                        <div className="d-block">
                            <label htmlFor="question">
                                <h5>Add to Deck</h5>
                            </label>
                            <div className="m-3">
                                <FlashCard
                                    key={this.state.qna}
                                    data={this.state.data} />
                            </div>
                        </div>
                    }
                </section>
            </main>
        );
    }
}

export default FlashCardForm;