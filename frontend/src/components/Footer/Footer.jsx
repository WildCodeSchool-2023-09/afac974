import { Link } from "react-router-dom";
import "./Footer.scss";

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
          <button type="button" className="button-apropos">
            Mentions legales
          </button>
        </Link>
        <Link to="/apropos">
          <button type="button" className="button-vogue">
            © Vogue Merry
          </button>
        </Link>
        <div className="diamond-container">
          <img
            src="src/assets/diamondBottom.svg"
            alt="diamond"
            className="diamond"
          />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
