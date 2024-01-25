import React, { useState } from "react";
import Instance from "../../services/axios";
import "../../pages/MyAccount/MyAccount.scss";

function Admin() {
  const [newArtist, setNewArtist] = useState([]);
  const [newArtwork, setNewArtwork] = useState([]);

  /* ARTISTES */
  const approveArtist = (artistId) => {
    Instance.put(`/artist/${artistId}/approve`)
      .then(() => {
        setNewArtist(newArtist.filter((artist) => artist.id !== artistId));
      })
      .catch((error) => {
        console.error("Erreur lors de l'acceptation de l'artiste", error);
      });
  };

  const deleteArtist = (artistId) => {
    Instance.delete(`/artist/${artistId}`)
      .then(() => {
        setNewArtist(newArtist.filter((artist) => artist.id !== artistId));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l'artiste", error);
      });
  };

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
        <h2>Dashboard des Artistes</h2>
        {newArtist.map((artist) => (
          <div key={artist.id}>
            <span>{artist.name}</span>
            <button type="button" onClick={() => approveArtist(artist.id)}>
              Valider
            </button>
            <button type="button" onClick={() => deleteArtist(artist.id)}>
              Supprimer
            </button>
          </div>
        ))}
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

export default Admin;
