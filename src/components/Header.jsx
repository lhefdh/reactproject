import React from 'react';
import {Link} from 'react-router-dom';
import {useLocation} from "react-router-dom";
import '../style.css';

export default function Header(props) {

    let location = useLocation();
    
    const homeLinkIsActive = (location.pathname === props.homePathInHeader);
    const servicesLinkIsActive = (location.pathname === props.servicesPathInHeader);
    const portfolioLinkIsActive = (location.pathname === props.portfolioPathInHeader);
    const blogLinkIsActive = (location.pathname === props.blogPathInHeader);
    const contactLinkIsActive = (location.pathname === props.contactPathInHeader);

    return (
     
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark text-uppercase fixed-top">
        <div className="container-fluid ms-5">
            <a className="navbar-brand text-white" href="#">john doe</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="flex-d justify-content-end collapse navbar-collapse me-5" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 text-secondary">
                    <li className="nav-item">
                        <Link className={homeLinkIsActive? "nav-link active":"nav-link text-secondary"} to="../pages/">accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={servicesLinkIsActive? "nav-link active":"nav-link text-secondary"} to="../pages/Services">services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={portfolioLinkIsActive? "nav-link active":"nav-link text-secondary"} to="../pages/Portfolio">mes réalisations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={blogLinkIsActive? "nav-link active":"nav-link text-secondary"} to="../pages/Blog">mon blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={contactLinkIsActive? "nav-link active":"nav-link text-secondary"} to="../pages/Contact">contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    );
}