import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="navBar">
        <Link to="/">
          <img src="src/assets/logoBlanc50.png" alt="logo" />
        </Link>
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
            <NavLink to="/compte">
              <button
                type="button"
                className="navButton"
                data-description="Compte 👤"
              >
                <img src="src/assets/compte.png" alt="login" />
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
