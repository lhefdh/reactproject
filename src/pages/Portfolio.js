import React from 'react';
import {useState, useEffect} from 'react';
import Banner from '../components/Banner';
import PageTitle from '../components/PageTitle';
import '../style.css';

import PortfolioCEF from '../img/portfolio/PortfolioCEF.jpg';
import Maquette from '../img/portfolio/maquette.jpg';
import ReactProject from '../img/portfolio/ReactProject.jpg';




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
  
  

  let selectedProjects= projects.filter((project)=> ( project.name==="PortfolioCEF" || project.name==="reactproject" || project.name==="Maquette-Probeats")) ;


    return (
      <div id="portfolio" className="bg-white d-flex flex-column justify-content-center">
        
        <Banner bannerSrc={props.bannerSrc}/>
        <PageTitle  id={2}/>

        <div id="portfolioCards" className="m-5">
          <div className="d-flex flex-wrap justify-content-start mx-1">
            {selectedProjects.map((project, index) => <div className="col-lg-4 col-md-6 col-sm-12 p-3" key={index}>
              <div className="card h-100">
                <img src={(index===0) ? PortfolioCEF : (index===1) ? Maquette :(index===2) ? ReactProject :''} className="card-img-top" alt={project.name}/>
                <div className="card-body d-flex flex-column justify-content-start align-items-center pt-3 mx-1">
                  <h2 className="card-title text-uppercase">{project.name}</h2>
                  <p className="card-text text-center">{project.description}</p>
                  <button type="button" class="btn btn-outline-primary">Voir</button>
                </div>
                <div className="card-footer">
                  <p className="text-center text-uppercase fw-bolder">{project.topics.map((topic)=> <span key={index}> {topic} </span>)}</p>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </div>

    );
}