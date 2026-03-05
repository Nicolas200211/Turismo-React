"use client";

import React from "react";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import { useMainLogic } from "./MainLogic";

const MainView = () => {
  const { destinations } = useMainLogic();

  return (
    <section className="container mx-auto px-6 py-16 md:w-[80%] md:py-24">
      <div className="mb-8">
        <h3 data-aos="fade-up" className="relative w-max z-2 font-semibold text-(--color-tertiary) text-[2rem] after:absolute after:content-[''] after:bg-(--color-quinary) after:h-[5px] after:w-[120px] after:right-0 after:bottom-[5px] after:-z-1">
          Destinos más visitados.
        </h3>
      </div>

      <div className="grid gap-6 justify-center sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="group w-full h-full flex flex-col items-center bg-(--color-primary) rounded-[10px] overflow-hidden shadow-sm hover:bg-(--color-quaternary) hover:shadow-md transition-all duration-300">
                <div className="h-[180px] w-full overflow-hidden relative">
                  <Image src={imgSrc} alt={destTitle} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-110" />
                </div>

                <div className="p-4 w-full grow flex flex-col">
                  <h4 className="text-black text-[1.25rem] font-medium mb-1">{destTitle}</h4>

                  <span className="flex items-center gap-2 mb-2">
                    <HiOutlineLocationMarker className="text-[18px] text-(--color-tertiary)" />
                    <span className="text-(--color-tertiary) font-medium text-[14px]">{location}</span>
                  </span>

                  <div className="w-full flex justify-between items-center px-4 py-4 my-2 border-y border-(--color-nonary) border-opacity-30">
                    <div className="text-(--color-tertiary) leading-[20px] flex items-center justify-center max-w-[150px]">
                      <span className="flex items-center gap-2">
                        {grade}
                        <small className="text-center bg-(--color-primary) rounded-full text-(--color-tertiary) text-[10px] px-2.5 py-px">+1</small>
                      </span>
                    </div>

                    <div className="text-[2rem] text-(--color-tertiary)">
                      <h5 className="font-semibold">{fees}</h5>
                    </div>
                  </div>

                  <div className="text-[13.5px] text-(--color-tertiary) font-medium grow">
                    <p>{description}</p>
                  </div>

                  <button className="w-full mt-4 flex items-center justify-between text-(--color-octonary) font-semibold border-none rounded-[3rem] px-6 py-2.5 bg-(--color-quinary) hover:bg-(--color-secondary) transition-colors cursor-pointer">
                    Descripción <LuClipboardCheck className="text-[18px]" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default MainView;
