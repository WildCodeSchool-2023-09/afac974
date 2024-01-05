import { Link } from "react-router-dom";
import "./Footer.scss";

import DiamondBottom from "../../assets/diamondBottom.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
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
        <div className="diamondBottom-container">
          <img src={DiamondBottom} alt="diamond" className="diamondBottom" />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
