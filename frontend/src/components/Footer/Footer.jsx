import { Link } from "react-router-dom";
import "./Footer.scss";

import DiamondBottom from "../../assets/diamondBottom.svg";

function Footer() {
  return (
    <footer>
      <div>
        <Link to="/apropos">
          <button type="button" className="button-apropos">
            A propos
          </button>
        </Link>

        <Link to="/mentionslegales">
          <button type="button" className="button-mentions">
            Mentions legales
          </button>
        </Link>

        <Link to="/politiquedeconfidentialite">
          <button type="button" className="button-rgpd">
            Politique de Confidentialité
          </button>
        </Link>
        <Link to="/apropos">
          <button type="button" className="button-vogue">
            © Vogue Merry
          </button>
        </Link>
        <div className="diamond-container">
          <img src={DiamondBottom} alt="diamond" className="diamond" />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
