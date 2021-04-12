import React from "react";
//importa LINK de router dom para las referencias a las rutas
import { Link } from 'react-router-dom';


export default function header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          {/* Se agrega el Link con la referencia a la ruta */}

            <Link to={'/'} className="nav-link">
                        CRUD - React,  REST API & Axios
                    </Link>
          {/* Se agrega el Link con la referencia a la ruta */}
            <Link to={"/productos/nuevo"}
                className="nav-link"
            >Agregar Producto &#43;</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
