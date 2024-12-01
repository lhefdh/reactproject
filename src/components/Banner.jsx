import React from 'react';
import '../style.css';



export default function Banner(props) {

    return (       
            <div className="jumbotron jumbotron-fluid">
                <img src={props.bannerSrc} className="rounded img-fluid mb-5" alt="A propos"/>
            </div>
    );
}