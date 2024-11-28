import React from 'react';
import Banner from '../components/Banner';
import PageTitle from '../components/PageTitle';
import '../style.css';




export default function Services() {


    return (
      <div id="services" className="bg-white d-flex flex-column justify-content-center align-items-center">
        <Banner/>
        <PageTitle  id={1}/>

        <div className="m-5">
          <div className="d-flex flex-wrap justify-content-center mx-1">
            <div className="col-lg-4 col-md-4 col-sm-12 p-3">
              <div className="card text-center py-1 h-auto">
                  <div id="articleDiv" className="card-body">
                    <i class="fa-solid fa-display fs-2" style={{color:"blue"}}/>
                    <h5 className="card-title text-uppercase my-3">ux design</h5>
                    <p className="card-text">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                  </div>
                </div>
            </div>

            <div  className="col-lg-4 col-md-4 col-sm-12 p-3">
              <div className="card text-center py-1 h-auto">
                <div id="articleDiv" className="card-body ">
                  <i class="fa-solid fa-file-code fs-2" style={{color:"blue"}}/>
                  <h5 className="card-title text-uppercase my-3">développement web</h5>
                  <p className="card-text">Le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 p-3">
              <div className="card text-center py-1 h-auto">
                <div id="articleDiv" className="card-body">
                  <i class="fa-solid fa-magnifying-glass-dollar fs-2" style={{color:"blue"}}/>
                  <h5 className="card-title text-uppercase my-3">référencement</h5>
                  <p className="card-text">Le <strong>référencement naturel d'un site,</strong> aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>

    );
}
