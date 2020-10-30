import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <button className="btn btn-primary" id="menu-toggle"><i/></button>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">COMPTE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">PROGRAMMATION</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">SUIVI</a>
      </li>
    </ul>
  </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="#">Messages <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Notifications</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Gestionnaire
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#"><i className="feather icon-user" />Profil</a>
            <a className="dropdown-item" href="#">Paramètre</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Vérouiller</a>
            <a className="dropdown-item" href="#">Déconnecter</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</div>

        );
    }
}

export default Header;