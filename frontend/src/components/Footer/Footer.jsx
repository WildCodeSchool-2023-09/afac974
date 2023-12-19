import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <Link to="/aboutus">
          <button type="button" className="transparent-button">
            © Vogue Merry
          </button>
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
