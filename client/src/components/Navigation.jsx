import React, { Component } from "react";
//import styles from './styles/Navigation.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style_main_admin.css"
import { Link } from "react-router-dom";
import imgLogo from "../images/logo-06.png";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <Link to="/">
            <img  width="25%" src={imgLogo} alt="logo" />
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                  {
                    /**
                     * <Link to="/" className="nav-item nav-link active">Inicio</Link>
                  <Link to="/login" className="nav-item nav-link active">Login</Link>
                     */
                  }
                </div>
            </div>
        </nav>
    );
  }
}