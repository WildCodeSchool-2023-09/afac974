import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";
import Login from "../Login/Login";

import Chevalet from "../../assets/chevalet.png";
import Artiste from "../../assets/artiste.png";
import Favori from "../../assets/favori.png";
import Compte from "../../assets/compte.png";
import LogoBlanc50 from "../../assets/logoBlanc50.png";
import Logout from "../../assets/logout2.png";
import DiamondTop from "../../assets/diamondTop.svg";
import { useUser } from "../../Contexts/ContextUser";
import Instance from "../../services/axios";

function Navbar() {
  const { user, setUser } = useUser();
  const nav = useNavigate();
  const [openLogin, setOpenLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const hLogout = () => {
    Instance.delete("/logout");
    setUser(null);
    nav("/");
    closeMenu();
  };

  const hAccountClick = () => {
    if (user) {
      nav("/moncompte");
    } else {
      setOpenLogin(true);
    }
    closeMenu();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event, action) => {
    if (event.key === "Enter" || event.key === " ") {
      action();
    }
  };

  return (
    <nav>
      <div className="navBar">
        <Link to="/" onClick={closeMenu}>
          <img src={LogoBlanc50} alt="logo" className="logoAfac" />
        </Link>
        <div
          className={`burger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          onKeyDown={(e) => handleKeyDown(e, toggleMenu)}
          role="button"
          aria-label="Menu"
          tabIndex="0"
        >
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
        <ul className={`iconListe ${isMenuOpen ? "show" : ""}`}>
          <li>
            <NavLink to="/artiste" onClick={closeMenu}>
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
            <NavLink to="/galerie" onClick={closeMenu}>
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
            <NavLink to="/favoris" onClick={closeMenu}>
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
            <button
              type="button"
              className="navButton"
              data-description="Compte 👤"
              onClick={hAccountClick}
            >
              <img src={Compte} alt="login" />
            </button>
          </li>
          {user !== null && (
            <li>
              <button
                type="button"
                className="navButton"
                data-description="Déconnexion 🚫"
                onClick={hLogout}
              >
                <img src={Logout} alt="Se déconnecter" />
              </button>
            </li>
          )}
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
