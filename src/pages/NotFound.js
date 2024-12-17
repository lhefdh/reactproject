import React from 'react';
import {Link} from 'react-router-dom';
import notFound from '../img/notFound.png';

export default function NotFound({pagesPaths}) {
    return (
      <div className="p-5 " style={{backgroundColor:'#EEE'}}>
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5">
          <h2>La page que vous demandez n'existe pas</h2>
          <img id ="notFoundImg" src={notFound} className="img-fluid mb-5" alt="Page non trouvé"/>
          <Link className="btn btn-outline-dark btn-lg"  to={pagesPaths[0].path} role="button" rel="nofollow" >Page d'Accueil</Link>
        </div>
      </div>
    );
}