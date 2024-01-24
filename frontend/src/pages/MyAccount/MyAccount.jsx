import React from "react";
import "./MyAccount.scss";

function MyAccount() {
  return (
    <div>
      <div>
        <h1>Mon Compte</h1>
        <p className="myaccount-name">Bienvenue, NAME </p>
      </div>
      <div>
        <p>Mes oeuvres préférées</p>
        <p>Ajouter/Supprimer un utilisateur</p>
        <p>Ajouter/Supprimer une oeuvre</p>
      </div>
    </div>
  );
}

export default MyAccount;
