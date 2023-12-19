import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div>
        <img src="./assets/logoBlanc.png" alt="logo" />
      </div>
      <ul>
        <li>
          <NavLink to="/artiste">
            <button type="button">
              <img src="../assets/artisteBlanc.png" alt="artiste" />
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/galerie">
            <button type="button">
              <img src="../assets/galerieBlanc.png" alt="galerie" />
            </button>
          </NavLink>
        </li>
        <li>
          <button type="button">
            <img src="../assets/compteBlanc.png" alt="favorite" />
          </button>
        </li>
        <li>
          <button type="button">
            <img src="../assets/compteBlanc.png" alt="login" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
