import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import '../style.css';

export default function Footer(props) {


   


    return (
     
        <div id="Footer">
            <div className="d-flex flex-wrap text-start justify-content-center p-5">
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 px-3 footerContainer">
                    <h5 className="text-capitalize">{props.personalData.name}</h5>
                    <p className="text-capitalize p-0 m-0">{props.personalData.address1}</p>
                    <p className="text-capitalize p-0 m-0">{props.personalData.address2}</p>
                    <p className="text-capitalize p-0 m-0">Téléphone : {props.personalData.phone}</p>
                    <ul className="p-1 m-1">
                        <i class="fa-brands fa-github pe-3 fs-2"/>
                        <i class="fa-brands fa-square-twitter pe-3 fs-2"/>
                        <i class="fa-brands fa-linkedin pe-3 fs-2"/>
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
                    <ul className="ps-1 ms-3" >
                        <li className="ps-1"><HashLink className="nav-link" to="../pages/Portfolio#portfolioCards">Fresh food</HashLink></li>
                        <li className="ps-1"><HashLink className="nav-link" to="../pages/Portfolio#portfolioCards">Restaurant Akira</HashLink></li>
                        <li className="ps-1"><HashLink className="nav-link" to="../pages/Portfolio#portfolioCards">Espace bien-être</HashLink></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12px-3 footerContainer">
                    <h5>Mes derniers articles</h5>
                    <ul className="ps-1 ms-3" >
                        <li className="ps-1"><HashLink className="nav-link" to="../pages/Blog#lastArticles">Coder son site en HTML/CSS</HashLink></li>
                        <li className="ps-1"><HashLink className="nav-link" to="../pages/Blog#lastArticles">Vendre ses produits sur le web</HashLink></li>
                        <li className="ps-1"><HashLink className="nav-link" to="../pages/Blog#lastArticles">Se positionner sur Google</HashLink></li>
                    </ul>
                </div>
                <div  className="text-center" style={{color:"blue"}}><HashLink className="nav-link" to="#top"><i class="fa-sharp fa-solid fa-arrow-up"/><br/>Retour en haut</HashLink></div>
            </div>
            <div className="mb-3 p-3 bg-dark text-white text-center"><p className="text-white">&#169; Designed by <span className="text-capitalize">{props.personalData.name}</span></p></div>

        </div>

    );
}