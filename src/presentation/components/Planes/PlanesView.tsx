"use client";

import React from "react";
import Link from "next/link";
import { usePlanesLogic } from "./PlanesLogic";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PlanesView = () => {
  const { planes } = usePlanesLogic();

  return (
    <section className="container mx-auto px-6 py-32 md:w-[80%] min-h-screen flex flex-col justify-center">
      <div className="mb-12 text-center">
        <span className="text-[13px] sm:text-[16px] text-(--color-denary) font-semibold uppercase tracking-wider">Membresías</span>
        <h2 data-aos="fade-down" className="relative w-max mx-auto z-2 font-bold text-(--color-senary) text-[2rem] md:text-[2.5rem] after:absolute after:content-[''] after:bg-(--color-quinary) after:h-[6px] after:w-[120px] after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:-z-1">
          Elige tu <span className="text-(--color-secondary)">Plan Ideal</span>
        </h2>
        <p className="mt-6 text-(--color-tertiary) text-[15px] max-w-2xl mx-auto">
          Aprende el idioma que necesitas para tu siguiente destino. Elige uno de nuestros planes pensados para que hables sin fronteras.
        </p>
      </div>

      <div className="grid gap-8 justify-center sm:grid-cols-2 lg:grid-cols-3 md:items-center">
        {planes.map(({ id, name, price, description, features, featured }) => (
          <div key={id} data-aos="zoom-in" className={`relative flex flex-col p-8 rounded-3xl shadow-xl transition-transform duration-300 ${featured ? "bg-(--color-secondary) text-white md:scale-110 shadow-2xl z-10" : "bg-white text-(--color-tertiary) hover:-translate-y-2"}`}>

            {featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-(--color-quinary) text-(--color-octonary) text-[12px] font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wide">
                Recomendado
              </div>
            )}

            <h3 className={`text-[1.8rem] font-bold mb-2 ${featured ? "text-white" : "text-(--color-secondary)"}`}>
              {name}
            </h3>
            <p className={`text-[14px] mb-6 min-h-[42px] ${featured ? "text-white/80" : "text-(--color-tertiary)/70"}`}>
              {description}
            </p>

            <div className="mb-8">
              <span className="text-[2.5rem] font-bold">{price}</span>
            </div>

            <ul className="flex flex-col gap-4 mb-8 grow">
              {features.map((feature) => (
                <li key={feature.name} className="flex items-center gap-3 text-[14px] font-medium">
                  {feature.included ? (
                    <FaCheckCircle className={featured ? "text-white" : "text-(--color-septenary)"} />
                  ) : (
                    <FaTimesCircle className={featured ? "text-white/30" : "text-(--color-nonary)"} />
                  )}
                  <span className={feature.included ? "" : "line-through opacity-60"}>{feature.name}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/registro?plan=${id}`}
              className={`block text-center w-full py-4 font-bold rounded-xl border-none outline-none cursor-pointer transition-colors duration-300 ${featured ? "bg-white text-(--color-secondary) hover:bg-(--color-quinary) hover:text-white" : "bg-(--color-primary) text-(--color-tertiary) hover:bg-(--color-secondary) hover:text-white"}`}>
              Suscribirse
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlanesView;
