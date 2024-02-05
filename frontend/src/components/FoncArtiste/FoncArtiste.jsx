import React, { useState, useEffect } from "react";
import Instance from "../../services/axios";
import { useUser } from "../../Contexts/ContextUser";

import "../../pages/MyAccount/MyAccount.scss";

function FoncArtiste() {
  const { user } = useUser();
  const [artworks, setArtworks] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    Instance.get("/users").catch((err) => console.error(err));
    Instance.get("/artworks")
      .then((res) => setArtworks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <div>
        <h1 className="h1-myAccount">Bonjour {user.firstname}</h1>{" "}
      </div>
      <div>
        <h2 className="h2-myAccount">Tableau de bord des Oeuvres</h2>
        <table className="table-myAccount">
          <tr>
            <th>Nom</th>
            <th>Date</th>
            <th>Style</th>
            <th>Format</th>
            <th>certifier</th>
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
                <button type="submit" className="button-myAccount-artwork">
                  ✏️ {artwork.id}
                </button>
                <button type="button" className="button-myAccount-artwork">
                  ❌ {artwork.id}
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
              type="text"
            />
          </div>
          <div>
            <input name="format" placeholder="Format" type="text" />
          </div>
          <div className="button-add-container">
            <button type="button" className="button-add">
              Ajouter 🖼️
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FoncArtiste;
