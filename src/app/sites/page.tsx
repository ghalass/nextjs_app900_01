import { getSites } from "@/apiCalls/siteApiCall";
import { Site } from "@prisma/client";
import React from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";

const SitesPage = async () => {
  // type Site = {
  //   id: number;
  //   name: string;
  // };

  // const sites = [];

  // for (let i = 1; i < 10; i++) {
  //   sites.push({
  //     id: i,
  //     name: "site 0" + i,
  //     desc: "desc site 0" + i,
  //   });
  // }

  // const [loading, setLoading] = useState(false);

  // const [currentSite, setCurrentSite] = useState<Site>({
  //   id: 0,
  //   name: "",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // });
  // const [usersList, setUsersList] = useState<Site[]>([]);

  const sites: Site[] = await getSites("");

  // const edit = async (s: Site) => {
  //   setCurrentSite(s);
  // };
  // const create = async () => {
  //   setCurrentSite({
  //     id: 0,
  //     name: "",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   });
  // };

  // const store = async () => {
  //   // alert(currentSite.name);
  // };

  return (
    <div className="">
      <h1>Sites Page</h1>

      <div className="card">
        <div className="card-header d-flex gap-1">
          <button
            // onClick={create}
            type="button"
            className="btn btn-sm btn-outline-primary d-flex p-1"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="bi bi-plus-lg"></i>Nouveau
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Site</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sites.map((item: Site, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td className="d-flex gap-1 align-items-center">
                      <button
                        // onClick={() => edit(item)}
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
        </div>
      </div>

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
                {/* {currentSite?.id != 0 ? "Modification" : "Création"} */}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <p>{currentSite?.id}</p> */}

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Site"
                  // value={currentSite.name}
                  // onChange={(e) =>
                  //   setCurrentSite({ id: currentSite.id, name: e.target.value })
                  // }
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
              <button
                // onClick={store}
                type="button"
                className="btn btn-sm btn-outline-primary"
              >
                {/* {currentSite?.id != 0 ? "Modifier" : "Ajouter"} */}
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
            <div className="modal-body">{/* <p>{currentSite?.name}</p> */}</div>
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
