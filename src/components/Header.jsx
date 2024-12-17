import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {useLocation} from "react-router-dom";
import {NavLink} from 'react-router-dom';
import '../style.css';

export default function Header({pagesPaths, notFound, name}) {

      // variable utilisée pour pour vérifier la correspondance entre  le lien dans la navBar et la page sur laquelle on se situe dans le but de créer un effet sur le lien actif
    let location = useLocation();
  


    if (!notFound){
    return (
        // className="navbar navbar-expand-lg bg-dark navbar-dark text-uppercase fixed-top"
    <Navbar bg="dark" expand="lg" className="text-uppercase fixed-top">

        <Container >

            <Navbar.Brand className="brand text-white" to="../pages/">{name}</Navbar.Brand>
            <Navbar.Toggle className="bg-secondary" aria-controls="basic-bavbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mb-2 mb-lg-0 ms-auto text-secondary">

                    {pagesPaths.map((page, index) => { return (index<5) ?  
                    <NavLink key={index} 
                    className={(location.pathname===page.path)?"active nav-link text-secondary":"nav-link text-secondary" } 
                    to={page.path}>
                    {page.pageName}
                    </NavLink>: "" } )}                 
                 
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    )};
}