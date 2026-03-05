"use client";

import React from "react";
import Link from "next/link";
import { useIdiomasLogic } from "./IdiomasLogic";
import { FaGraduationCap } from "react-icons/fa6";
import { GiTalk } from "react-icons/gi";

const IdiomasView = () => {
  const { idiomas } = useIdiomasLogic();

  return (
    <section className="container mx-auto px-6 py-16 md:w-[80%] md:py-24" id="idiomas">
      <div className="mb-12 text-center md:text-left">
        <span className="text-[13px] sm:text-[16px] text-(--color-denary) font-semibold uppercase tracking-wider">Aprende con nosotros</span>
        <h3 data-aos="fade-right" className="relative w-max mx-auto md:mx-0 z-2 font-bold text-(--color-senary) text-[2rem] md:text-[2.5rem] after:absolute after:content-[''] after:bg-(--color-quinary) after:h-[6px] after:w-[120px] after:right-0 after:-bottom-2 after:-z-1">
          No solo viaja, <span className="text-(--color-secondary)">aprende también.</span>
        </h3>
        <p className="mt-6 text-(--color-tertiary) text-[15px] max-w-2xl mx-auto md:mx-0">
          Enriquece tu experiencia de viaje aprendiendo los idiomas locales. Acércate más a la cultura de cada destino comunicándote en su lengua nativa.
        </p>
      </div>

      <div className="grid gap-8 justify-center sm:grid-cols-2 lg:grid-cols-3">
        {idiomas.map(({ id, name, description, level, featured }) => (
          <div key={id} data-aos="fade-up" className={`group relative w-full flex flex-col items-center rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${featured ? "bg-(--color-secondary) text-white" : "bg-(--color-primary) text-(--color-tertiary)"}`}>

            {featured && (
              <div className="absolute top-4 left-4 z-10 bg-(--color-quinary) text-(--color-octonary) text-[12px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                Prioridad
              </div>
            )}

            <div className="h-[220px] w-full relative overflow-hidden bg-gray-200">
              <div className="absolute inset-0 z-1 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              {/* Dummy layout for image since we don't have real imgs for these yet */}
              <div className="absolute inset-0 flex items-center justify-center bg-(--color-denary) z-0">
                <GiTalk className="text-white text-[80px] opacity-20" />
              </div>
            </div>

            <div className="p-6 w-full flex flex-col flex-1 z-10 bg-white/5 backdrop-blur-sm">
              <h4 className={`text-[1.5rem] font-bold mb-2 flex items-center gap-2 ${featured ? "text-white" : "text-black"}`}>
                <FaGraduationCap className={featured ? "text-(--color-quinary)" : "text-(--color-secondary)"} />
                {name}
              </h4>

              <span className="flex items-center gap-2 mb-4">
                <span className={`text-[13px] font-semibold border px-2 py-1 rounded-md ${featured ? "border-white/30 text-white" : "border-(--color-nonary) text-(--color-denary)"}`}>
                  Nivel: {level}
                </span>
              </span>

              <p className={`text-[14.5px] font-medium grow leading-relaxed ${featured ? "text-white/90" : "text-(--color-tertiary)/80"}`}>
                {description}
              </p>

              <Link
                href="/planes"
                className={`block text-center border-none w-full mt-6 py-3 font-semibold rounded-xl cursor-pointer transition-colors duration-300 ${featured ? "bg-white text-(--color-secondary) hover:bg-(--color-quinary) hover:text-white" : "bg-(--color-secondary) text-white hover:bg-(--color-quinary)"}`}>
                Empezar a aprender
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IdiomasView;
