import React from "react";
import '../css/App.css'
import me from '../images/img.jpg'

const AboutMe = () => {

    return (
        <div >
            <div className="Mepresento" id='Sobremi'>
            <h1 className="tittle"> Hola! ¿Que tal?</h1>   
            <hr></hr>
                <h4> Mi nombre es Maicol Bargas, actualmente soy estudiante de la carrera <i>Analista Programador</i> en instituto CTC (Colonia)</h4>
            </div>
            <div className="myInfo">
                <h3 className="tittle">Sobre Mi</h3>
                <hr/>
                <h6><b><i>NOMBRE:</i></b>   Maicol Bargas</h6>
                <h6><b><i>FECHA DE NACIMIENTO:</i></b> 01 Oct. 2002 </h6>
                <h6><b><i>CIUDAD:</i></b>  Ecilda Paullier, San José</h6>
                <h6><b><i>DOMICILIO:</i></b> Mevir II 22876</h6>
                <h6><b><i>CELULAR:</i></b> 099114234 </h6>
                <h6><b><i>E-MAIL:</i></b> maicolbargas@gmail.com</h6>
                <img src={me} alt='Yo'/>  
            </div>
        </div>
    )
}
export default AboutMe;