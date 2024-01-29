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

  /// const hDelete = () => {
  /**
   * La logique pour supprimer l'utilisateur ou l'artwork
   */

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
              <button type="button" className="button-myAccount">
                ❌ Supprimer la personne avec l'id {personne.id}
              </button>
            </div>
          </tr>
        ))}
      </table>
      <hr />
      <h2 className="h2-myAccount">Artwork</h2>
      {/* Listes des artwork */}
      <table className="table-myAccount">
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Email</th>
          <th>Role</th>
          <th>Modifier</th>
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
    </div>
  );
}

export default Admin;
