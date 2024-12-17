import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import '../style.css';

export default function Header({pagesPaths, notFound, name}) {



    if (!notFound){
    return (
        // className="navbar navbar-expand-lg bg-dark navbar-dark text-uppercase fixed-top"
    <Navbar bg="dark" expand="lg" className="text-uppercase fixed-top">
        {/* className="container-fluid ms-5" */}
        <Container >
            {/* className="navbar-brand text-white" to="../pages/ */}
            <Navbar.Brand className="brand text-white" to="../pages/">{name}</Navbar.Brand>
            <Navbar.Toggle className="bg-secondary" aria-controls="basic-bavbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                {/* className="navbar-nav mb-2 mb-lg-0 text-secondary" */}
                <Nav className="mb-2 mb-lg-0 ms-auto text-secondary">
                    
                        <NavLink className="nav-link text-secondary" to={pagesPaths.homePath}>accueil</NavLink>
                    
                  
                        <NavLink className="nav-link text-secondary" to={pagesPaths.servicesPath}>services</NavLink>
                 
                   
                        <NavLink className="nav-link text-secondary" to={pagesPaths.portfolioPath}>mes réalisations</NavLink>
                  
                    
                        <NavLink className="nav-link text-secondary" to={pagesPaths.blogPath}>mon blog</NavLink>
                 
                        <NavLink className="nav-link text-secondary" to={pagesPaths.contactPath}>contact</NavLink>
                 
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    )};
}