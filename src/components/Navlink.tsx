"use client";

import { listNavlinks } from "@/helpers/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
             <Link className={`nav-link`} href={"/"}>
                  Home
                </Link>
          </a> */}
          <Link className={`navbar-brand`} href={"/"}>
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Configs
                </a>
                <ul className="dropdown-menu">
                  {listNavlinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        key={link.route}
                        className={`dropdown-item  ${
                          pathname === link.route ? " text-bg-info" : ""
                        } hover:border-b-gray-400`}
                        href={link.route}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            {/* LOGIN */}
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
                <ul className="dropdown-menu dropdown-menu-lg-end">
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navlink;
