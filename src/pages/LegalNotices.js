import React from 'react';
import { Helmet } from 'react-helmet';
import PageTitle from '../components/PageTitle';
import Accordion from 'react-bootstrap/Accordion';

export default function LegalNotices({profileData}) {
 
  return (
    <div id="legalNotices" className="container-fluid bg-image w-100 p-5 d-flex flex-column justify-content-start align-items-center">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
   
      <div className="mt-5 my-5 p-3 bg-white w-100 ">
        <PageTitle  id={5}/>
        
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>        
                Editeur de site
            </Accordion.Header>
            <Accordion.Body>          
              <h2 className="text-capitalize">{profileData.name}</h2>
              <address><p className="text-capitalize p-0 m-0"><i className="fa-sharp fa-solid fa-location-dot fs-6"/> {profileData.address1}<br/>{profileData.address2}</p>
              <p className="text-primary" ><i className="fa-solid fa-mobile-screen "/> {profileData.phone}<br/>
              <i className="fa-solid fa-envelope"/> {profileData.email}</p></address>          
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
                Hébergeur             
            </Accordion.Header>
            <Accordion.Body>
                <h2 className="text-capitalize">GitHub Pages</h2>
                <strong>GitHub Pages</strong> est un service d’hébergement de site statique qui prélève des fichiers HTML, CSS et JavaScript directement dans un dépôt sur GitHub, les exécute éventuellement dans un processus de génération, puis publie le site web.   
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>   
                Crédits
            </Accordion.Header>
            <Accordion.Body>
                <h2 className="text-capitalize">crédits</h2>
                <p>Site développé par <span className="text-capitalize">{profileData.name}</span>, {profileData.title}.</p>
                <p>Les images libres de droits sont issues du site <span className="text-primary">{profileData.imgSource}</span>.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
    
  );
}

