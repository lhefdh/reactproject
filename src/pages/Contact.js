import React from 'react';
import { useState } from "react";
import '../style.css';
import PageTitle from  '../components/PageTitle';
import contactBG from '../img/contact-bg.jpg';
import ModalComponent from '../components/ModalComponent.jsx';

export default function Contact({profileData}) {
  // state pour définir le message d'erreur si les champs ont été bien mal remplis
  const [errorMessage, setErrorMessage] = useState(null);
  // state controler l'apparition du Modal
  const [showModal, setShowModal] = useState(false);
  // state qui décrit les données saisies
  const [contactInputs, setContactInputs] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    textarea: "",
  });

  // style du background
  const bgStyle = {
    backgroundImage: `url(${contactBG})`,
    backgroundColor: 'rgba(0, 105, 255, 0.5)',
    backgroundBlendMode: 'multiply',
  }

  // booléen qui décrit si l'un des champs est vide pour désactiver le bouton Submit
  const btnIsDisabled =
  contactInputs.name === "" ||
  contactInputs.email === "" ||
  contactInputs.phone === "" ||
  contactInputs.subject === "" ||
  contactInputs.textarea === "";

  // fonction déclenché avec le clic sur le bouton qui déclenche à la fois le message d'erreur et l'apparition du Modal
  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { phone } = contactInputs;
    if (phone.length < 10 || phone.length > 12) {
      setErrorMessage("le format saisi pour le numéro de téléphone est incorrect");
    }
    setShowModal(true);
  }
  
  // fonction qui ferme le modal par clic à l'intérieur du Div
  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  return (
    <div id="contact" className="bg-image w-100  h-auto p-5 d-flex flex-column justify-content-start align-items-center" style={bgStyle}>
   
        <div onClick={handleDivClick} className="mt-5 p-3 bg-white w-100 ">
          <PageTitle  id={4}/>
          <div className="d-flex flex-wrap p-1">
            <div className="col-lg-6 col-md-6 col-sm-12 p-1 px-3">
              <h2>Formulaire de contact</h2>
              <hr className="hr border-primary border-2 w-100"/>
              
              <form id="contactForm" className="d-flex flex-column align-items-center">
                <input value={contactInputs.name} type="text" className="form-control mb-3" onChange={(event)=>{setContactInputs({...contactInputs, name:event.target.value})}}  placeholder="Votre nom"/>
                <input value={contactInputs.email} type="email" className="form-control mb-3" onChange={(event)=>{setContactInputs({...contactInputs, email:event.target.value})}} placeholder="Votre adresse email"/>
                <input value={contactInputs.phone} type="tel" className="form-control mb-3" onChange={(event)=>{setContactInputs({...contactInputs, phone:event.target.value})}} placeholder="Votre numéro de téléphone"/>
                <input value={contactInputs.subject} type="text" className="form-control mb-3" onChange={(event)=>{setContactInputs({...contactInputs, subject:event.target.value})}} placeholder="sujet"/>
                <textarea value={contactInputs.textarea} className="form-control mb-3" onChange={(event)=>{setContactInputs({...contactInputs, textarea:event.target.value})}} placeholder="Votre message" rows="5"/>
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
              <address><p className="text-capitalize"><i className="fa-sharp fa-solid fa-location-dot fs-6"/> {profileData.address1}, {profileData.address2}<br/>
              <i className="fa-solid fa-mobile-screen"/> {profileData.phone}</p></address>
              <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.627152462179!2d4.796403976316202!3d45.778661971080815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1732390878863!5m2!1sfr!2sfr"  style={{border:0, width:"100%", height:"60%", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}/>
            </div> 
          </div>  
        </div>
        <ModalComponent errorMessage={errorMessage} show={showModal} closeModal={ () => setShowModal(false)}/> 
    </div>

  );
}