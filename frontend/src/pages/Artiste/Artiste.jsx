import "./Artiste.scss";

import Artiste1 from "../../assets/artiste1.png";

function Artiste() {
  return (
    <div className="global-artist">
      <div className="artist-content">
        <section className="artist-profile">
          <img src={Artiste1} alt="Nom Artiste" className="profile-image" />{" "}
          <h1>Nom Artiste</h1>
        </section>
      </div>
      <div className="artist-content">
        <section className="artist-profile">
          <img src={Artiste1} alt="Nom Artiste" className="profile-image" />{" "}
          <h1>Nom Artiste</h1>
        </section>
      </div>
      <div className="artist-content">
        <section className="artist-profile">
          <img src={Artiste1} alt="Nom Artiste" className="profile-image" />{" "}
          <h1>Nom Artiste</h1>
        </section>
      </div>
      <div className="artist-content">
        <section className="artist-profile">
          <img src={Artiste1} alt="Nom Artiste" className="profile-image" />{" "}
          <h1>Nom Artiste</h1>
        </section>
      </div>
    </div>
  );
}

export default Artiste;
