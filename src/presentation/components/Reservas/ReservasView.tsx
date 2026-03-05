"use client";

import React from "react";
import { useReservasLogic } from "./ReservasLogic";

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ReservasView = ({ isOpen, onRequestClose }: Props) => {
  const { formData, handleChange, handleSubmit } = useReservasLogic(onRequestClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-1000 p-4">
      <div className="bg-(--color-primary) p-5 rounded-lg max-w-[500px] w-full shadow-md z-1001 relative">
        <button onClick={onRequestClose} aria-label="Cerrar modal" className="absolute top-2 right-2 text-xl font-bold p-2 text-(--color-secondary) hover:text-(--color-tertiary) cursor-pointer bg-transparent border-none">
          &times;
        </button>
        <h2 className="text-center text-(--color-secondary) text-2xl font-bold mb-4">Reservar un Viaje</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="text-(--color-octonary) text-sm flex flex-col">
            <span>Nombre:</span>
            <input
              className="w-full p-2 mt-1 border border-(--color-secondary) rounded-md text-black"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
          <label className="text-(--color-octonary) text-sm flex flex-col">
            <span>Email:</span>
            <input
              className="w-full p-2 mt-1 border border-(--color-secondary) rounded-md text-black"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="text-(--color-octonary) text-sm flex flex-col">
            <span>Destino:</span>
            <input
              className="w-full p-2 mt-1 border border-(--color-secondary) rounded-md text-black"
              type="text"
              name="destino"
              value={formData.destino}
              onChange={handleChange}
              required
            />
          </label>
          <label className="text-(--color-octonary) text-sm flex flex-col">
            <span>Fecha:</span>
            <input
              className="w-full p-2 mt-1 border border-(--color-secondary) rounded-md text-black"
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </label>
          <label className="text-(--color-octonary) text-sm flex flex-col">
            <span>Número de personas:</span>
            <input
              className="w-full p-2 mt-1 border border-(--color-secondary) rounded-md text-black"
              type="number"
              name="personas"
              value={formData.personas}
              onChange={handleChange}
              min="1"
              required
            />
          </label>
          <button type="submit" className="p-[10px] bg-(--color-secondary) text-(--color-primary) hover:bg-(--color-tertiary) border-none rounded-md cursor-pointer transition-colors duration-300 font-bold">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservasView;
