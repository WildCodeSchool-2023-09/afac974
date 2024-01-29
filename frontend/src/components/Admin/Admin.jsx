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
          <th>Modifier</th>
        </tr>
        {users.map((personne) => (
          <tr key={personne.id}>
            <td>{personne.firstname}</td>
            <td>{personne.lastname}</td>
            <td>{personne.email}</td>
            <td>{personne.id_role}</td>
            <div className="button-container">
              <button type="button" className="button-myAccount">
                ✏️ Modifier la personne avec l'id {personne.id}
              </button>
              <button
                className="button-myAccount"
                type="button"
                onClick={() => hDelete(personne.id, "users")}
              >
                ❌ Supprimer la personne avec l'id {personne.id}
              </button>
            </div>
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
      <form className="form-myAccount">
        <div>
          <input
            name="name"
            autoComplete="off"
            placeholder="NOM"
            className=""
            type="text"
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
          />
        </div>
        <div>
          <input name="format" placeholder="Format" className="" type="text" />
        </div>
        <div>
          <input
            name="certified"
            placeholder="Certifier"
            className=""
            type="password"
          />
        </div>

        <div className="">
          <button type="button" className="button-add">
            Ajouter 🖼️
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
