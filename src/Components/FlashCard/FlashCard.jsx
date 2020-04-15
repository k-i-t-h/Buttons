import React from "react";

const FlashCard = (props) =>{
    console.log(props)
    return(
        <div className="card cardStyle">
            <div className="card-title">card title</div>
            <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda blanditiis reprehenderit quas qui sequi adipisci consectetur praesentium dignissimos id.</div>
        </div>
    );
}

export default FlashCard;