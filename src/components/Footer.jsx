import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css';

export default function Footer(props) {
    


    return (
     
        <div id="Footer">
            <div className="d-flex text-start p-5">
                <div className="col-lg-3 p-3">
                    <h5 className="text-capitalize p-0 m-0">{props.personalData.name}</h5>
                    <p className="text-capitalize p-0 m-0">{props.personalData.address1}</p>
                    <p className="text-capitalize p-0 m-0">{props.personalData.address2}</p>
                    <p className="text-capitalize p-0 m-0">Téléphone : {props.personalData.phone}</p>
                    <ul className="p-1 m-1">
                        <i class="fa-brands fa-github pe-3 fs-2"/>
                        <i class="fa-brands fa-square-twitter pe-3 fs-2"/>
                        <i class="fa-brands fa-linkedin pe-3 fs-2"/>
                    </ul>
                </div>
                <div className="col-lg-3 p-3">
                    <h5 className="p-0 m-0">Liens utiles </h5>
                    <ul className="ps-1 ms-3" >
                        <li className="ps-1"><Link className="nav-link" to="../pages/">Accueil</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Contact">kjygkhg</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Services">Services</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Contact">Me contacter</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Contact">Mentions légales</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 p-3">
                    <h5>Mes dernières réalisations</h5>
                    <ul className="ps-1 ms-3" >
                        <li className="ps-1"><Link className="nav-link" to="../pages/">Fresh food</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Contact">Restaurant Akira</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Services">Espace bien-être</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 p-3">
                    <h5>Mes derniers articles</h5>
                    <ul className="ps-1 ms-3" >
                        <li className="ps-1"><Link className="nav-link" to="../pages/">Coder son site en HTML/CSS</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Contact">Vendre ses produits sur le web</Link></li>
                        <li className="ps-1"><Link className="nav-link" to="../pages/Services">Se positionner sur Google</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mb-3 p-3 bg-dark text-white text-center"><p>&#169; Designed by <span className="text-capitalize">{props.personalData.name}</span></p></div>

        </div>

    );
}