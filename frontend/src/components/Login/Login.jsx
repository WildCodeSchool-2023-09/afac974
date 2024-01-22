import React, { useState } from "react";
import PropTypes from "prop-types";
import Instance from "../../services/axios";
import { success, error } from "../../services/toast";

import "./Login.scss";

function FormRegister({ isLogin, modal }) {
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const hChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const hSubmit = (e) => {
    e.preventDefault();

    Instance.post("/register", register)
      .then((res) => {
        if (res.status === 200) {
          success("Vous êtes bien enregistré");
        }
      })
      .catch((err) => {
        console.error(err);
        error("Une erreur est survenu");
      });
  };

  return (
    <div className="field">
      <div>
        <div className="modal-overlay">
          <form className="form" onSubmit={hSubmit}>
            <button className="closeLogin" type="button" onClick={modal}>
              <p> X </p>
            </button>
            <p className="heading">Inscription</p>
            <div className="field">
              <svg
                className="input-icon"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16px"
                height="16px"
                viewBox="0 0 50 50"
                fill="white"
              >
                {" "}
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  d="M 21.5,2.5 C 29.1495,1.65036 34.1495,4.81702 36.5,12C 36.094,18.3705 34.4273,24.3705 31.5,30C 31.7591,31.2613 32.4258,32.2613 33.5,33C 36.5833,34.1392 39.5833,35.4725 42.5,37C 44.5744,39.3016 45.9077,41.9683 46.5,45C 32.5,45.6667 18.5,45.6667 4.5,45C 5.09231,41.9683 6.42565,39.3016 8.5,37C 12.232,35.5393 15.732,33.7059 19,31.5C 17.0747,26.4527 15.908,21.1194 15.5,15.5C 14.0907,9.32811 16.0907,4.99478 21.5,2.5 Z M 22.5,5.5 C 32.2038,5.32049 35.2038,9.65382 31.5,18.5C 31.8333,19.1667 32.1667,19.8333 32.5,20.5C 25.4721,30.1208 27.8054,36.2874 39.5,39C 40.6872,40.0195 41.6872,41.1861 42.5,42.5C 31.1667,43.8333 19.8333,43.8333 8.5,42.5C 9.31277,41.1861 10.3128,40.0195 11.5,39C 23.1946,36.2874 25.5279,30.1208 18.5,20.5C 19.0805,18.1127 19.0805,15.6127 18.5,13C 17.9574,9.4027 19.2908,6.9027 22.5,5.5 Z"
                />
              </svg>
              <input
                name="firstname"
                autoComplete="off"
                placeholder="Prénom"
                className="input-field"
                type="text"
                onChange={hChange}
              />
            </div>
            <div className="field">
              <svg
                className="input-icon"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16px"
                height="16px"
                viewBox="0 0 50 50"
                fill="white"
              >
                {" "}
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  d="M 21.5,2.5 C 29.1495,1.65036 34.1495,4.81702 36.5,12C 36.094,18.3705 34.4273,24.3705 31.5,30C 31.7591,31.2613 32.4258,32.2613 33.5,33C 36.5833,34.1392 39.5833,35.4725 42.5,37C 44.5744,39.3016 45.9077,41.9683 46.5,45C 32.5,45.6667 18.5,45.6667 4.5,45C 5.09231,41.9683 6.42565,39.3016 8.5,37C 12.232,35.5393 15.732,33.7059 19,31.5C 17.0747,26.4527 15.908,21.1194 15.5,15.5C 14.0907,9.32811 16.0907,4.99478 21.5,2.5 Z M 22.5,5.5 C 32.2038,5.32049 35.2038,9.65382 31.5,18.5C 31.8333,19.1667 32.1667,19.8333 32.5,20.5C 25.4721,30.1208 27.8054,36.2874 39.5,39C 40.6872,40.0195 41.6872,41.1861 42.5,42.5C 31.1667,43.8333 19.8333,43.8333 8.5,42.5C 9.31277,41.1861 10.3128,40.0195 11.5,39C 23.1946,36.2874 25.5279,30.1208 18.5,20.5C 19.0805,18.1127 19.0805,15.6127 18.5,13C 17.9574,9.4027 19.2908,6.9027 22.5,5.5 Z"
                />
              </svg>
              <input
                name="lastname"
                autoComplete="off"
                placeholder="NOM"
                className="input-field"
                type="text"
                onChange={hChange}
              />
            </div>
            <div className="field">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z">
                  {" "}
                </path>
              </svg>
              <input
                name="email"
                autoComplete="off"
                placeholder="Email"
                className="input-field"
                type="text"
                onChange={hChange}
              />
            </div>
            <div className="field">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z">
                  {" "}
                </path>
              </svg>
              <input
                name="password"
                placeholder="Mot de passe"
                className="input-field"
                type="password"
                onChange={hChange}
              />
            </div>
            <div className="field">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z">
                  {" "}
                </path>
              </svg>
              <input
                placeholder="Confirmer mot de passe"
                className="input-field"
                type="password"
              />
            </div>
            <div className="btn2">
              <button
                type="button"
                className="button1"
                onClick={() => isLogin(true)}
              >
                Connexion
              </button>

              <button
                type="submit"
                className="button2"
                onClick={() => isLogin(false)}
              >
                Inscription
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function FormLogin({ isLogin, modal }) {
  // const { setUser } = useUser();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const hChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const hSubmit = (e) => {
    e.preventDefault();

    Instance.post("/login", login)
      .then((res) => {
        console.info(res.data.user);
        // setUser(res.data.user);
        success("Vous êtes bien loggé");
      })
      .catch((err) => {
        console.error(err);
        error(err.response.data.error);
      });
  };

  return (
    <div className="field">
      <div className="modal-overlay">
        <form className="form" onSubmit={hSubmit}>
          <button className="closeLogin" type="button" onClick={modal}>
            <p> X </p>
          </button>
          <p className="heading">Connexion</p>
          <div className="field">
            <svg
              className="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z">
                {" "}
              </path>
            </svg>
            <input
              autoComplete="off"
              placeholder="Identifiant"
              className="input-field"
              type="text"
              onChange={hChange}
            />
          </div>
          <div className="field">
            <svg
              className="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z">
                {" "}
              </path>
            </svg>
            <input
              placeholder="Mot de passe"
              className="input-field"
              type="password"
              onChange={hChange}
            />
          </div>
          <div className="btn2">
            <button
              type="button"
              className="button1"
              onClick={() => isLogin(true)}
            >
              Connexion
            </button>
            <button
              type="submit"
              className="button2"
              onClick={() => isLogin(false)}
            >
              Inscription
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Login({ closeLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleClickRegister = (switchLogin) => {
    setIsLogin(switchLogin);
  };

  const closeSignUpModal = () => {
    closeLogin(false);
  };

  return (
    <div>
      <div className="modal-overlay">
        {isLogin ? (
          <FormLogin isLogin={handleClickRegister} modal={closeSignUpModal} />
        ) : (
          <FormRegister
            isLogin={handleClickRegister}
            modal={closeSignUpModal}
          />
        )}
      </div>
    </div>
  );
}

FormRegister.propTypes = {
  isLogin: PropTypes.func.isRequired,
  modal: PropTypes.func.isRequired,
};

FormLogin.propTypes = {
  isLogin: PropTypes.func.isRequired,
  modal: PropTypes.func.isRequired,
};

Login.propTypes = {
  closeLogin: PropTypes.func.isRequired,
};

export default Login;
