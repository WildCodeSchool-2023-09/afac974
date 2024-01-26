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
            <button type="button">
              ✏️ Modifier la personne avec l'id {personne.id}
            </button>
            <button type="button">
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
            <button type="button">
              ✏️ Modifier l'artwork avec l'id {artwork.id}
            </button>
            <button type="button">
              ❌ Supprimer l'artwork avec l'id {artwork.id}
            </button>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Admin;
