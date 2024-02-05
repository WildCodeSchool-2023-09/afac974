import { Link } from "react-router-dom";
import "./Footer.scss";

import DiamondBottom from "../../assets/diamondBottom.svg";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="container">
        <Link to="/apropos" onClick={scrollToTop}>
          <button type="button" className="button-apropos">
            À propos
          </button>
        </Link>

        <Link to="/mentionslegales" onClick={scrollToTop}>
          <button type="button" className="button-mentions">
            Mentions legales
          </button>
        </Link>

        <Link to="/politiquedeconfidentialite" onClick={scrollToTop}>
          <button type="button" className="button-rgpd">
            Politique de Confidentialité
          </button>
        </Link>
        <Link to="/apropos" onClick={scrollToTop}>
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
