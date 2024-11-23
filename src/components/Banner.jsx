import React from 'react';
import '../style.css';
import banner from '../img/banner.jpg';

export default function Banner() {


    return (       
            <div className="jumbotron jumbotron-fluid">
                <img src={banner} className="rounded img-fluid mb-5" alt="A propos"/>
            </div>
    );
}