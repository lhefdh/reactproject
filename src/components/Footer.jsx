import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css';

export default function Footer(props) {
    


    return (
     
        <div id="Footer">
            <div className="d-flex text-start p-5">
                <div className="col-lg-3 p-3">
                    <h3 className="text-capitalize p-0 m-0">{props.personalData.name}</h3>
                    <p className="text-capitalize p-0 m-0">{props.personalData.address1}</p>
                    <p className="text-capitalize p-0 m-0">{props.personalData.address2}</p>
                    <p className="text-capitalize p-0 m-0">{props.personalData.telephone}</p>
                    <ul className="p-1 m-1">
                        <i className="bi bi-github pe-3 fs-2"/>
                        <i className="bi bi-twitter pe-3 fs-2"/>
                        <i className="bi bi-linkedin pe-3 fs-2"/>
                    </ul>
                </div>
                <div className="col-lg-3 p-3">
                    <h3 className="p-0 m-0">Liens utiles </h3>
                    <ul className="ps-1 ms-3" >
                        <li className="ps-1"><Link className="nav-link" to="../pages/">Accueil</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Contact">kjygkhg</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Services">Services</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Contact">Me contacter</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Contact">Mentions légales</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 p-3">
                    <h3>Mes dernières réalisations</h3>
                    <ul className="ps-1 ms-3" >
                        <li className="ps-1"><Link className="nav-link" to="../pages/">Fresh food</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Contact">Restaurant Akira</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Services">Espace bien-être</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 p-3">
                    <h3>Mes derniers articles</h3>
                    <ul className="ps-1 ms-3" >
                        <li className="ps-1"><Link className="nav-link" to="../pages/">Coder son site en HTML/CSS</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Contact">Vendre ses produits sur le web</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Services">Se positionner sur Google</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mb-3 p-3 bg-dark text-white text-center"><p>&#169; Designed by <span className="text-capitalize">{props.personalData.name}</span></p></div>

            <hr id="Footer" className="w-100"></hr>
        </div>

    );
}