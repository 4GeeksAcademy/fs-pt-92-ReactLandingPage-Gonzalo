import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="card mx-auto my-3" style={{ width: "18rem" }}>
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardDescription}</p>
                <a href={props.buttonUrl} className="btn btn-primary">{props.buttonText}e</a>
            </div>
        </div>
    );
}

Card.proptypes = {
    imgUrl: PropTypes.string,
    cardTitle: PropTypes.string,
    cardDescription: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonText: PropTypes.string
};

export default Card;