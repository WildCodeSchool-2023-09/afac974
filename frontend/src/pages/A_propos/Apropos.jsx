import React from "react";
import "./Apropos.scss";

function Apropos() {
  return (
    <div className="global">
      <h1>
        À propos de l'
        <img className="bgh1" src="./src/assets/logoBlanc.png" alt="logo" />
      </h1>
      <div>
        <p>
          L'Association des Familles Amies de Capeline 974 est dédiée à apporter
          un soutien significatif aux étudiants de l'Océan Indien et à leurs
          familles en leur fournissant des ressources adaptées aux territoires
          ultramarins. Notre engagement dans le développement éducatif, culturel
          et social de ces communautés est une source de fierté pour nous, et
          nous sommes honorés de contribuer au renforcement de leur cohésion
          sociale. Pour les Journées Européennes du Patrimoine 2023, notre
          association a lancé un projet ambitieux : l'élaboration d'une galerie
          virtuelle innovante. Cette galerie, résultat d'un travail méticuleux,
          exposera une sélection soigneuse d'environ vingt aquarelles et
          dessins, chacun reflétant la richesse de notre héritage artistique.
        </p>
      </div>
      <h2>Nos évènements à venir</h2>
      <div className="event">
        <button className="event-block1" type="button">
          Concours Artistique Inter-Écoles
        </button>
        <button className="event-block2" type="button">
          Semaine de la Diversité Culturelle
        </button>
        <button className="event-block3" type="button">
          Forum Éducatif et Professionnel
        </button>
      </div>
      <div>
        <h2>Nos précédents évènements</h2>
        <h3>Festival Culturel "Kréol Kiltir"</h3>
        <p>
          L'édition annuelle de notre festival "Kréol Kiltir" a célébré la
          richesse et la diversité de la culture réunionnaise. Les participants
          ont pu s'immerger dans des ateliers artistiques, des performances
          musicales envoûtantes et des démonstrations de cuisine créole.
        </p>
        <h3>Journée de Sensibilisation à l'Environnement</h3>
        <p>
          En partenariat avec des organisations locales, nous avons organisé une
          journée dédiée à la sensibilisation environnementale. Les jeunes ont
          participé à des nettoyages de plages, des ateliers de recyclage, et
          des conférences éducatives sur la préservation de notre environnement
          unique.
        </p>
        <h3>Programme de Tutorat Scolaire</h3>
        <p>
          Notre programme de tutorat a connu un grand succès, offrant un soutien
          académique personnalisé aux élèves de la communauté. Les retours
          positifs des parents et les progrès des élèves témoignent de l'impact
          positif de cette initiative.
        </p>
      </div>
    </div>
  );
}

export default Apropos;
