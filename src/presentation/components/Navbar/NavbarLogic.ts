import { useState } from "react";

export const useNavbarLogic = () => {
  const [active, setActive] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showNav = () => setActive(true);
  const removeNavbar = () => setActive(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return {
    active,
    modalIsOpen,
    showNav,
    removeNavbar,
    openModal,
    closeModal,
  };
};
