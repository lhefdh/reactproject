import React from 'react';
import { Helmet } from 'react-helmet';
import PageTitle from '../components/PageTitle';

export default function LegalNotices(props) {
 
  return (
    <div id="legalNotices" className="container-fluid bg-image w-100 p-5 d-flex flex-column justify-content-start align-items-center">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
   
      <div className="mt-5 my-5 p-3 bg-white w-100 ">
        <PageTitle  id={4}/>
        
        <div class="accordion p-1" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                éditeur de site
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <h2 className="text-capitalize">{props.personalData.name}</h2>
              <address><p className="text-capitalize p-0 m-0"><i class="fa-sharp fa-solid fa-location-dot fs-6"/> {props.personalData.address1}<br/>{props.personalData.address2}</p>
              <p className="text-primary" ><i class="fa-solid fa-mobile-screen "/> {props.personalData.phone}<br/>
              <i class="fa-solid fa-envelope"/> {props.personalData.email}</p></address>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button text-capitalize collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                hébergeur
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <h2 className="text-capitalize">titre</h2>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                crédits
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <h2 className="text-capitalize">crédits</h2>
                <p>Site développé par <span className="text-capitalize">{props.personalData.name}</span>, {props.personalData.title}.</p>
                <p>Les images libres de droits sont issues du site <span className="text-primary">{props.personalData.imgSource}</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

