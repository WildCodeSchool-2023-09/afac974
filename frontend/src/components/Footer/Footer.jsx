import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <Link to="/apropos">
          <button type="button" className="transparent-button">
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
            marginLeft: "37.3rem",
          }}
        />{" "}
      </div>
    </footer>
  );
}
export default Footer;
