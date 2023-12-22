import "./Artiste.scss";

import Artiste1 from "../../assets/artiste1.png";

function Artiste() {
  return (
    <main className="artist-content">
      <section className="artist-profile">
        <img src={Artiste1} alt="Nom Artiste" className="profile-image" />{" "}
        <h1>Nom Artiste</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </section>
      <section className="artist-gallery">
        <img
          src="./tableaux/tableau1.jpeg"
          alt="Oeuvre 1"
          className="gallery-image"
        />
        <img
          src="./tableaux/tableau2.jpeg"
          alt="Oeuvre 2"
          className="gallery-image"
        />
        <img
          src="./tableaux/tableau3.jpeg"
          alt="Oeuvre 3"
          className="gallery-image"
        />
      </section>
    </main>
  );
}

export default Artiste;
