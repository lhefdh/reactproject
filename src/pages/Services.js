import React from 'react';
import '../style.css';
import banner from '../img/banner.jpg';



export default function Services() {


    return (
      <div id="services" className="bg-white d-flex flex-column justify-content-center align-items-center">
        <div class="jumbotron jumbotron-fluid">
          <img src={banner} className="rounded img-fluid mb-5" alt="A propos"/>
        </div>
        <div className="m-5 d-flex flex-column justify-content-center align-items-center">
          
          <div className="col-lg-6  d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-uppercase">mon offre de service</h1>
            <p className="m-0 p-0">Voici les prestations sur lesquelles je peux intervenir.</p>
            <hr className="hr border border-1 w-25"/>
          </div>

          <div className="d-flex justify-content-center mx-1 my-5">
            <div className="col-lg-4 p-3   ">
              <div className="card text-center py-3">
                  <div className="card-body ">
                    <i class="fa-solid fa-display fs-2" style={{color:"blue"}}/>
                    <h5 className="card-title text-uppercase my-3">ux design</h5>
                    <p className="card-text">L'<strong>UX Design</strong> est une méthode de conception centréesur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                  </div>
                </div>
            </div>

            <div className="col-lg-4 p-3 ">
              <div className="card text-center py-3">
                <div className="card-body ">
                  <i class="fa-solid fa-file-code fs-2" style={{color:"blue"}}/>
                  <h5 className="card-title text-uppercase my-3">développement web</h5>
                  <p className="card-text">Le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 p-3">
              <div className="card  text-center py-3" >
                <div className="card-body">
                  <i class="fa-solid fa-magnifying-glass-dollar fs-2" style={{color:"blue"}}/>
                  <h5 className="card-title text-uppercase my-3">référencement</h5>
                  <p className="card-text">Le <strong>référencement naturel d'un site,</strong> aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche</p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>

    );
}
