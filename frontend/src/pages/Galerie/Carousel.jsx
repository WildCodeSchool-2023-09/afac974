import React, { useState } from "react";
import "./Carousel.scss";

function Carousel() {
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
    <div className="frame">
      <div className="box-galery">
        {[...Array(80)].map((_, index) => {
          const imageId = `tableau${index + 1}`;
          const imagePath = `/tableaux/tableau${index + 1}.jpeg`;

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
              <img src={imagePath} alt={`Tableau ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
