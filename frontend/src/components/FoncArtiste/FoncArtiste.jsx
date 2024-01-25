import React, { useState } from "react";
import Instance from "../../services/axios";
import "../../pages/MyAccount/MyAccount.scss";

function FoncArtiste() {
  const [newArtwork, setNewArtwork] = useState([]);

  /* OEUVRES  */
  const approveArtwork = (artworkId) => {
    Instance.put(`/artwork/${artworkId}`)
      .then(() => {
        setNewArtwork(newArtwork.filter((artwork) => artwork.id !== artworkId));
      })
      .catch((error) => {
        console.error("Erreur lors de l'acceptation de l'oeuvre", error);
      });
  };

  const deleteArtwork = (artworkId) => {
    Instance.delete(`/artwork/${artworkId}`)
      .then(() => {
        setNewArtwork(newArtwork.filter((artwork) => artwork.id !== artworkId));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l'oeuvre", error);
      });
  };

  return (
    <div>
      <div>
        <h1>Mon Compte</h1>
        <p className="myaccount-name">Bienvenue</p>
      </div>
      <div>
        <h2>Dashboard des Oeuvres</h2>
        {newArtwork.map((artwork) => (
          <div key={artwork.id}>
            <span>{artwork.name}</span>
            <span>{artwork.img}</span>
            <button type="button" onClick={() => approveArtwork(artwork.id)}>
              Valider l'oeuvre
            </button>
            <button type="button" onClick={() => deleteArtwork(artwork.id)}>
              Supprimer l'oeuvre
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoncArtiste;
