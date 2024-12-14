import React from 'react';
import { Helmet } from 'react-helmet';
import PageTitle from '../components/PageTitle';

export default function LegalNotices({profileData}) {
 
  return (
    <div id="legalNotices" className="container-fluid bg-image w-100 p-5 d-flex flex-column justify-content-start align-items-center">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
   
      <div className="mt-5 my-5 p-3 bg-white w-100 ">
        <PageTitle  id={5}/>
        
        <div className="accordion p-1" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                éditeur de site
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <h2 className="text-capitalize">{profileData.name}</h2>
              <address><p className="text-capitalize p-0 m-0"><i className="fa-sharp fa-solid fa-location-dot fs-6"/> {profileData.address1}<br/>{profileData.address2}</p>
              <p className="text-primary" ><i className="fa-solid fa-mobile-screen "/> {profileData.phone}<br/>
              <i className="fa-solid fa-envelope"/> {profileData.email}</p></address>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button text-capitalize collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                hébergeur
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h2 className="text-capitalize">GitHub Pages</h2>
                <strong>GitHub Pages</strong> est un service d’hébergement de site statique qui prélève des fichiers HTML, CSS et JavaScript directement dans un dépôt sur GitHub, les exécute éventuellement dans un processus de génération, puis publie le site web.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                crédits
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h2 className="text-capitalize">crédits</h2>
                <p>Site développé par <span className="text-capitalize">{profileData.name}</span>, {profileData.title}.</p>
                <p>Les images libres de droits sont issues du site <span className="text-primary">{profileData.imgSource}</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

