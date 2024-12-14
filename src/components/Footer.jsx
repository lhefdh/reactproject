import React from 'react';
import {useLocation} from "react-router-dom";
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { useState } from "react";
import '../style.css';

export default function Footer({pagesPaths, notFound, profileData}) {

    const [showTopButton, setShowTopButton] = useState(false);

    let location = useLocation();
    
    // Faire apparaitre le bouton 'TOP' à partir d'une certaine hauteur (ScrollY)
    window.addEventListener('scroll', function() {
       if (location.pathname === pagesPaths.servicesPath) {
        if (window.scrollY >= 250) {
            setShowTopButton(true)
        } else {
            setShowTopButton(false);
        }
       } else if (location.pathname === pagesPaths.portfolioPath) {
        if (window.scrollY >= 500) {
            setShowTopButton(true)
        } else {
            setShowTopButton(false);
        }
       } else if (location.pathname === pagesPaths.blogPath) {
        if (window.scrollY >= 1200) {
            setShowTopButton(true)
        } else {
            setShowTopButton(false);
        }
       } else if (location.pathname === pagesPaths.contactPath) {
        if (window.scrollY >= 300) {
            setShowTopButton(true)
        } else {
            setShowTopButton(false);
        }
       } else {
        if (window.scrollY >= 1150) {
            setShowTopButton(true)
        } else {
            setShowTopButton(false);
        }
       } 
    });
    
    let listProjects= profileData.projects.map((project, index) =>
        <li className="ps-1" key={index}><HashLink className="nav-link" to="../pages/Portfolio#portfolioCards">{project.name}</HashLink></li>);
    // selection des trois derniers articles les plus récents
    let recentArticles= profileData.articles.slice(-3);
    let listArticles= recentArticles.map((article, index) => 
        <li className="ps-1" key={index}><HashLink className="nav-link" to="../pages/Blog#lastArticles" >{article.title}</HashLink></li>);
       
   
if (!notFound){
    return (
        <div id="Footer" >
            <div className="d-flex flex-wrap text-start justify-content-center p-5">
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 px-3 footerContainer">
                    <h5 className="text-capitalize">{profileData.name}</h5>
                    <p className="text-capitalize p-0 m-0">{profileData.address1}</p>
                    <p className="text-capitalize p-0 m-0">{profileData.address2}</p>
                    <p className="text-capitalize p-0 m-0">Téléphone : {profileData.phone}</p>
                    <ul className="p-1 m-1">
                        <li className="fa-brands fa-github pe-3 fs-2"/>
                        <li className="fa-brands fa-square-twitter pe-3 fs-2"/>
                        <li className="fa-brands fa-linkedin pe-3 fs-2"/>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 px-3 footerContainer">
                    <h5 >Liens utiles </h5>
                    <ul className="ps-1 ms-3" >
                        <li className="ps-1"><Link className="nav-link" to="../pages/">Accueil</Link></li>
                        <li className="ps-1"><HashLink className="nav-link" to="../pages/#apropos"><span className="text-capitalize">à</span> propos</HashLink></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Services">Services</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Contact">Me contacter</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/LegalNotices">Mentions légales</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 px-3 footerContainer">
                    <h5>Mes dernières réalisations</h5>
                    <ul className="ps-1 ms-3" >{listProjects}</ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12px-3 footerContainer">
                    <h5>Mes derniers articles</h5>
                    <ul className="ps-1 ms-3" >{listArticles}</ul>
                </div>
                <div className={showTopButton? "text-center":"footer-scrolled text-center"} style={{color:"blue"}}><HashLink className="nav-link" to="#top"><div id="backToTop" className="btn btn-outline-dark">Retour en haut</div></HashLink></div>
            </div>
            <div className="mb-3 p-3 bg-dark text-white text-center"><p className="text-white">&#169; Designed by <span className="text-capitalize">{profileData.name}</span></p></div>
        </div>
    )};
}