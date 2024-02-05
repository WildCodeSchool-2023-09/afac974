import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Instance from "../../services/axios";
import { useUser } from "../../Contexts/ContextUser";
import { success } from "../../services/toast";

import "../../pages/MyAccount/MyAccount.scss";

function Admin() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
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
  }, [loading]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const hChangeSelect = (e, id) => {
    const newRoleId = e.target.value;
    Instance.put(`/users/${id}/role`, { id_role: newRoleId })
      .then(() => {
        success("Le rôle de l'utilisateur est bien à jour");
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading((prev) => !prev));
  };

  const hDelete = (id, theme) => {
    if (theme === "users") {
      Instance.delete(`/users/${id}`)
        .then(() => {
          success("L'utilisateur est bien supprimé");
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading((prev) => !prev));
    } else {
      Instance.delete(`/artworks/${id}`)
        .then(() => {
          success("L'artwork est bien supprimé");
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading((prev) => !prev));
    }
  };

  const [addArtwork, setAddArtwork] = useState({
    name: "",
    date: "",
    style: "",
    format: "",
    certified: false,
  });

  const hChange = (e) => {
    setAddArtwork({ ...addArtwork, [e.target.name]: e.target.value });
  };

  const hCheckbox = (e) => {
    setAddArtwork({ ...addArtwork, certified: e.target.checked });
  };

  const hSubmit = (e) => {
    e.preventDefault();
    const artworkModifie = { ...addArtwork, date: selectedDate };

    Instance.post("/artworks", artworkModifie)
      .then(() => {
        success("L'artwork est bien ajouté en DB!");
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading((prev) => !prev));
  };

  return (
    <div>
      <h1 className="h1-myAccount">Bonjour {user.firstname}</h1>
      <hr />
      <h2 className="h2-myAccount">Utilisateurs</h2>
      {/* listes d'utilisateurs */}
      <table className="table-myAccount-users">
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Rôle</th>
          <th>Actions</th>
        </tr>
        {users.map((personne) => (
          <tr key={personne.id}>
            <td>{personne.firstname}</td>
            <td>{personne.lastname}</td>
            <td>{personne.email}</td>
            <td className="button-role">
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
                className="button-myAccount"
                to={`/admin/users/update/${personne.id}`}
                style={{ margin: "0 5px" }}
              >
                ✏️{" "}
              </Link>
              <button
                className="button-myAccount"
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
          <th>Actions</th>
        </tr>
        {artworks.map((artwork) => (
          <tr key={artwork.id}>
            <td>{artwork.name}</td>
            <td>{artwork.date}</td>
            <td>{artwork.style}</td>
            <td>{artwork.format}</td>
            <td>{artwork.certified}</td>
            <div className="button-container">
              <Link to={`/admin/artwork/update/${artwork.id}`}>
                ✏️ Modifier l'oeuvre avec l'id {artwork.id}
              </Link>
              <button
                type="button"
                className="button-myAccount-artwork"
                onClick={() => hDelete(artwork.id, "artworks")}
              >
                ❌ {artwork.id}
              </button>
            </div>
          </tr>
        ))}
      </table>

      {/* Partie Oeuvres */}
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
          <input
            type="file"
            name="artworkImage"
            accept="image/*"
            onChange={hChange}
          />
        </div>
        <div>
          <input type="checkbox" name="certified" onChange={hCheckbox} />
        </div>
        <div className="button-add-container">
          <button type="submit" className="button-add" onClick={() => hChange}>
            Ajouter 🖼️
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
