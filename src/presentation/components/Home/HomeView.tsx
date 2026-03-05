"use client";

import React from "react";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { TbApps } from "react-icons/tb";
import { useHomeLogic } from "./HomeLogic";

const HomeView = () => {
  useHomeLogic();

  return (
    <section className="w-full relative flex items-center justify-center m-auto md:h-[70vh] lg:h-[80vh]">
      <div className="absolute inset-0 bg-[#2f6a7f] z-10 mix-blend-hard-light"></div>

      <video src="/assets/Movie/video.mp4" muted autoPlay loop className="absolute inset-0 w-full h-full object-cover"></video>

      <div className="w-full lg:w-[80%] mx-auto h-max pt-32 pb-12 px-6 flex flex-col gap-12 justify-center text-(--color-primary) z-100 lg:px-0">
        <div data-aos="fade-up" className="py-8">
          <span className="text-[13px] sm:text-[16px] uppercase">Our Packages</span>
          <h1 className="relative text-[1.8rem] sm:text-[2.3rem] w-max after:absolute after:content-[''] after:bg-(--color-denary) after:h-[5px] after:w-[145px] after:right-0 after:bottom-[5px] after:-z-10">
            Search your Holidays
          </h1>
        </div>

        <div data-aos="fade-up" className="relative py-8 px-4 bg-(--color-primary) rounded-[10px] gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-4 lg:py-8">
          <div className="w-full">
            <label htmlFor="Ciudad" className="block text-(--color-denary) pb-2.5 text-[13px] font-medium">BUSCA TU DESTINO:</label>
            <div className="flex items-center h-[40px] px-4 bg-(--color-octonary) rounded-[3rem] lg:mb-4">
              <input type="text" placeholder="Ingrese el nombre aquí..." className="bg-transparent border-none outline-none w-full text-[13px] font-medium text-black placeholder:text-[13px] placeholder:text-gray-400" />
              <GrLocation className="text-[18px] text-(--color-denary) ml-2.5" />
            </div>
          </div>

          <div className="w-full">
            <label htmlFor="date" className="block text-(--color-denary) pb-2.5 text-[13px] font-medium">SELECCIONA TU FECHA:</label>
            <div className="flex items-center h-[40px] px-4 bg-(--color-octonary) rounded-[3rem] lg:mb-4">
              <input type="date" className="bg-transparent border-none outline-none w-full text-[13px] font-medium text-black" />
            </div>
          </div>

          <div className="w-full">
            <div className="flex justify-between items-center">
              <label htmlFor="price" className="block text-(--color-denary) pb-2.5 text-[13px] font-medium">PRECIO MAXIMO:</label>
              <h3 className="text-(--color-denary) text-[18px] pb-2.5">$5000</h3>
            </div>
            <div className="flex items-center h-[40px] px-4 bg-(--color-octonary) rounded-[3rem] lg:mb-4">
              <input type="range" max={5000} min={1000} className="w-full cursor-pointer accent-[blue]" />
            </div>
          </div>

          <div className="absolute bg-(--color-septenary) w-max -bottom-3 lg:-bottom-4 gap-3 py-1 px-4 lg:py-2 rounded-[3rem] left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer hover:bg-(--color-denary)">
            <HiFilter className="text-[13px] text-white" />
            <span className="text-[13px] lg:text-[17px] ml-2 text-white font-medium">More Filters</span>
          </div>
        </div>

        <div data-aos="fade-up" className="w-full flex justify-between items-center">
          <div className="flex gap-2">
            <FaFacebookSquare className="text-[20px] text-(--color-primary) font-semibold cursor-pointer hover:text-(--color-septenary)" />
            <IoLogoInstagram className="text-[20px] text-(--color-primary) font-semibold cursor-pointer hover:text-(--color-septenary)" />
            <FaWhatsapp className="text-[20px] text-(--color-primary) font-semibold cursor-pointer hover:text-(--color-septenary)" />
          </div>

          <div className="flex gap-2">
            <IoIosList className="text-[20px] text-(--color-primary) font-semibold cursor-pointer hover:text-(--color-septenary)" />
            <TbApps className="text-[20px] text-(--color-primary) font-semibold cursor-pointer hover:text-(--color-septenary)" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeView;
