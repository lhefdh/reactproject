import React from 'react';
import {useState, useEffect} from 'react';
import Banner from '../components/Banner';
import PageTitle from '../components/PageTitle';
import '../style.css';
import freshFood from'../img/portfolio/fresh-food.jpg';
import restaurantJaponais from'../img/portfolio/restaurant-japonais.jpg';
import espaceBienEtre from '../img/portfolio/espace-bien-etre.jpg';




export default function Portfolio(props) {

  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    const res = await fetch("https://api.github.com/users/lhefdh/repos");
    const json = await res.json();
    setProjects(json);
  };

  useEffect(() => {
    getProjects();
  },[]);
  
  
  let selectedProjects= projects.filter((project)=> (project.name==="Maquette-Probeats" || project.name==="PortfolioCEF" || project.name==="reactproject")) ;

    return (
      <div id="portfolio" className="bg-white d-flex flex-column justify-content-center">
        
        <Banner bannerSrc={props.bannerSrc}/>
        <PageTitle  id={2}/>

        <div id="portfolioCards" className="m-5">
          <div className="d-flex flex-wrap justify-content-start mx-1">
            {selectedProjects.map((project, index) => <div className="col-lg-4 col-md-6 col-sm-12 p-3" key={index}>
              <div className="card h-100">
                <img src={freshFood} class="card-img-top" alt="Fresh-Food"/>
                <div className="card-body d-flex flex-column justify-content-start align-items-center pt-3  mx-1">
                  <h2 className="card-title">{project.name}</h2>
                  <p className="card-text text-center">Réalisation d'un site avec commande en ligne.</p>
                  <button type="button" class="btn btn-outline-primary">Voir</button>
                </div>
                <div className="card-footer">
                  <p className="text-center">Site réalisé avec PHP et MySQL</p>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </div>

    );
}