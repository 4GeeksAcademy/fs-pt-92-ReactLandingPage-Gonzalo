import React from "react";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-md bg-dark mb-2">
            <div className="container-fluid">
                <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand text-light" href="#">{props.brand}</a>
                    <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
                        {props.links.map((link) => (
                            <li className="nav-item">
                                <a className="nav-link text-light" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;