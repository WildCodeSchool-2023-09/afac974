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
          style={{
            width: "40px",
            height: "auto",
            marginTop: "2.1rem",
            marginLeft: "33.3rem",
          }}
        />{" "}
      </div>
    </footer>
  );
}
export default Footer;
