import React from "react";
import '../css/App.css'


const Aptitudes = () => {

    return (
    <div className="aptitudes" id="Aptitudes"> 
        <hr></hr>
        <h2 className="tittle"> Mis Conocimientos</h2>
                <h6>HTML</h6>
                <div className="progress">   
                    <div className="progress-bar progress-bar-striped progress-bar-animated" id='progressbarHTML' role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>CSS</h6>
                <div className="progress">   
                    <div className="progress-bar progress-bar-striped progress-bar-animated" id='progressbarCSS' role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>JAVASCRIPT</h6>
                <div className="progress">   
                    <div className="progress-bar progress-bar-striped progress-bar-animated" id='progressbarJS' role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>C#</h6>
                <div className="progress">   
                    <div className="progress-bar progress-bar-striped progress-bar-animated" id='progressbarC' role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>REACT</h6>
                <div className="progress">   
                    <div className="progress-bar progress-bar-striped progress-bar-animated" id='progressbarREACT' role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>SQL SERVER</h6>
                <div className="progress">   
                    <div className="progress-bar progress-bar-striped progress-bar-animated" id='progressbarSQL' role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
    )
}
export default Aptitudes;