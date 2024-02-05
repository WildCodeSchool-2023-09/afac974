import React, { useState, useEffect } from "react";
import Instance from "../../services/axios";
import "./Artiste.scss";

function Artiste() {
  const [artworks, setArtworks] = useState([]);

  const formatIsoDate = (dateString) => {
    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      return "";
    }
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    Instance.get("/artworks")
      .then((res) => setArtworks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="global-artiste">
      <h2 className="h2-myAccount">Page des artistes</h2>
      <div className="artworks-container">
        {artworks.map((artwork) => (
          <div className="artwork-entry" key={artwork.id}>
            <div className="artwork-names">
              <div className="artwork-name-user">{`${artwork.firstname} ${artwork.lastname}`}</div>
              <div className="artwork-name">{artwork.name}</div>
            </div>
            <div className="artwork-image">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/${artwork.image}`}
                alt={artwork.name}
                style={{ width: "100px", height: "auto" }}
              />
            </div>
            <div className="artwork-details">
              <div>style: {artwork.style}</div>
              <div>Format: {artwork.format}</div>
              <div>Date : {formatIsoDate(artwork.date)}</div>
              <div>
                {artwork.certified ? "Certifier: Oui" : "Certifier: Non"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artiste;
