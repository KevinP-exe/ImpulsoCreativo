import { Link, useParams } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import useDataEvent from "../hooks/useDataEvent";
import "../pages/Events.css"; // Nuevo archivo CSS

const Events = () => {
  const { id } = useParams();
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataEvent(methods);

  return (
    <div className="events-container">
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
          <Button type="submit" text={id ? "✏️ Editar Evento" : "💾 Guardar Evento"} />
        </div>
      </form>
    </div>
  );
};

export default Events;
