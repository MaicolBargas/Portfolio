import React from "react";
import '../css/App.css'
import { Carousel } from 'react-bootstrap';


const Proyectos = () => {

    return (
        //CABE ACLARAR QUE NO HE INGRESADO NINGUN PROYECTO AUN PORQUE NO TENGO NINGUNO QUE CONSIDERE APROPIADO INGRESAR.
        //EN CUANTO VAYA TERMINANDO CIERTOS TRABAJOS COMO POR EJEMPLO LOS OBLIGATORIOS DE ESTE SEMESTRE PODRE IR AGREGANDO
    <div className="proyectos" id="proyectos"> 
        <hr></hr>
        <h2 className="tittle">  Mis Proyectos  </h2>
                <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src='#'
            alt="First slide"
            />
            <Carousel.Caption>                      
            <h3>Mi primer Proyecto</h3>
            <p>Descripcion breve del mismo</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src='#'
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Segundo proyecto</h3>
            <p> Descripcion breve del mismo</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src='#'
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Tercer proyecto</h3>
            <p>Descripcion breve del mismo</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
     
        </div>
    )
}
export default Proyectos;