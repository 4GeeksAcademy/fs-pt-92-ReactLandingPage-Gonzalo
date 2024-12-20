import React from "react";

const Footer = (props) => {
    return (
        <footer className="bg-dark text-light pt-3 mt-auto text-center">
            <div className="container">
                <p className="mb-0">
                    {props.copyright}
                </p>
            </div>
        </footer>
    );
}

export default Footer;