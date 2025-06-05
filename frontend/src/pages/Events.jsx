import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import useDataEvent from "../hooks/useDataEvent";
import "../pages/Events.css";

const Events = () => {
  const { id } = useParams();
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataEvent(methods);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="events-container relative">
      {/* Botón modo oscuro */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 px-4 py-2 rounded-md bg-gray-800 text-white text-sm shadow hover:bg-gray-700 transition"
      >
        {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>

      <Link to="/home" className="back-button">
        ⬅️ Volver a Inicio
      </Link>

      <form onSubmit={handleSubmit} className="event-form">
        <Titulo titulo="📅 Información del Evento" />

        <p className="form-description">
          Coloque aquí la información del evento para guardarlo.
        </p>

        <div className="form-grid">
          <InputText
            type="text"
            name="evento"
            label="🎉 Evento"
            placeholder="Ingresar nombre del evento"
            register={register}
            error={errors.nombre?.message}
          />

          <InputText
            type="text"
            name="direccion"
            label="📍 Dirección"
            placeholder="Ingresar dirección del evento"
            register={register}
            error={errors.nombre?.message}
          />

          <InputText
            type="text"
            name="tipoEvento"
            label="📂 Tipo de evento"
            placeholder="Ingresar el tipo de evento"
            register={register}
            error={errors.nombre?.message}
          />

          <InputText
            type="text"
            name="descripcion"
            label="📝 Descripción"
            placeholder="Ingrese una descripción para el evento"
            register={register}
            error={errors.nombre?.message}
          />
        </div>

        <div className="submit-button">
          <Button
            type="submit"
            text={id ? "✏️ Editar Evento" : "💾 Guardar Evento"}
          />
        </div>
      </form>
    </div>
  );
};

export default Events;

