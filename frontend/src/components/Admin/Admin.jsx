import React, { useState, useEffect } from "react";
import Instance from "../../services/axios";
import { useUser } from "../../Contexts/ContextUser";

import "../../pages/MyAccount/MyAccount.scss";

function Admin() {
  const { user } = useUser();
  const [users, setUsers] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    Instance.get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
    Instance.get("/artworks")
      .then((res) => setArtworks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const hDelete = (id, theme) => {
    if (theme === "users") {
      Instance.delete(`/users/${id}`)
        .then(() => {
          Instance.get("/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    } else {
      console.info("Work In Progress: Artwork");
    }
  };

  const [addArtwork, setAddArtwork] = useState({
    name: "",
    date: "",
    style: "",
    format: "",
    certified: "",
  });

  const hChange = (e) => {
    setAddArtwork({ ...addArtwork, [e.target.name]: e.target.value });
  };

  const hChangeSelect = (e) => {
    console.info(e.target.value);
  };

  const hSubmit = (e) => {
    e.preventDefault();

    Instance.post("/artworks", addArtwork)
      .then((res) => {
        if (res.status === 200) {
          addArtwork(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <h1 className="h1-myAccount">Bonjour {user.firstname}</h1>
      <hr />
      <h2 className="h2-myAccount">Utilisateurs</h2>
      {/* listes d'utilisateurs */}
      <table className="table-myAccount-users">
        <tr className="tr-myAccount">
          <th>Prenom</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        {users.map((personne) => (
          <tr key={personne.id}>
            <td>{personne.firstname}</td>
            <td>{personne.lastname}</td>
            <td>{personne.email}</td>
            <div className="button-container">
              <select className="button-role" onChange={hChangeSelect}>
                <option value="3" selected={personne.id_role === 3}>
                  Utilisateur
                </option>
                <option value="2" selected={personne.id_role === 2}>
                  Artiste
                </option>
                <option value="1" selected={personne.id_role === 1}>
                  Admin
                </option>
              </select>
            </div>
            <td>
              <div className="button-container">
                <button type="button" className="button-myAccount">
                  ✏️{" "}
                </button>
                <button
                  type="button"
                  className="button-myAccount"
                  onClick={() => hDelete(personne.id, "users")}
                >
                  ❌
                </button>
              </div>
            </td>
          </tr>
        ))}
      </table>
      <hr />
      <h2 className="h2-myAccount">Oeuvres</h2>
      {/* Listes des artwork */}
      <table className="table-myAccount">
        <tr>
          <th>Nom</th>
          <th>Date</th>
          <th>Style</th>
          <th>Format</th>
          <th>Certifier</th>
        </tr>
        {artworks.map((artwork) => (
          <tr key={artwork.id}>
            <td>{artwork.firstname}</td>
            <td>{artwork.lastname}</td>
            <td>{artwork.email}</td>
            <td>{artwork.id_role}</td>
            <div className="button-container">
              <button type="button" className="button-myAccount">
                ✏️ Modifier la personne avec l'id {artwork.id}
              </button>
              <button type="button" className="button-myAccount">
                ❌ Supprimer la personne avec l'id {artwork.id}
              </button>
            </div>
          </tr>
        ))}
      </table>
      <h3 className="h3-myAccount">Ajouter une oeuvre</h3>
      <form className="form-myAccount" onSubmit={hSubmit}>
        <div>
          <input
            name="name"
            autoComplete="off"
            placeholder="NOM"
            className=""
            type="text"
            onChange={hChange}
          />
        </div>
        <div>
          <input
            name="date"
            autoComplete="off"
            placeholder="date de création"
            value={selectedDate}
            onChange={handleDateChange}
            type="date"
          />
        </div>
        <div>
          <input
            name="style"
            autoComplete="off"
            placeholder="Style"
            className=""
            type="text"
            onChange={hChange}
          />
        </div>
        <div>
          <input
            name="format"
            placeholder="Format"
            className=""
            type="text"
            onChange={hChange}
          />
        </div>
        <div>
          <select onChange={hChange} name="certified">
            <option value="true">conforme</option>
            <option value="false">non conforme</option>
          </select>
        </div>

        <div className="">
          <button type="submit" className="button-add">
            Ajouter 🖼️
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
