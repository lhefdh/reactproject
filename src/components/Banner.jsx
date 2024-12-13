import React from 'react';
import '../style.css';





export default function Banner({ImgSrc}) {

    return (       
            <div className="jumbotron jumbotron-fluid">
                <img src={ImgSrc} className="rounded img-fluid mb-5" alt="A propos"/>
            </div>
    );
}