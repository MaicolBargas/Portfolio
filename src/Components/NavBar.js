import React from 'react';
import '../css/App.css'
const NavBar = () => {

    return(   
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" >
        <div className="container">
          <a className="navbar-brand" href="/">Maicol Bargas</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item"><a href="#Sobremi" className="nav-link"><span>Sobre Mi</span></a></li>
              <li className="nav-item"><a href="#Aptitudes" className="nav-link"><span>Conocimientos</span></a></li>
              <li className="nav-item"><a href="#experiencias" className="nav-link"><span>Experiencias</span></a></li>
              <li className="nav-item"><a href="#proyectos " className="nav-link"><span>Mis Proyectos</span></a></li>
              <li className="nav-item"><a href="#contacto" className="nav-link"><span>Contacto</span></a></li>
            </ul>
          </div>
        </div>     
      </nav>
      
    );
}

export default NavBar;