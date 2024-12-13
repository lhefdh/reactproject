import React from 'react';
import Banner from '../components/Banner';
import PageTitle from '../components/PageTitle';
import '../style.css';

export default function Blog({ImgSrc, profileData}) {


    return (
      <div id="blog" className="bg-white d-flex flex-column justify-content-center">
 
        <Banner ImgSrc={ImgSrc}/>
        <PageTitle  id={3}/>

        <div id="lastArticles" className="m-5">
          <div className="d-flex justify-content-center flex-wrap mx-1">

          {/* Map function pour réitérer pour chaque article contenu profileData.articles */}
          {profileData.articles.map((article, index) =><div className="col-lg-4 col-md-6 col-sm-12 p-3" key={index}>
              <div className="card h-100">
                <img src={article.imgSrc} className="card-img-top" alt="Fresh-Food"/>
                <div className="card-body d-flex flex-column justify-content-start align-items-start pt-3  mx-1">
                  <h2 className="card-title">{article.title}</h2>
                  <p className="card-text">{article.description}</p>
                  <button type="button" className="btn btn-primary">Lire la suite</button>
                </div>
                <div className="card-footer">
                  <p>{article.date}</p>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    );
}