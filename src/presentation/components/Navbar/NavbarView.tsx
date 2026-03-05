"use client";

import React from 'react';
import Link from 'next/link';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoIosCloseCircle } from 'react-icons/io';
import { TbGridDots } from "react-icons/tb";
import ReservasModal from '../Reservas/ReservasView';
import { useNavbarLogic } from './NavbarLogic';

const NavbarView = () => {
  const { active, modalIsOpen, showNav, removeNavbar, openModal, closeModal } = useNavbarLogic();

  return (
    <section className="relative w-full">
      <header className="fixed flex items-center justify-between bg-(--color-primary) w-full p-4 z-1000 shadow-[0_2px_4px_rgba(2,15,29,0.904)] md:px-8 md:py-6 xl:px-34">
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-(--color-tertiary) font-semibold cursor-pointer">
            <h1 className="flex items-center text-[1.5rem] md:text-[2rem]"><MdOutlineTravelExplore className="text-[35px] text-(--color-quinary) translate-y-[5px] mr-1" />Aventura Viajera.</h1>
          </Link>
        </div>

        <div className={`absolute md:static bg-(--color-primary) md:bg-transparent md:h-auto h-max w-[80%] md:w-auto rounded-2xl md:rounded-none left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 md:translate-x-0 p-4 md:p-0 z-2000 md:z-auto transition-all duration-300 ease-in-out shadow-[0_2px_4px_rgba(2,15,29,0.904)] md:shadow-none ${active ? "top-28" : "-top-2400 md:top-auto"}`}>
          <ul className="flex flex-col md:flex-row items-center justify-center w-full m-auto py-2 md:py-0 md:space-x-[0.45rem] lg:space-x-[0.7rem]">
            {["Inicio", "Paquetes", "Comercio", "Acerca de", "Aprende", "Noticias", "Contacto"].map(item => (
              <li className="py-2 md:py-0" key={item}>
                <Link href={item === "Aprende" ? "/#idiomas" : "/"} className="text-(--color-tertiary) text-[0.9rem] font-semibold md:font-medium hover:text-(--color-quinary) md:hover:text-(--color-denary) px-2">{item}</Link>
              </li>
            ))}
            <button className="mt-4 md:mt-0 md:ml-4 py-[0.6rem] px-6 bg-(--color-quinary) hover:bg-(--color-secondary) text-(--color-tertiary) md:text-(--color-octonary) font-semibold md:font-medium rounded-full cursor-pointer border-none" onClick={openModal}>
              Reserva ahora
            </button>
          </ul>

          <button onClick={removeNavbar} aria-label="Cerrar navegación" className="block md:hidden absolute top-4 right-4 text-2xl text-(--color-tertiary) hover:text-(--color-quinary) cursor-pointer border-none bg-transparent">
            <IoIosCloseCircle />
          </button>
        </div>

        <button onClick={showNav} aria-label="Abrir navegación" className="block md:hidden cursor-pointer group bg-transparent border-none">
          <TbGridDots className="text-[25px] text-(--color-tertiary) group-hover:text-(--color-quinary)" />
        </button>
      </header>
      <ReservasModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </section>
  );
};

export default NavbarView;
