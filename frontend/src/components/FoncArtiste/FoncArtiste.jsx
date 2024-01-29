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
          </tr>
          {artworks.map((artwork) => (
            <tr key={artwork.id}>
              <td>{artwork.firstname}</td>
              <td>{artwork.lastname}</td>
              <td>{artwork.email}</td>
              <td>{artwork.id_role}</td>
              <div className="button-container">
                <button type="button" className="button-myAccount">
                  ❌ Supprimer la peinture' {artwork.id}
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
