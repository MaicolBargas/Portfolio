import React from 'react';
import '../css/App.css'
export default function Footer() {
  return (
    <footer class="ftco-footer ftco-section" id='contacto'>
    <div class="container">
      <div class="row mb-5">
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Sobre mi</h2>
            <p> Mi nombre es Maicol Bargas, tengo 19 años. Actualmente soy estudiante de la carrera Analista Programador en instituto CTC y estoy en busca de mi primer experiencia en el area de desarrollo de software.  </p>
            <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Links</h2>
            <ul class="list-unstyled">
              <li><a href="#Sobremi"><span class="icon-long-arrow-right mr-2"></span>Inicio</a></li>
              <li><a href="#Sobremi"><span class="icon-long-arrow-right mr-2"></span>Sobre Mi</a></li>
              <li><a href="#Aptitudes"><span class="icon-long-arrow-right mr-2"></span>Conocimientos</a></li>
              <li><a href="#experiencias"><span class="icon-long-arrow-right mr-2"></span>Experiencias</a></li>
              <li><a href="#proyectos"><span class="icon-long-arrow-right mr-2"></span>Mis Proyectos</a></li>
              <li><a href="#contacto"><span class="icon-long-arrow-right mr-2"></span>Contacto</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-2">
            <h2 class="ftco-heading-2">Contactame</h2>
            <div class="block-23 mb-3">
              <ul>
                <li><span class="icon icon-map-marker"></span><span class="text">Mevir II 22876, Ecilda Paullier, San José</span></li>
                <li><span class="icon icon-phone"></span><span class="text">099114234</span></li>
                <li><span class="icon icon-envelope"></span><span class="text">maicolbargas@gmail</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </footer>
  );
}
