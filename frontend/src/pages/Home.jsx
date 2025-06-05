import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import useFetchEvent from "../hooks/useFetchEvent";
import useEventActions from "../hooks/useEventActions";
import "../pages/Home.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const { dataEvent, getEvents } = useFetchEvent();
  const { deleteEvent, handleUpdateEvent } = useEventActions(getEvents);

  return (
    <div className="home-container relative">
      {/* Botón modo oscuro */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 px-4 py-2 rounded-md bg-gray-800 text-white text-sm shadow hover:bg-gray-700 transition"
      >
        {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>

      <Link to="/events" className="home-add-button">
        Agregar Eventos
      </Link>

      <Titulo titulo="Informacion de los eventos" />

      <p className="home-description">Lista de eventos registrados.</p>

      <div className="table-container">
        <table className="event-table">
          <thead className="table-header">
            <tr>
              <th className="table-th">🎉 Evento</th>
              <th className="table-th">📍 Dirección</th>
              <th className="table-th">📂 Tipo de Evento</th>
              <th className="table-th">📝 Descripción</th>
              <th className="table-th">⚙️ Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataEvent?.map((event) => (
              <tr key={event.id} className="table-row">
                <td className="table-td">{event.evento}</td>
                <td className="table-td">{event.direccion}</td>
                <td className="table-td">{event.tipoEvento}</td>
                <td className="table-td">{event.descripcion}</td>
                <td className="table-td flex flex-wrap items-center gap-2">
                  <Button
                    text="Editar"
                    variant="edit"
                    onClick={() => handleUpdateEvent(event.id)}
                    icon="edit"
                  />
                  <Button
                    text="Eliminar"
                    variant="delete"
                    onClick={() => deleteEvent(event.id)}
                    icon="delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

