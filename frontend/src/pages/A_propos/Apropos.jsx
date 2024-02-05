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
        <p className="text">
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
      <div className="card">
        <div className="card-1">
          <div className="first-content1">
            <span>Concours Artistique Inter-Écoles</span>
          </div>
          <div className="second-content1">
            <h4>Le 15 mai 2024</h4>
            <p className="second-text">
              Exprimez votre créativité sur le thème "Voyage à travers notre
              Héritage". Chaque classe, chaque école a sa chance de briller.
              Exprimez votre créativité sur le thème "Voyage à travers notre
              Héritage". Chaque classe aura son gagnant, chaque école son
              champion.
            </p>
          </div>
        </div>

        <div className="card-2">
          <div className="first-content2">
            <span>Festival de la Diversité Culturelle</span>
          </div>
          <div className="second-content2">
            <h4>Le 14 décembre 2024</h4>
            <p className="second-text">
              Plongez dans un kaléidoscope culturel mettant la richesse de
              l'Océan Indien l'honneur ! unique. Joignez-vous à nous pour un
              voyage captivant au cœur de la diversité qui nous unit. Save the
              date, partagez l'amour de la culture !
            </p>
          </div>
        </div>

        <div className="card-3">
          <div className="first-content3">
            <span>Street Art itinérant</span>
          </div>
          <div className="second-content3">
            <h4>Le 10 janvier 2025</h4>
            <p className="second-text">
              Suivez-nous d'un quartier à l'autre au travers de fresques
              captivantes alors que nous transportons la richesse de notre
              patrimoine à travers les siècles. Ne manquez pas cette aventure
              culturelle en mouvement !
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2>Nos précédents évènements</h2>
        <h3>Festival Culturel "Kréol Kiltir"</h3>
        <p className="text">
          L'édition annuelle de notre festival "Kréol Kiltir" a célébré la
          richesse et la diversité de la culture réunionnaise. Les participants
          ont pu s'immerger dans des ateliers artistiques, des performances
          musicales envoûtantes et des démonstrations de cuisine créole.
        </p>
        <h3>Journée de Sensibilisation à l'Environnement</h3>
        <p className="text">
          En partenariat avec des organisations locales, nous avons organisé une
          journée dédiée à la sensibilisation environnementale. Les jeunes ont
          participé à des nettoyages de plages, des ateliers de recyclage, et
          des conférences éducatives sur la préservation de notre environnement
          unique.
        </p>
        <h3>Programme de Tutorat Scolaire</h3>
        <p className="text">
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
