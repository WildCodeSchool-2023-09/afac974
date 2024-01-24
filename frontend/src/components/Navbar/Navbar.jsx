import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";
import Login from "../Login/Login";

import Chevalet from "../../assets/chevalet.png";
import Artiste from "../../assets/artiste.png";
import Favori from "../../assets/favori.png";
import Compte from "../../assets/compte.png";
import LogoBlanc50 from "../../assets/logoBlanc50.png";
import DiamondTop from "../../assets/diamondTop.svg";
import { useUser } from "../../Contexts/ContextUser";
import Instance from "../../services/axios";

function Navbar() {
  const { user, setUser } = useUser();
  const nav = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);

  const hLogout = () => {
    Instance.delete("/logout");
    setUser(null);
    nav("/");
  };

  return (
    <nav>
      <div className="navBar">
        <Link to="/">
          <img src={LogoBlanc50} alt="logo" className="logoAfac" />
        </Link>
        <ul className="iconListe">
          <li>
            <NavLink to="/artiste">
              <button
                type="button"
                className="navButton"
                data-description="Artistes 🎨"
              >
                <img src={Artiste} alt="artiste" />
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/galerie">
              <button
                type="button"
                className="navButton"
                data-description="Galerie 🖼️"
              >
                <img src={Chevalet} alt="galerie" />
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/favoris">
              <button
                type="button"
                className="navButton"
                data-description="Favoris 🤍"
              >
                <img src={Favori} alt="favorite" />
              </button>
            </NavLink>
          </li>
          <li>
            {user !== null ? (
              <button type="button" onClick={hLogout}>
                Se déconnecter
              </button>
            ) : (
              <button
                type="button"
                className="navButton"
                data-description="Compte 👤"
                onClick={() => {
                  setOpenLogin(true);
                }}
              >
                <img src={Compte} alt="login" />
              </button>
            )}
            {/* <button
              type="button"
              className="navButton"
              data-description="Compte 👤"
              onClick={() => {
                setOpenLogin(true);
              }}
            >
              <img src={Compte} alt="login" />
            </button> */}
          </li>
          {openLogin && <Login closeLogin={setOpenLogin} />}
        </ul>
        <div className="diamondTop-container">
          <img src={DiamondTop} alt="diamond" className="diamondTop" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
