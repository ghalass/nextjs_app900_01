import React from "react";

const Navauth = () => {
  return (
    <ul className="navbar-nav d-flex">
      <li className="nav-item dropdown ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          GHALASS
        </a>
        <ul className="dropdown-menu dropdown-menu-sm-end">
          <li>
            <a className="dropdown-item" href="#">
              Profil
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Déconnecter
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navauth;
