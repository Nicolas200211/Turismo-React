import { useState } from "react";

export const useReservasLogic = (onRequestClose: () => void) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    destino: "",
    fecha: "",
    personas: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    onRequestClose();
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
