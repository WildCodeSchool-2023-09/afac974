import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";
import Login from "../Login/Login";

function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <nav>
      <div className="navBar">
        <Link to="/">
          <img src="src/assets/logoBlanc50.png" alt="logo" />
        </Link>
        <img
          src="src/assets/diamondTop.svg"
          alt="diamond"
          style={{
            width: "40px",
            height: "auto",
            marginLeft: "18rem",
            marginTop: "3.6rem",
          }}
        />
        <ul className="iconListe">
          <li>
            <NavLink to="/artiste">
              <button
                type="button"
                className="navButton"
                data-description="Artistes 🎨"
              >
                <img src="src/assets/artiste.png" alt="artiste" />
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
                <img src="src/assets/chevalet.png" alt="galerie" />
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
                <img src="src/assets/favori.png" alt="favorite" />
              </button>
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              className="navButton"
              data-description="Compte 👤"
              onClick={() => {
                setOpenLogin(true);
              }}
            >
              <img src="src/assets/compte.png" alt="login" />
            </button>
          </li>
          {openLogin && <Login closeLogin={setOpenLogin} />}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
