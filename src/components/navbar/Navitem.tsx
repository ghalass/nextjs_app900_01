import { listNavlinks } from "@/helpers/constants";
import Link from "next/link";
import React from "react";

const Navitem = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-gear"></i>
          <span className="ms-1">Configs</span>
        </a>
        <ul className="dropdown-menu">
          {listNavlinks.map((link, index) => (
            <li key={index}>
              <Link
                key={link.route}
                className={`dropdown-item`}
                href={link.route}
              >
                <i className={link.icon}></i>
                <span className="ms-1"> {link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default Navitem;
