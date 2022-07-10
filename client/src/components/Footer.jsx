import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style_main_admin.css"
import img from "../images/Direccion.png";

export default class Footer extends Component {
    render() {
        return (
            <footer>
            <div className="row align-items-center justify-content-center">
                <div className="col-sm-5 d-flex justify-content-center">
                    <div>
                        <h4>Contactos</h4>
                        <ul>
                            <li>Numero +593 99 999 9999</li>
                            <li>Numero +593 88 888 8888</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-5 d-flex justify-content-center">
                    <div>
                        <h4>Dirección</h4>
                        <img src={img} alt="" width="350px" height="200px"/>
                        <p>Quito - Juan del Rio y Gabriel de la Huerta</p>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
}