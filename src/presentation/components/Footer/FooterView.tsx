"use client";

import React from "react";
import Link from "next/link";
import { FiSend, FiChevronRight } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useFooterLogic } from "./FooterLogic";

const FooterView = () => {
  useFooterLogic();

  return (
    <section className="w-full relative py-8 px-6 md:px-0 m-auto flex items-center justify-center">
      <div className="absolute inset-0 bg-[#2f6a7f] h-full z-10 mix-blend-hard-light"></div>

      <div className="absolute inset-0 h-full w-full">
        <video src="/assets/Movie/video2.mp4" loop autoPlay muted className="w-full h-full object-cover"></video>
      </div>

      <div className="w-full container m-auto md:w-[80%] pt-32 pb-16 z-100 flex flex-col gap-12 text-(--color-primary)">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:items-center">
          <div data-aos="fade-up" className="text">
            <small className="text-[13px] text-(--color-primary) font-medium uppercase">Mantente en Contacto</small>
            <h2 className="text-[1.8rem] md:text-[2.2rem] text-(--color-primary) mt-2 font-bold">Viaja con nosotros</h2>
          </div>

          <div className="flex items-center gap-4 flex-col sm:flex-row w-full md:w-max">
            <input data-aos="fade-up" type="text" placeholder="Ingresa tu correo" className="w-full bg-transparent border border-(--color-primary) px-4 py-3 rounded-[3rem] outline-none text-(--color-primary) text-[13px] placeholder-(--color-primary) font-medium focus:border-(--color-quinary)" />
            <button data-aos="fade-up" className="w-full sm:w-max bg-(--color-quinary) flex items-center justify-center gap-2 px-6 py-3 rounded-[3rem] text-(--color-octonary) hover:bg-(--color-secondary) transition-colors border-none outline-none font-semibold cursor-pointer" type="submit">
              Enviar
              <FiSend className="text-[18px]" />
            </button>
          </div>
        </div>

        <div className="bg-(--color-primary) rounded-2xl p-8 md:p-12 w-full flex flex-col lg:flex-row gap-8 lg:gap-12 relative overflow-hidden" data-aos="fade-up" data-aos-duration="5000">
          <div className="flex flex-col gap-4 basis-full lg:basis-1/3">
            <div data-aos="fade-up">
              <Link href="/" className="flex items-center text-(--color-tertiary) font-semibold text-[1.5rem] md:text-[2rem] gap-2">
                <MdTravelExplore className="text-[35px] text-(--color-quinary)" />
                Aventura Viajera.
              </Link>
            </div>
            <div data-aos="fade-up" className="text-[13px] md:text-[14px] text-(--color-tertiary) font-medium flex flex-col gap-2">
              <p>Conoce el mundo de una manera diferente</p>
              <p>Explora destinos únicos y vive experiencias inolvidables.</p>
              <p>Contacta con nosotros: info@miappturismo.com</p>
              <p>Síguenos en nuestras redes sociales:</p>
            </div>

            <div data-aos="fade-up" className="flex gap-3 text-(--color-secondary) text-[20px]">
              <FaFacebookSquare className="cursor-pointer hover:text-(--color-quinary)" />
              <FaInstagramSquare className="cursor-pointer hover:text-(--color-quinary)" />
              <IoLogoWhatsapp className="cursor-pointer hover:text-(--color-quinary)" />
            </div>
          </div>

          <div className="basis-full lg:basis-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-duration="5000" className="flex flex-col gap-3">
              <span className="text-[16px] font-bold text-(--color-tertiary) mb-2 uppercase">NUESTRA AGENCIA</span>
              {["Servicio", "Seguro", "Agencia", "Paymen"].map(link => (
                <li key={link} className="flex items-center text-(--color-tertiary) font-medium text-[14px] hover:text-(--color-quinary) hover:translate-x-1 transition-transform cursor-pointer">
                  <FiChevronRight className="text-[18px] mr-2" /> {link}
                </li>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="flex flex-col gap-3">
              <span className="text-[16px] font-bold text-(--color-tertiary) mb-2 uppercase">PARTNERS</span>
              {["Bookings", "Rentcars", "HotelWord", "Trivago", "TripAviasor"].map(link => (
                <li key={link} className="flex items-center text-(--color-tertiary) font-medium text-[14px] hover:text-(--color-quinary) hover:translate-x-1 transition-transform cursor-pointer">
                  <FiChevronRight className="text-[18px] mr-2" /> {link}
                </li>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-duration="3000" className="flex flex-col gap-3">
              <span className="text-[16px] font-bold text-(--color-tertiary) mb-2 uppercase">LAS MINUTE</span>
              {["London", "California", "Indonesia", "Europe", "Oceania"].map(link => (
                <li key={link} className="flex items-center text-(--color-tertiary) font-medium text-[14px] hover:text-(--color-quinary) hover:translate-x-1 transition-transform cursor-pointer">
                  <FiChevronRight className="text-[18px] mr-2" /> {link}
                </li>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center bg-nonary bg-opacity-30 rounded-[10px] p-6 absolute bottom-0 left-0 right-0 gap-2">
            <small className="text-[10px] text-(--color-tertiary) uppercase font-medium">THE BEST TRAVEL WEBSITE</small>
            <small className="text-[10px] text-(--color-tertiary) font-medium">&copy; 2024 NOVA. All rights reserved.</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterView;
