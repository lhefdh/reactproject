import React from 'react';
import '../style.css';
import banner from '../img/banner.jpg';

export default function PageTitle(props) {
    let id=props.id;
    
    const titleData=[
        {
            "id": 1,
            "title": "mon offre de services",
            "description": "Voici les prestations sur lesquelles je peux intervenir.",
            },
        {
            "id": 2,
            "title": "portfolio",
            "description": "Voici quelques-unes de mes réalisations",
            },
        {
            "id": 3,
            "title": "blog",
            "description": "Retrouvez ici quelques articles sur le développement web",
            }
    ]

    


    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div class="jumbotron jumbotron-fluid">
                <img src={banner} className="rounded img-fluid mb-5" alt="A propos"/>
            </div>
            <div className="col-lg-6  d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-uppercase">{titleData[id-1].title}</h1>
                <p className="m-0 p-0">{titleData[id-1].description}</p>
                <hr className="hr border border-1 w-25"/>
            </div>
        </div>

    );
}