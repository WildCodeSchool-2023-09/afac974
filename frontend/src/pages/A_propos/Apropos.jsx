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
      <div className="event">
        <button className="event-block1" type="button">
          Event 1
        </button>
        <button className="event-block2" type="button">
          Event 2
        </button>
        <button className="event-block3" type="button">
          Event 3
        </button>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quas
          ex delectus fuga a asperiores tempora iure, eos exercitationem
          similique omnis natus perspiciatis? Quas nihil corporis aliquam soluta
          placeat ut. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis cum eius consequatur nisi voluptatem eos repellendus, dicta
          sunt sit fugiat itaque commodi officiis odit consectetur assumenda
          ipsam saepe nobis minima. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim, excepturi? Eum inventore et cupiditate,
          quaerat quam ut molestias consequatur sequi illum corporis, voluptates
          nulla assumenda, libero sed nobis quia deleniti?
        </p>
      </div>
    </div>
  );
}

export default Apropos;
