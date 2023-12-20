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
        <Link to="/apropos">
          <button type="button" className="button-vogue">
            © Vogue Merry
          </button>
        </Link>
        <img
          src="src/assets/diamondBottom.svg"
          alt="diamond"
          className="diamond"
        />
      </div>
    </footer>
  );
}
export default Footer;
