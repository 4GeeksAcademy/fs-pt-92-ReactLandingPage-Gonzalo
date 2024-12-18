import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
    return (
        <div className="container-fluid py-5 bg-light">
            <h1 className="display-5 fw-bold">{props.title}</h1>
            <p className="col-md-8 fs-4">{props.description}</p>
            <a href={props.buttonUrl}>
                <button className="btn btn-primary btn-lg" type="button">{props.buttonText}</button>
            </a>
        </div>
    );
}

Jumbotron.proppTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    buttonUrl: PropTypes.string
};

export default Jumbotron;