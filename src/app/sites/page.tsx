"use client";

import React, { useState } from "react";
import { FaTrashAlt, FaPlus, FaPen } from "react-icons/fa";

const SitesPage = () => {
  type Site = {
    id: string;
    name: string;
    desc: string;
  };

  const sites = [];

  for (let i = 1; i < 10; i++) {
    sites.push({
      id: "00" + i,
      name: "site 0" + i,
      desc: "desc site 0" + i,
    });
  }

  const [site, setSite] = useState<Site>();

  const edit = async (s: Site) => {
    setSite(s);
  };

  return (
    <div className="">
      <h1>Sites Page</h1>
      <button
        onClick={() =>
          edit({
            id: "",
            name: "",
            desc: "",
          })
        }
        type="button"
        className="btn btn-sm btn-outline-primary d-flex p-1"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <FaPlus />
      </button>

      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Site</th>
            <th>Desc</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sites.map((item: Site, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td className="d-flex gap-1 align-items-center">
                  <button
                    onClick={() => edit(item)}
                    type="button"
                    className="btn btn-sm btn-outline-primary d-flex p-1"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <FaPen />
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger d-flex p-1"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropDelete"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* CREATE-EDIT MODAL */}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {site?.id != "" ? "Modification" : "Création"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{site?.name}</p>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Site"
                />
                <label htmlFor="floatingInput">Site</label>
              </div>

              {/*  */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-sm btn-outline-primary">
                {site?.id != "" ? "Modifier" : "Ajouter"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}
      <div
        className="modal fade"
        id="staticBackdropDelete"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropDeleteLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropDeleteLabel">
                Suppression
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{site?.name}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-sm btn-outline-primary">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitesPage;
