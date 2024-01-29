import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import Instance from "../../services/axios";
import { useUser } from "../../Contexts/ContextUser";

import "../../pages/MyAccount/MyAccount.scss";

function Admin() {
  const { user } = useUser();
  const [users, setUsers] = useState([]);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    Instance.get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
    Instance.get("/artworks")
      .then((res) => setArtworks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const hDelete = (id, theme) => {
    // etape 1 récuperer l'id de l'utilisateur a delete ✅
    console.info("id to delete: ", id);
    console.info("theme to delete: ", theme);
    // etape 2 envoi une requete vers le backend qui va supprimer l'utilisateur
    Instance.delete(`/users/${id}`)
      .then(() => {
        Instance.get("/users")
          .then((res) => setUsers(res.data))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };
  // etape 3 faire un message comme quoi l'utilisateur est bien delete
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
      <h1>Bonjour {user.firstname}</h1>
      <hr />
      <h2>Utilisateurs</h2>
      {/* listes d'utilisateurs */}
      <table>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Email</th>
          <th>Role</th>
          <th>Modifier</th>
        </tr>
        {users.map((personne) => (
          <tr key={personne.id}>
            <td>{personne.firstname}</td>
            <td>{personne.lastname}</td>
            <td>{personne.email}</td>
            <td>{personne.id_role}</td>
            <h4>✏️ Modifier la personne avec l'id {personne.id}</h4>
            <div>
              <select onChange={hChange}>
                <option value="3">utilisateur</option>
                <option value="2">artiste</option>
                <option value="1">admin</option>
              </select>
            </div>
            <button type="button" onClick={() => hDelete(personne.id, "users")}>
              ❌ Supprimer la personne avec l'id {personne.id}
            </button>
          </tr>
        ))}
      </table>
      <hr />
      <h2>Artwork</h2>
      {/* Listes des artwork */}
      <table>
        <tr>
          <th>Nom</th>
          <th>Date</th>
          <th>Style</th>
          <th>Format</th>
          <th>certifier</th>
        </tr>
        {artworks.map((artwork) => (
          <tr key={artwork.id}>
            <td>{artwork.name}</td>
            <td>{artwork.date}</td>
            <td>{artwork.style}</td>
            <td>{artwork.format}</td>
            <td>{artwork.certified}</td>
            <button type="button">
              ✏️ Modifier l'artwork avec l'id {artwork.id}
            </button>
            <button type="button">
              ❌ Supprimer l'artwork avec l'id {artwork.id}
            </button>
          </tr>
        ))}
      </table>
      <h3>Ajouter une oeuvre</h3>
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
            className=""
            type="date"
            onChange={hChange}
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
          <select onChange={hChange}>
            <option value="true">conforme</option>
            <option value="false">non conforme</option>
          </select>
        </div>

        <div className="">
          <button type="submit" className="">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
