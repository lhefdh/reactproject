import React from 'react';
import {HashLink} from 'react-router-hash-link';
import '../style.css';
import aboutImage from '../img/john-doe-about.jpg';

export default function Home({homeBackgroundUrl, profileData}) {

    return (
      <div>
        <div  id="home" className="container-fluid bg-image shadow-2-strong" style={homeBackgroundUrl} >
          <div className="mask">
            <div className="container pt-5 d-flex flex-column align-items-center justify-content-center align-content-center text-center text-white">
              <h1 className="pt-5">Bonjour, je suis <span className="text-capitalize">{profileData.name}</span></h1>
              <h5 className="pt-3">Développeur Web Full Stack</h5>
              <HashLink id="welcome-Btn" className="btn btn-outline-light btn-lg m-4"  to="#apropos" role="button"
                rel="nofollow" >En savoir plus</HashLink>
            </div>
          </div>
        </div>
        
        <div id="apropos" className="container-fluid w-100 p-5">
          <div className="shadow p-5 mb-5 rounded d-flex flex-wrap">
            <div className="col-lg-6 col-md-6 col-sm-12 p-3 d-flex flex-column  justify-content-start align-content-start">
                <h3><span className="text-uppercase">à</span> propos</h3>
                <hr className="hr border-primary border-2 w-100"/>
                <p className="pt-3 text-start">Passionné par l'informatique et les nouvelles technologies, j'ai vu une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web.</strong><br/>
                    Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack.</strong><br/>
                    J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.   
                </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 p-3 d-flex flex-column align-items-start justify-content-start">
              <img src={aboutImage} className="rounded img-fluid" alt="A propos"/>
              <h3 className="pt-3">Mes Compétences</h3>

              {/* Map function pour réitérer pour chaque élément contenu profileData.skills */}
              {profileData.skills.map((skill) => ( 
                <div className="w-100 pb-3" key={skill.id}>
                  <p className="text-uppercase text-start p-0 m-0">{skill.name} {skill.rate}%</p>
                  <div className="progress w-100" role="progressbar" aria-label="Info example" aria-valuenow={skill.rate} aria-valuemin="0" aria-valuemax="100">
                    <div style={skill.skillStyle} className="progress-bars"  ></div>
                  </div>
                </div>
              ))} 
            </div>
          </div>
        </div>
        
      </div>
       
    
    );
}