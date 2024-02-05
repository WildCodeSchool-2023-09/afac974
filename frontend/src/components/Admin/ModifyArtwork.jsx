import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Instance from "../../services/axios";
import { success, error } from "../../services/toast";

import "./ModifyUser.scss";

function ModifyArtwork() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    Instance.get(`/artworks/${id}`)
      .then((res) => {
        setArtwork(res.data);
      })
      .catch((err) => error(err));
  }, []);

  const hChange = (e) => {
    setArtwork({ ...artwork, [e.target.name]: e.target.value });
  };

  const hSubmit = (e) => {
    e.preventDefault();
    Instance.put(`/artworks/${id}`, artwork)
      .then(() => {
        success("L'oeuvre a bien été mis à jour");
        navigate("/moncompte ");
      })
      .catch((err) => error(err));
  };

  return (
    <>
      <h1 className="h1-modify">Modifier l'oeuvre : {id}</h1>
      <form className="form-modify" onSubmit={hSubmit}>
        <div>
          <label className="label-modify" htmlFor="name">
            Nom
          </label>
          <input
            type="text"
            name="name"
            value={artwork.name}
            onChange={hChange}
          />
        </div>
        <div>
          <label className="label-modify" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={artwork.date}
            onChange={hChange}
          />
        </div>
        <div>
          <label className="label-modify" htmlFor="style">
            Style
          </label>
          <input
            type="text"
            name="style"
            value={artwork.style}
            onChange={hChange}
          />
        </div>
        <div>
          <label className="label-modify" htmlFor="format">
            Format
          </label>
          <input
            type="text"
            name="format"
            value={artwork.format}
            onChange={hChange}
          />
        </div>
        <div className="button-modify-container">
          <button type="submit" className="button-modify">
            Envoyer le formulaire
          </button>
        </div>
      </form>
    </>
  );
}

export default ModifyArtwork;
