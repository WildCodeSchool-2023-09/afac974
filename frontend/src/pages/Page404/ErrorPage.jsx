import { useEffect } from "react";
import Parallax from "parallax-js";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";

function ErrorPage() {
  useEffect(() => {
    const scene = document.getElementById("scene");
    const parallax = new Parallax(scene);

    return () => {
      parallax.disable();
    };
  }, []);
  return (
    <div className="errorPage">
      <section className="wrapper">
        <div className="container">
          <div id="scene" className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2">
              {" "}
            </div>

            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"> </span>
                <span className="piece"> </span>
                <span className="piece"> </span>
              </div>
            </div>

            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece"> </span>
                <span className="piece"> </span>
                <span className="piece"> </span>
              </div>
            </div>

            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece"> </span>
                <span className="piece"> </span>
                <span className="piece"> </span>
              </div>
            </div>

            <p className="p404" data-depth="0.50">
              404
            </p>
            <p className="p404" data-depth="0.10">
              404
            </p>
          </div>

          <div className="text">
            <article>
              <p>Zot la perdi chemin ! La page zot i cherche,</p>
              <p>li la envolé comme un papangue dans le ciel !</p>
              <Link to="/">
                <button type="button">Go a la case !</button>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage;
