import React from "react";
import "./FlashCard.css";

class FormQuestion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onHandleChange = input => this.props.handleChange(input)

    render() {
        return (
            <div>
                <div className="d-block text-center">
                    <label htmlFor="question">
                        <h5>Question</h5>
                    </label>
                </div>
                {/* <div className="d-flex justify-content-center"> */}
                <textarea
                    className="m-3 c back text-white"
                    style={{ border: "none" }}
                    value={this.props.question}
                    type="text"
                    placeholder="Type a question here."
                    name="question"
                    onChange={this.onHandleChange}
                />
                {/* </div> */}
            </div>
        );
    }
}

export default FormQuestion;