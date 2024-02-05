import React, { useState, useEffect } from "react";
import Instance from "../../services/axios";
import avatar from "../../assets/artiste1.png";

import "./Artiste.scss";

function Artiste() {
  const [artworks, setArtworks] = useState([]);

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
            <div className="artwork-image">
              <img
                src={avatar}
                alt="Avatar"
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
            </div>
            <div className="artwork-info">
              <div>{`${artwork.firstname} ${artwork.lastname}`}</div>
              <div>{artwork.name}</div>
              <div>{artwork.style}</div>
              <div>{artwork.format}</div>
              <div>{artwork.date}</div>
              <div>{artwork.certified ? "Oui" : "Non"}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artiste;
