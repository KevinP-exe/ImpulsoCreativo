import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SubTitulo from "../components/SubTitulo";
import "../pages/Welcome.css";

const Welcome = () => {
  <link href="/src/styles.css" rel="stylesheet"></link>
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <div className="welcome-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
            alt="Logo de evento"
          />
        </div>

        <SubTitulo titulo="¡Bienvenido a Impulso Creativo!" />

        <p className="welcome-description">
          Organiza, crea y administra tus eventos de forma sencilla.
        </p>

        <Button
          type="button"
          onClick={handleAccept}
          text="Comenzar"
          className="welcome-button"
        />
      </div>
    </div>
  );
};

export default Welcome;
