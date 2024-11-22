import React from 'react';
import PageTitle from '../components/PageTitle';
import '../style.css';
import freshFood from'../img/portfolio/fresh-food.jpg';
import restaurantJaponais from'../img/portfolio/restaurant-japonais.jpg';
import espaceBienEtre from '../img/portfolio/espace-bien-etre.jpg';




export default function Portfolio() {


    return (
      <div id="portfolio" className="bg-white d-flex flex-column justify-content-center align-items-center">
        
        
        <PageTitle  id={2}/>

        <div className="m-5">
          <div className="d-flex justify-content-center mx-1">

            <div className="col-lg-4 p-3">
              <div className="card h-100">
                <img src={freshFood} class="card-img-top" alt="Fresh-Food"/>
                <div className="card-body d-flex flex-column justify-content-start align-items-center pt-3  mx-1">
                  <h2 className="card-title">Fresh food</h2>
                  <p className="card-text text-center">Réalisation d'un site avec commande en ligne.</p>
                  <button type="button" class="btn btn-outline-primary">Voir</button>
                </div>
                <div className="card-footer">
                  <p className="text-center">Site réalisé avec PHP et MySQL</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 p-3">
              <div className="card h-100">
                <img src={restaurantJaponais} class="card-img-top" alt="Restaurant japonais"/>
                <div className="card-body d-flex flex-column justify-content-start align-items-center pt-3  mx-1">
                  <h2 className="card-title">Restaurant Akira</h2>
                  <p className="card-text text-center">Réalisation d'un site vitrine.</p>
                  <button type="button" class="btn btn-outline-primary">Voir</button>
                </div>
                <div className="card-footer">
                  <p className="text-center">Site réalisé avec WordPress</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 p-3">
              <div className="card h-100">
                <img src={espaceBienEtre} class="card-img-top" alt="Espace bien-être"/>
                <div className="card-body d-flex flex-column justify-content-start align-items-center pt-3  mx-1">
                  <h2 className="card-title">Espace bien-être</h2>
                  <p className="card-text text-center">Réalisation d'un site avec commande en ligne pour un praticien de bien être.</p>
                  <button type="button" class="btn btn-outline-primary">Voir</button>
                </div>
                <div className="card-footer">
                  <p className="text-center">Site réalisé en HTML/CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      
      
      </div>

    );
}