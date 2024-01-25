import React, { useState } from "react";
import "./Carousel.scss";

import tableau1 from "../../assets/tableaux/tableau1.jpeg";
import tableau2 from "../../assets/tableaux/tableau2.jpeg";
import tableau3 from "../../assets/tableaux/tableau3.jpeg";
import tableau4 from "../../assets/tableaux/tableau4.jpeg";
import tableau5 from "../../assets/tableaux/tableau5.jpeg";
import tableau6 from "../../assets/tableaux/tableau6.jpeg";
import tableau7 from "../../assets/tableaux/tableau7.jpeg";
import tableau8 from "../../assets/tableaux/tableau8.jpeg";
import tableau9 from "../../assets/tableaux/tableau9.jpeg";
import tableau10 from "../../assets/tableaux/tableau10.jpeg";
import tableau11 from "../../assets/tableaux/tableau11.jpeg";
import tableau12 from "../../assets/tableaux/tableau12.jpeg";
import tableau13 from "../../assets/tableaux/tableau13.jpeg";
import tableau14 from "../../assets/tableaux/tableau14.jpeg";
import tableau15 from "../../assets/tableaux/tableau15.jpeg";
import tableau16 from "../../assets/tableaux/tableau16.jpeg";
import tableau17 from "../../assets/tableaux/tableau17.jpeg";
import tableau18 from "../../assets/tableaux/tableau18.jpeg";
import tableau19 from "../../assets/tableaux/tableau19.jpeg";
import tableau20 from "../../assets/tableaux/tableau20.jpeg";
import tableau21 from "../../assets/tableaux/tableau21.jpeg";
import tableau22 from "../../assets/tableaux/tableau22.jpeg";
import tableau23 from "../../assets/tableaux/tableau23.jpeg";
import tableau24 from "../../assets/tableaux/tableau24.jpeg";
import tableau25 from "../../assets/tableaux/tableau25.jpeg";
import tableau26 from "../../assets/tableaux/tableau26.jpeg";
import tableau27 from "../../assets/tableaux/tableau27.jpeg";
import tableau28 from "../../assets/tableaux/tableau28.jpeg";
import tableau29 from "../../assets/tableaux/tableau29.jpeg";
import tableau30 from "../../assets/tableaux/tableau30.jpeg";
import tableau31 from "../../assets/tableaux/tableau31.jpeg";
import tableau32 from "../../assets/tableaux/tableau32.jpeg";
import tableau33 from "../../assets/tableaux/tableau33.jpeg";
import tableau34 from "../../assets/tableaux/tableau34.jpeg";
import tableau35 from "../../assets/tableaux/tableau35.jpeg";
import tableau36 from "../../assets/tableaux/tableau36.jpeg";
import tableau37 from "../../assets/tableaux/tableau37.jpeg";
import tableau38 from "../../assets/tableaux/tableau38.jpeg";
import tableau39 from "../../assets/tableaux/tableau39.jpeg";
import tableau40 from "../../assets/tableaux/tableau40.jpeg";
import tableau41 from "../../assets/tableaux/tableau41.jpeg";
import tableau42 from "../../assets/tableaux/tableau42.jpeg";
import tableau43 from "../../assets/tableaux/tableau43.jpeg";
import tableau44 from "../../assets/tableaux/tableau44.jpeg";
import tableau45 from "../../assets/tableaux/tableau45.jpeg";
import tableau46 from "../../assets/tableaux/tableau46.jpeg";
import tableau47 from "../../assets/tableaux/tableau47.jpeg";
import tableau48 from "../../assets/tableaux/tableau48.jpeg";
import tableau49 from "../../assets/tableaux/tableau49.jpeg";
import tableau50 from "../../assets/tableaux/tableau50.jpeg";
import tableau51 from "../../assets/tableaux/tableau51.jpeg";
import tableau52 from "../../assets/tableaux/tableau52.jpeg";
import tableau53 from "../../assets/tableaux/tableau53.jpeg";
import tableau54 from "../../assets/tableaux/tableau54.jpeg";
import tableau55 from "../../assets/tableaux/tableau55.jpeg";
import tableau56 from "../../assets/tableaux/tableau56.jpeg";
import tableau57 from "../../assets/tableaux/tableau57.jpeg";
import tableau58 from "../../assets/tableaux/tableau58.jpeg";
import tableau59 from "../../assets/tableaux/tableau59.jpeg";
import tableau60 from "../../assets/tableaux/tableau60.jpeg";
import tableau61 from "../../assets/tableaux/tableau61.jpeg";
import tableau62 from "../../assets/tableaux/tableau62.jpeg";
import tableau63 from "../../assets/tableaux/tableau63.jpeg";
import tableau64 from "../../assets/tableaux/tableau64.jpeg";
import tableau65 from "../../assets/tableaux/tableau65.jpeg";
import tableau66 from "../../assets/tableaux/tableau66.jpeg";
import tableau67 from "../../assets/tableaux/tableau67.jpeg";
import tableau68 from "../../assets/tableaux/tableau68.jpeg";
import tableau69 from "../../assets/tableaux/tableau69.jpeg";
import tableau70 from "../../assets/tableaux/tableau70.jpeg";
import tableau71 from "../../assets/tableaux/tableau71.jpeg";
import tableau72 from "../../assets/tableaux/tableau72.jpeg";
import tableau73 from "../../assets/tableaux/tableau73.jpeg";
import tableau74 from "../../assets/tableaux/tableau74.jpeg";
import tableau75 from "../../assets/tableaux/tableau75.jpeg";
import tableau76 from "../../assets/tableaux/tableau76.jpeg";
import tableau77 from "../../assets/tableaux/tableau77.jpeg";
import tableau78 from "../../assets/tableaux/tableau78.jpeg";
import tableau79 from "../../assets/tableaux/tableau79.jpeg";

const images = [
  tableau1,
  tableau2,
  tableau3,
  tableau4,
  tableau5,
  tableau6,
  tableau7,
  tableau8,
  tableau9,
  tableau10,
  tableau11,
  tableau12,
  tableau13,
  tableau14,
  tableau15,
  tableau16,
  tableau17,
  tableau18,
  tableau19,
  tableau10,
  tableau20,
  tableau21,
  tableau22,
  tableau23,
  tableau24,
  tableau25,
  tableau26,
  tableau27,
  tableau28,
  tableau29,
  tableau30,
  tableau31,
  tableau32,
  tableau33,
  tableau34,
  tableau35,
  tableau36,
  tableau37,
  tableau38,
  tableau39,
  tableau40,
  tableau41,
  tableau42,
  tableau43,
  tableau44,
  tableau45,
  tableau46,
  tableau47,
  tableau48,
  tableau49,
  tableau50,
  tableau51,
  tableau52,
  tableau53,
  tableau54,
  tableau55,
  tableau56,
  tableau57,
  tableau58,
  tableau59,
  tableau60,
  tableau61,
  tableau62,
  tableau63,
  tableau64,
  tableau65,
  tableau66,
  tableau67,
  tableau68,
  tableau69,
  tableau70,
  tableau71,
  tableau72,
  tableau73,
  tableau74,
  tableau75,
  tableau76,
  tableau77,
  tableau78,
  tableau79,
];

function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = (imageId) => {
    if (selectedImage === imageId) {
      setSelectedImage(null);
    } else {
      setSelectedImage(imageId);
    }
  };

  const handleKeyDown = (event, imageId) => {
    if (event.key === "Enter") {
      handleSelectImage(imageId);
    }
  };

  return (
    <div className="main-galerie">
      <div className="frame">
        <div className="box-galery">
          {images.map((image, index) => {
            const imageId = `tableau${index + 1}`;
            return (
              <div
                key={imageId}
                className={`gallery-item ${
                  selectedImage === imageId ? "selected" : ""
                }`}
                onClick={() => handleSelectImage(imageId)}
                onKeyDown={(event) => handleKeyDown(event, imageId)}
                tabIndex={0}
                role="button"
                aria-label={`Voir le tableau ${index + 1}`}
              >
                <img src={image} alt={`Tableau ${index + 1}`} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Galerie;
