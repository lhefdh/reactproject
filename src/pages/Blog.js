import React from 'react';
import Banner from '../components/Banner';
import PageTitle from '../components/PageTitle';
import '../style.css';
import coder from'../img/blog/coder.jpg';
import croissance from'../img/blog/croissance.jpg';
import google from'../img/blog/google.jpg';
import screens from'../img/blog/screens.jpg';
import seo from'../img/blog/seo.jpg';
import technos from'../img/blog/technos.png';





export default function Blog(props) {


    return (
      <div id="blog" className="bg-white d-flex flex-column justify-content-center">
 
        <Banner bannerSrc={props.bannerSrc}/>
        <PageTitle  id={3}/>

        <div id="lastArticles" className="m-5">
          <div className="d-flex justify-content-center flex-wrap mx-1">

            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
              <div className="card h-100">
                <img src={coder} class="card-img-top" alt="Fresh-Food"/>
                <div className="card-body d-flex flex-column justify-content-start align-items-start pt-3  mx-1">
                  <h2 className="card-title">Coder son site en HTML/CSS</h2>
                  <p className="card-text text-center">Réalisation d'un site avec commande en ligne.</p>
                  <button type="button" class="btn btn-primary">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <p>Publié le 22 août 2022</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
              <div className="card h-100">
                <img src={croissance} class="card-img-top" alt="Restaurant japonais"/>
                <div className="card-body d-flex flex-column justify-content-start align-items-start pt-3  mx-1">
                  <h2 className="card-title">Vendre ses produits sur le web</h2>
                  <p className="card-text text-center">Réalisation d'un site vitrine.</p>
                  <button type="button" class="btn btn-primary">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <p>Publié le 20 août 2022</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
              <div className="card h-100">
                <img src={google} class="card-img-top" alt="Espace bien-être"/>
                <div className="card-body d-flex flex-column justify-content-start align-items-start pt-3  mx-1">
                  <h2 className="card-title">Se positionner sur Google</h2>
                  <p className="card-text text-center">Réalisation d'un site avec commande en ligne pour un praticien de bien être.</p>
                  <button type="button" class="btn btn-primary">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <p>Publié le 1 août 2022</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
              <div className="card h-100">
                <img src={screens} class="card-img-top" alt="Espace bien-être"/>
                <div className="card-body d-flex flex-column justify-content-start align-items-start pt-3  mx-1">
                  <h2 className="card-title">Coder en Responsive design</h2>
                  <p className="card-text text-center">Réalisation d'un site avec commande en ligne pour un praticien de bien être.</p>
                  <button type="button" class="btn btn-primary">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <p>Publié le 31 juillet 2022</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
              <div className="card h-100">
                <img src={seo} class="card-img-top" alt="Espace bien-être"/>
                <div className="card-body d-flex flex-column justify-content-start align-items-start pt-3  mx-1">
                  <h2 className="card-title">Techniques de référencement</h2>
                  <p className="card-text text-center">Réalisation d'un site avec commande en ligne pour un praticien de bien être.</p>
                  <button type="button" className="btn btn-primary">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <p>Publié le 30 juillet 2022 2022</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
              <div className="card h-100">
                <img src={technos} class="card-img-top" alt="Espace bien-être"/>
                <div className="card-body d-flex flex-column justify-content-start align-items-start pt-3  mx-1">
                  <h2 className="card-title">Apprendre à coder</h2>
                  <p className="card-text text-center">Réalisation d'un site avec commande en ligne pour un praticien de bien être.</p>
                  <button type="button" class="btn btn-primary">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <p>Publié le 12 juillet 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      
      
      </div>

    );
}