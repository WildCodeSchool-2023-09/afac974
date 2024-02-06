import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Instance from "../../services/axios";
import { useUser } from "../../Contexts/ContextUser";
import { success } from "../../services/toast";

import "../../pages/MyAccount/MyAccount.scss";

function FoncArtiste() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [artworks, setArtworks] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const formatIsoDate = (dateString) => {
    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      return "";
    }
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    Instance.get("/users").catch((err) => console.error(err));
    Instance.get("/artworks")
      .then((res) => setArtworks(res.data))
      .catch((err) => console.error(err));
  }, [loading]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const [addArtwork, setAddArtwork] = useState({
    name: "",
    date: "",
    style: "",
    format: "",
    certified: false,
  });

  const hChange = (e) => {
    setAddArtwork({ ...addArtwork, [e.target.name]: e.target.value });
  };

  const hCheckbox = (e) => {
    setAddArtwork({ ...addArtwork, certified: e.target.checked });
  };

  const hSubmit = (e) => {
    e.preventDefault();
    const artworkModifie = { ...addArtwork, date: selectedDate };

    Instance.post("/artworks", artworkModifie)
      .then(() => {
        success("L'artwork est bien ajouté en DB!");
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading((prev) => !prev));
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
            <tr key={artwork.id_user}>
              <td>{artwork.name}</td>
              <td>{formatIsoDate(artwork.date)}</td>
              <td>{artwork.style}</td>
              <td>{artwork.format}</td>
              <td>{artwork.certified}</td>
              <div className="button-container">
                <Link
                  className="button-myAccount-artwork"
                  to={`/admin/artwork/update/${artwork.id}`}
                >
                  ✏️ {artwork.id}
                </Link>
                <button type="button" className="button-myAccount-artwork">
                  ❌ {artwork.id}
                </button>
              </div>
            </tr>
          ))}
        </table>
        <h3 className="h3-myAccount">Ajouter une oeuvre</h3>
        <form className="form-myAccount" onSubmit={hSubmit}>
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
              value={formatIsoDate(selectedDate)}
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
            <input
              type="file"
              name="artworkImage"
              accept="image/*"
              onChange={hChange}
            />
          </div>
          <div>
            <input type="checkbox" name="certified" onChange={hCheckbox} />
          </div>
          <div className="button-add-container">
            <button
              type="submit"
              className="button-add"
              onClick={() => hChange}
            >
              Ajouter 🖼️
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FoncArtiste;
