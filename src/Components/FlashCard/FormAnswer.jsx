import React from "react";

class FormAnswer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onHandleChange = input => this.props.handleChange(input);

    render() {
        return (
            <div>
                <div className="d-block text-center">
                    <label htmlFor="question">
                        <h5>Answer</h5>
                    </label>
                </div>
                {/* <div className="d-flex justify-content-center"> */}
                <textarea
                    className="m-3 c front"
                    style={{ border: "none" }}
                    value={this.props.answer}
                    type="text"
                    placeholder="...then the answer goes here."
                    name="answer"
                    onChange={this.onHandleChange}
                />
                {/* </div> */}
            </div>
        );
    }

}

export default FormAnswer;