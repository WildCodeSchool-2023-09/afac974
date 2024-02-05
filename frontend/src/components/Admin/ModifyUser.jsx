import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Instance from "../../services/axios";
import { success, error } from "../../services/toast";

import "./ModifyUser.scss";

function ModifyUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    Instance.get(`/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => error(err));
  }, []);

  const hChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const hSubmit = (e) => {
    e.preventDefault();
    Instance.put(`/users/${id}`, user)
      .then(() => {
        success("L'utilisateur a bien été mis à jour");
        navigate("/moncompte ");
      })
      .catch((err) => error(err));
  };

  return (
    <>
      <h1 className="h1-modify">Modifier l'utilisateur : {id}</h1>
      <form className="form-modify" onSubmit={hSubmit}>
        <div>
          <label className="label-modify" htmlFor="firstname">
            Prénom
          </label>
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={hChange}
          />
        </div>
        <div>
          <label className="label-modify" htmlFor="lastname">
            Nom
          </label>
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={hChange}
          />
        </div>
        <div>
          <label className="label-modify" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={hChange}
          />
        </div>
        <div>
          <label className="label-modify" htmlFor="password">
            Mot de passe
          </label>
          <input type="password" name="password" onChange={hChange} />
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

export default ModifyUser;
