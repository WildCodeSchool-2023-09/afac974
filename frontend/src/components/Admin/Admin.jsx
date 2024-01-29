import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Instance from "../../services/axios";
import { useUser } from "../../Contexts/ContextUser";
import { success } from "../../services/toast";

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

  const hChangeSelect = (e, id) => {
    const newRoleId = e.target.value;
    Instance.put(`/users/${id}/role`, { id_role: newRoleId })
      .then(() => {
        Instance.get("/users")
          .then(() => success("L'utilisateur a bien son rôle modifié"))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
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
      Instance.delete(`/artworks/${id}`)
        .then(() => {
          Instance.get("/artwoks")
            .then((res) => setArtworks(res.data))
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
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
      <table className="table-myAccount">
        <tr className="tr-myAccount">
          <th>Nom</th>
          <th>Prenom</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        {users.map((personne) => (
          <tr key={personne.id}>
            <td>{personne.firstname}</td>
            <td>{personne.lastname}</td>
            <td>{personne.email}</td>
            <td>
              <select onChange={(e) => hChangeSelect(e, personne.id)}>
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
            </td>
            <td>
              <Link
                to={`/admin/users/update/${personne.id}`}
                style={{ margin: "0 5px" }}
              >
                ✏️{" "}
              </Link>
              <button
                type="button"
                style={{ margin: "0 5px" }}
                onClick={() => hDelete(personne.id, "users")}
              >
                ❌
              </button>
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
              <button type="submit" className="button-myAccount">
                ✏️ Modifier la personne avec l'id {artwork.id}
              </button>
              <button
                type="button"
                className="button-myAccount"
                onClick={() => hDelete(artwork.id, "artworks")}
              >
                ❌ Supprimer la personne avec l'id {artwork.id}
              </button>
            </div>
          </tr>
        ))}
      </table>
      <h3 className="h3-myAccount">Ajouter une oeuvre</h3>
      <form onSubmit={hSubmit}>
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
          <button type="submit" className="button-add" onClick={() => hChange}>
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
