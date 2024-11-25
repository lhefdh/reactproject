import React from 'react';
import { useState } from "react";
import Modal from '../components/Modal';
import '../style.css';
import PageTitle from  '../components/PageTitle';
import contactBG from '../img/contact-bg.jpg';


export default function Contact(props) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [contactInputs, setContactInputs] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    textarea: "",
  });
  const bgStyle = {
    backgroundImage: `url(${contactBG})`,
    height:"100vh",
    width:"auto",
    fontSize: "70px",
    backgroundColor: "rgba (0, 105, 255, 0.5)",
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { phone } = contactInputs;
    if (phone.length < 10 || phone.length > 12) {
      setErrorMessage("le format saisi pour le numéro de téléphone est incorrect");
    }
  }

  const btnIsDisabled =
  contactInputs.name === "" ||
  contactInputs.email === "" ||
  contactInputs.phone === "" ||
  contactInputs.subject === "" ||
  contactInputs.textarea === "";

  
  return (
    <div id="contact" className="bg-image w-100  h-auto p-5 d-flex flex-column justify-content-start align-items-center" style={bgStyle}>
   
        <div className="mt-5 p-3 bg-white w-100 ">
          <PageTitle  id={4}/>
          <div className="d-flex flex-wrap p-1">
            <div className="col-lg-6 col-md-6 col-sm-12 p-1 px-3">
              <h2>Formulaire de contact</h2>
              <hr className="hr border-primary border-2 w-100"/>
              
              <form id="contactForm" className="d-flex flex-column align-items-center">
                <input value={contactInputs.name} type="nom" className="form-control mb-3" onChange={(event)=>{setContactInputs({...contactInputs, name:event.target.value})}}  placeholder="Votre nom"/>
                <input value={contactInputs.email} type="email" className="form-control mb-3" onChange={(event)=>{setContactInputs({...contactInputs, email:event.target.value})}} placeholder="Votre adresse email"/>
                <input value={contactInputs.phone} type="téléphone" className="form-control mb-3" onChange={(event)=>{setContactInputs({...contactInputs, phone:event.target.value})}} placeholder="Votre numéro de téléphone"/>
                <input value={contactInputs.subject} type="sujet" className="form-control mb-3" onChange={(event)=>{setContactInputs({...contactInputs, subject:event.target.value})}} placeholder="sujet"/>
                <textarea value={contactInputs.textarea} class="form-control mb-3" onChange={(event)=>{setContactInputs({...contactInputs, textarea:event.target.value})}} placeholder="Votre message" rows="5"/>
                <button 
                  type="button" 
                  className={btnIsDisabled ? "disabled btn btn-primary" : "btn btn-primary"} 
                  onClick={handleFormSubmit}
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                  >Envoyer
                </button>
                
              </form>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 p-1 px-3">
              <h2>Mes coordonnées </h2>
              <hr className="hr border-primary border-2 w-100"/>
              <address><p className="text-capitalize"><i className="fa-sharp fa-solid fa-location-dot fs-6"/> {props.personalData.address1}, {props.personalData.address2}<br/>
              <i className="fa-solid fa-mobile-screen"/> {props.personalData.phone}</p></address>
              <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.627152462179!2d4.796403976316202!3d45.778661971080815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1732390878863!5m2!1sfr!2sfr"  style={{border:0, width:"100%", height:"60%", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}/>
            </div>
            
          </div>  
        </div>
        <Modal errorMessage={errorMessage}/> 
    </div>

  );
}
