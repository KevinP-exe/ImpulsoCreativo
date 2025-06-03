import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 via-white to-red-200 text-center px-4">
    {/* Imagen o ícono decorativo */}
    <div className="mb-6 animate-bounce">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Error 404"
        className="w-28 h-28 mx-auto"
      />
    </div>

    <h1 className="text-7xl font-extrabold text-red-600 mb-4">404</h1>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
      Página no encontrada
    </h2>
    <p className="mb-6 text-gray-600">
      Lo sentimos, la página que estás buscando no existe o fue movida.
    </p>

    <Link
      to="/"
      className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
    >
      Volver al inicio
    </Link>
  </div>
);

export default PageNotFound;