import React from 'react';
import Banner from '../components/Banner';
import PageTitle from '../components/PageTitle';
import '../style.css';
import PortfolioCEF from '../img/portfolio/PortfolioCEF.jpg';
import Maquette from '../img/portfolio/maquette.jpg';
import ReactProject from '../img/portfolio/ReactProject.jpg';

export default function Portfolio({ImgSrc, profileData}) {

    return (
      <div id="portfolio" className="bg-white d-flex flex-column justify-content-center">
        
        <Banner ImgSrc={ImgSrc}/>
        <PageTitle  id={2}/>

        <div id="portfolioCards" className="m-5">
          <div className="d-flex flex-wrap justify-content-start mx-1">
            {/* Map function pour réitérer pour chaque projet contenu profileData.projects */}
            {profileData.projects.map((project, index) => <div className="col-lg-4 col-md-6 col-sm-12 p-3" key={index}>
              <div className="card h-100">
                {/* le nom de l'image sera définit parmi les images importées selon l'index de lelement */}
                <img src={(index===0) ? PortfolioCEF : (index===1) ? Maquette :(index===2) ? ReactProject :''} className="card-img-top" alt={project.name}/>
                <div className="card-body d-flex flex-column align-items-center pt-3 mx-1">
                  <h2 className="card-title text-uppercase">{project.name}</h2>
                  <p className="card-text align-self-start">{project.description}</p>
                  <button type="button" className="btn btn-outline-primary">Voir</button>
                </div>
                <div className="card-footer">
                  <p className="text-center text-uppercase fw-bolder">{project.topics.map((topic, index)=> <span key={index}>| {topic} |</span>)}</p>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </div>

    );
}